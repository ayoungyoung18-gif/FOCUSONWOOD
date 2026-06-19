import React from 'react';

export default function TermsPage() {
  return (
    <div className="bg-[#F1EDE8]/30 min-h-screen py-16 px-6 sm:px-8 lg:px-12 font-sans text-[#1A2F28]">
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-[#1A2F28]/5">
        
        {/* 상단 타이틀 부 */}
        <div className="border-b border-[#1A2F28]/10 pb-6 mb-8 text-center sm:text-left">
          <span className="text-[#D4A373] text-xs font-semibold uppercase tracking-widest block mb-2">FOCUS ON WOOD</span>
          <h1 className="text-2xl sm:text-3xl font-medium tracking-wide text-[#1A2F28]">서비스 이용약관</h1>
          <p className="text-[12px] text-[#1A2F28]/50 mt-2">시행일자: 2026년 06월 19일</p>
        </div>

        {/* 본문 콘텐츠 부 */}
        <div className="space-y-8 text-[14px] leading-relaxed text-[#1A2F28]/80">
          <section className="space-y-2">
            <h2 className="text-[15px] font-semibold text-[#1A2F28] border-l-2 border-[#D4A373] pl-2">제1조 (목적)</h2>
            <p>본 약관은 포커스온우드(이하 "회사"라 합니다)가 운영하는 웹사이트(이하 "몰"이라 합니다)에서 제공하는 가구 맞춤 제작 및 인테리어 소품 판매 관련 서비스(이하 "서비스"라 합니다)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-[15px] font-semibold text-[#1A2F28] border-l-2 border-[#D4A373] pl-2">제2조 (정의)</h2>
            <p>1. "몰"이란 회사가 재화 또는 용역을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말합니다.</p>
            <p>2. "이용자"란 "몰"에 접속하여 본 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-[15px] font-semibold text-[#1A2F28] border-l-2 border-[#D4A373] pl-2">제3조 (맞춤 가구 주문 및 제작에 관한 특약)</h2>
            <p>1. 회사가 제공하는 맞춤 가구 견적 및 제작 서비스는 이용자의 개별 요청(사이즈, 목재 종류 등)에 따라 1:1 개별 제조되는 상품입니다.</p>
            <p>2. 제작이 시작된 이후에는 원자재 가공이 진행되므로 이용자의 단순 변심에 의한 주문 취소 및 환불이 제한될 수 있습니다. 단, 제작 전 단계에서의 취소는 회사와 협의 하에 가능합니다.</p>
          </section>

          <section className="space-y-2">
            <h2 className="text-[15px] font-semibold text-[#1A2F28] border-l-2 border-[#D4A373] pl-2">제4조 (구매신청 및 청약철회)</h2>
            <p>1. 이용자는 몰 상에서 상품 및 맞춤 제작 견적을 신청할 수 있으며, 회사는 결제 확인 후 제작 및 배송 일정을 개별 고지합니다.</p>
            <p>2. 소품류 등 일반 기성 제품의 경우, 배송 완료 후 7일 이내에 청약철회(반품/교환)를 요청할 수 있습니다. 단, 상품의 가치가 훼손된 경우는 제외됩니다.</p>
          </section>
        </div>

        {/* 안내 문구 */}
        <div className="bg-[#F1EDE8]/40 rounded p-4 mt-12 text-[12px] text-[#1A2F28]/60 text-center">
          본 이용약관은 공정거래위원회 전자상거래 표준약관을 준수하여 작성되었습니다.
        </div>

      </div>
    </div>
  );
}