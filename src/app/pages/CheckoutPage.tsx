import { useEffect, useRef } from "react";
import { loadPaymentWidget } from "@tosspayments/payment-widget-sdk";
import { useCart } from "../context/CartContext"; // 🟢 장바구니 경로를 확인해 주세요!

// 토스페이먼츠 공식 테스트 클라이언트 키입니다 (사업자 등록 전 가상 테스트용)
const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";
const customerKey = "ANONYMOUS"; // 비회원 또는 임시 유저 식별 키

export default function CheckoutPage() {
  const { totalPrice, items } = useCart();
  const paymentWidgetRef = useRef<any>(null);
  const paymentMethodsWidgetRef = useRef<any>(null); // 중복 렌더링 방지용 Ref

  useEffect(() => {
    async function initPaymentWidget() {
      // 장바구니 총 금액이 0보다 클 때만 안전하게 결제 위젯을 그리도록 수정합니다.
      if (totalPrice > 0) {
        // 1. 토스 결제위젯 초기화
        const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

        // 리액트 특유의 중복 랜더링 버그를 방지하기 위해, 이미 그려진 경우 금액만 업데이트합니다.
        if (paymentMethodsWidgetRef.current) {
          paymentMethodsWidgetRef.current.updateAmount(totalPrice);
        } else {
          // 2. 주문서 영역에 카카오페이/네이버페이/카드 결제 UI를 자동으로 렌더링
          const paymentMethodsWidget = paymentWidget.renderPaymentMethods(
            "#payment-method",
            { value: totalPrice },
            { variantKey: "DEFAULT" }, // 기본 디자인 테마 지정
          );

          // 3. 이용약관 UI 렌더링
          paymentWidget.renderAgreement("#agreement", { variantKey: "DEFAULT" });

          paymentMethodsWidgetRef.current = paymentMethodsWidget;
        }

        paymentWidgetRef.current = paymentWidget;
      }
    }

    initPaymentWidget();
  }, [totalPrice]); // 장바구니 금액이 바뀔 때마다 결제 금액도 자동 갱신됩니다.

  const handlePaymentRequest = async () => {
    const paymentWidget = paymentWidgetRef.current;

    if (!paymentWidget) {
      alert("결제 창이 아직 준비되지 않았습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }

    // 장바구니 첫 번째 상품 이름을 대표 주문 이름으로 설정 (예: 보드기 외 2건)
    const orderName =
      items.length > 1 ? `${items[0].name} 외 ${items.length - 1}건` : items[0]?.name || "포커스온우드 원목 소품";

    try {
      // 3. [결제하기] 버튼을 누르면 토스 보안 결제창이 팝업으로 실행됩니다.
      await paymentWidget.requestPayment({
        orderId: `FOW-${Date.now()}`, // 주문할 때마다 바뀌는 고유 주문번호 생성
        orderName: orderName,
        successUrl: `${window.location.origin}/success`, // 결제 성공 시 이동할 내 사이트 주소
        failUrl: `${window.location.origin}/fail`, // 결제 실패 시 이동할 내 사이트 주소
      });
    } catch (error) {
      console.error("결제창 실행 실패:", error);
    }
  };

  if (items.length === 0) {
    // 💡 비어있을 때 화면도 헤더 가림 방지를 위해 패딩 추가
    return (
      <div style={{ padding: "160px 20px 50px 20px", textAlign: "center" }}>
        장바구니가 비어있습니다. 상품을 먼저 담아주세요!
      </div>
    );
  }

  return (
    // 💡 핵심 수정: padding-top을 40px에서 140px로 늘려 고정형 헤더(Header) 아래로 주문서가 밀려 내려오게 조치했습니다.
    <div style={{ padding: "140px 20px 60px 20px", maxWidth: "600px", margin: "0 auto", color: "#191919" }}>
      <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "30px" }}>주문서 / 결제하기</h2>

      {/* 장바구니 요약 정보 리스트 */}
      <div style={{ borderBottom: "1px solid #eee", paddingBottom: "20px", marginBottom: "20px" }}>
        {items.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px" }}>
            <span>
              {item.name} (x{item.quantity})
            </span>
            <span style={{ marginLeft: "auto", fontWeight: "600" }}>
              {(item.price * item.quantity).toLocaleString()}원
            </span>
          </div>
        ))}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          <span>최종 결제 금액</span>
          <span style={{ marginLeft: "auto", color: "#B38B5D" }}>{totalPrice.toLocaleString()}원</span>
        </div>
      </div>

      {/* 🟢 이 자리에 토스페이먼츠가 제공하는 간편결제 UI가 코딩 없이 자동으로 그려집니다 */}
      <div id="payment-method" style={{ marginBottom: "20px", minHeight: "300px" }} />
      <div id="agreement" style={{ marginBottom: "30px" }} />

      {/* 최종 구매자가 누르는 결제 버튼 */}
      <button
        onClick={handlePaymentRequest}
        style={{
          width: "100%",
          height: "54px",
          backgroundColor: "#191919",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "18px",
          fontWeight: "bold",
          cursor: "pointer",
          transition: "background 0.2s",
        }}
      >
        {totalPrice.toLocaleString()}원 결제하기
      </button>
    </div>
  );
}
