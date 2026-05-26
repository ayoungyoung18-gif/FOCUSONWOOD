// src/app/pages/SuccessPage.tsx
import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function SuccessPage() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { clearCart } = useCart();

  // 토스페이먼츠가 주소창 파라미터로 넘겨주는 데이터들입니다.
  const paymentKey = searchParams.get("paymentKey");
  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");

  useEffect(() => {
    // 🟢 결제가 최종 성공했으므로 장바구니를 시원하게 비워줍니다!
    clearCart();
  }, [clearCart]);

  return (
    <div style={{ padding: "80px 20px", textAlign: "center", color: "#191919", maxWidth: "500px", margin: "0 auto" }}>
      <div style={{ fontSize: "64px", marginBottom: "20px" }}>🎉</div>
      <h2 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "10px" }}>주문이 완료되었습니다!</h2>
      <p style={{ color: "#666", marginBottom: "40px" }}>포커스온우드의 원목 소품을 선택해 주셔서 감사합니다.</p>

      {/* 영수증 대역 정보 리스트 */}
      <div
        style={{
          backgroundColor: "#f9f9f9",
          borderRadius: "12px",
          padding: "20px",
          textAlign: "left",
          marginBottom: "40px",
          fontSize: "15px",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <span style={{ color: "#888" }}>주문 번호</span>
          <span style={{ fontWeight: "600" }}>{orderId}</span>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "12px" }}>
          <span style={{ color: "#888" }}>결제 금액</span>
          <span style={{ fontWeight: "bold", color: "#B38B5D" }}>{Number(amount).toLocaleString()}원</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: "12px",
            color: "#aaa",
            borderTop: "1px solid #eee",
            paddingTop: "12px",
            marginTop: "12px",
          }}
        >
          <span>결제 키</span>
          <span style={{ textOverflow: "ellipsis", overflow: "hidden", whiteSpace: "nowrap", maxWidth: "250px" }}>
            {paymentKey}
          </span>
        </div>
      </div>

      <button
        onClick={() => navigate("/")}
        style={{
          width: "100%",
          height: "50px",
          backgroundColor: "#191919",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          fontSize: "16px",
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        홈으로 돌아가기
      </button>
    </div>
  );
}
