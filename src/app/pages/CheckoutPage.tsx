import { useEffect, useRef, useState } from "react";
import { loadTossPayments } from "@tosspayments/tosspayments-sdk";
import { useCart } from "../context/CartContext"; // 🟢 장바구니 컨텍스트 경로를 확인하세요!

// 토스페이먼츠 공식 지정 최신 샌드박스 가상 테스트 키입니다.
const clientKey = "test_gck_docs_O9ONkM1bkyydb7L2EO38VMw6";
const customerKey = "GUEST_USER_ANONYMOUS_FOW";

export default function CheckoutPage() {
  const { totalPrice, items } = useCart();
  const widgetsRef = useRef<any>(null);
  const [isWidgetReady, setIsWidgetReady] = useState(false);

  // 🟢 핵심 수정: 리액트 화면이 완벽하게 그려진 후 0.2초 뒤에 토스 엔진을 강제 구동합니다.
  useEffect(() => {
    if (!totalPrice || totalPrice <= 0) return;

    let mounted = true;

    // 💡 200ms(0.2초)의 인위적인 딜레이를 주어 HTML 태그(#payment-element)가 완전히 준비될 시간을 벌어줍니다.
    const timer = setTimeout(() => {
      async function initTossv2Engine() {
        try {
          const methodDiv = document.getElementById("payment-element");
          const agreementDiv = document.getElementById("agreement-element");

          // 태그가 없으면 주입을 차단하여 에러를 방지합니다.
          if (!methodDiv || !agreementDiv || !mounted) return;

          // 토스 인프라 비동기 로드
          const tossPayments = await loadTossPayments(clientKey);
          if (!mounted) return;

          const widgets = tossPayments.widgets({ customerKey });

          // 결제 최종 금액 동기화
          await widgets.setAmount({
            currency: "KRW",
            value: totalPrice,
          });

          // 💡 타겟 구역에 카드사 목록과 카카오/네이버 간편결제 UI를 강제 드로잉합니다.
          await widgets.renderPaymentMethods({
            selector: "#payment-element",
            variantKey: "DEFAULT",
          });

          // 이용약관 스크립트 영역 동시 주입
          await widgets.renderAgreement({
            selector: "#agreement-element",
            variantKey: "DEFAULT",
          });

          if (mounted) {
            widgetsRef.current = widgets;
            setIsWidgetReady(true); // 🟢 로딩이 대성공했음을 신호로 알립니다!
          }
        } catch (error) {
          console.error("토스 인프라 강제 부팅 실패:", error);
        }
      }

      initTossv2Engine();
    }, 200);

    return () => {
      mounted = false;
      clearTimeout(timer);
    };
  }, [totalPrice]); // 결제 총액이 감지되는 즉시 0.2초 타이머가 가동됩니다.

  // 결제하기 버튼 실행 제어 함수
  const handlePaymentRequest = async () => {
    const widgets = widgetsRef.current;

    if (!widgets || !isWidgetReady) {
      alert("결제망을 연결 중입니다. 잠시만 기다려주세요!");
      return;
    }

    const orderName =
      items.length > 1 ? `${items[0].name} 외 ${items.length - 1}건` : items[0]?.name || "포커스온우드 원목 오브제";

    try {
      await widgets.requestPayment({
        orderId: `FOW-ORDER-${Date.now()}`,
        orderName: orderName,
        successUrl: `${window.location.origin}/success`,
        failUrl: `${window.location.origin}/fail`,
      });
    } catch (error) {
      console.error("결제 승인창 실행 실패:", error);
    }
  };

  if (items.length === 0) {
    return (
      <div style={{ padding: "160px 20px 50px 20px", textAlign: "center" }}>
        장바구니가 비어있습니다. 상품을 먼저 담아주세요!
      </div>
    );
  }

  return (
    <div style={{ padding: "140px 20px 60px 20px", maxWidth: "600px", margin: "0 auto", color: "#191919" }}>
      <h2
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          marginBottom: "30px",
          borderBottom: "2px solid #191919",
          paddingBottom: "10px",
        }}
      >
        주문서 / 결제하기
      </h2>

      {/* 장바구니 명세 요약 박스 */}
      <div
        style={{
          backgroundColor: "#fdfdfd",
          borderRadius: "12px",
          padding: "20px",
          border: "1px solid #eee",
          marginBottom: "20px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px", fontSize: "15px" }}
          >
            <span style={{ color: "#555" }}>
              {item.name} <span style={{ color: "#999", fontSize: "13px" }}>(x{item.quantity})</span>
            </span>
            <span style={{ fontWeight: "600" }}>{(item.price * item.quantity).toLocaleString()}원</span>
          </div>
        ))}

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold",
            borderTop: "1px dashed #eee",
            paddingTop: "15px",
          }}
        >
          <span>최종 결제 금액</span>
          <span style={{ color: "#B38B5D" }}>{totalPrice.toLocaleString()}원</span>
        </div>
      </div>

      {/* 🟢 시간차 레이아웃 버그를 우회하여 신용카드 탭과 로고들을 그려내는 무대입니다 */}
      <div id="payment-element" style={{ marginBottom: "15px", minHeight: "350px" }} />
      <div id="agreement-element" style={{ marginBottom: "25px" }} />

      {/* 실시간 최종 결제 버튼 */}
      <button
        onClick={handlePaymentRequest}
        style={{
          width: "100%",
          height: "56px",
          backgroundColor: "#191919",
          color: "#fff",
          border: "none",
          borderRadius: "12px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          opacity: isWidgetReady ? 1 : 0.6,
        }}
      >
        {isWidgetReady ? `${totalPrice.toLocaleString()}원 결제하기` : "결제 시스템 구동 중..."}
      </button>
    </div>
  );
}
