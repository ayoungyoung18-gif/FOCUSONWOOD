import React from 'react';

export default function PrivacyPage() {
  return (
    <div className="bg-[#F1EDE8]/30 min-h-screen py-16 px-6 sm:px-8 lg:px-12 font-sans text-[#1A2F28]">
      <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 sm:p-12 shadow-sm border border-[#1A2F28]/5">
        
        {/* 상단 타이틀 부 */}
        <div className="border-b border-[#1A2F28]/10 pb-6 mb-8 text-center sm:text-left">
          <span className="text-[#D4A373] text-xs font-semibold uppercase tracking-widest block mb-2">FOCUS ON WOOD</span>
          <h1 className="text-2xl sm:text-3xl font-medium tracking-wide text-[#1A2F28]">개인정보처리방침</h1>
          <p className="text-[12px] text-[#1A2F28]/50 mt-2">시행일자: 2026년 06월 19일</p>
        </div>

        {/* 본문 콘텐츠 부 */}
        <div className="space-y-8 text-[14px] leading-relaxed text-[#1A2F28]/80">
          <p>포커스온우드(이하 "회사")는 이용자의 개인정보를 소중하게 처리하며, 개인정보보호법 및 정보통신망 이용촉진 및 정보보호 등에 관한 법률 등 관련 법령을 준수하고 있습니다 이용자의 개인정보가 어떠한 용도와 방식으로 이용되고 있으며 안전하게 관리되는지 고지합니다.</p>

          <section className="space-y-2">
            <h2 className="text-[15px] font-semibold text-[#1A2F28] border-l-2 border-[#D4A373] pl-2">1. 수집하는 개인정보의 항목 및 목적</h2>
            <p>회사는 다음의 목적을 위해 필요한 최소한의 개인정보를 수집하고 있습니다.</p>
            <ul className="list-disc list-inside pl-2 space-y-1 text-[#1A2F28]/70">
              <li><strong>맞춤가구 견적 상담:</strong> 이름, 연락처, 이메일 주소, 요청 주소지 (상담 및 실측 확인용)</li>
              <li><strong>스토어 상품 주문 및 결제:</strong> 구매자 정보, 수령인 이름, 배송지 주소, 결제 기록</li>
              <li><strong>회원 관리:</strong> 카카오/SNS 연동 로그인 시 제공받는 식별 정보</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-[15px] font-semibold text-[#1A2F28] border-l-2 border-[#D4A373] pl-2">2. 개인정보의 보유 및 이용기간</h2>
            <p>회사는 이용자의 개인정보를 목적 달성 시까지 보유하며, 목적 달성 후에는 즉시 파기합니다. 단, 전자상거래법 등 관계법령의 규정에 의하여 보존할 필요가 있는 경우 아래와 같이 일정 기간 보존합니다.</p>
            <ul className="list-disc list-inside pl-2 space-y-1 text-[#1A2F28]/70">
              <li>계약 또는 청약철회 등에 관한 기록: 5년</li>
              <li>대금결제 및 재화 등의 공급에 관한 기록: 5년</li>
              <li>소비자의 불만 또는 분쟁처리에 관한 기록: 3년</li>
            </ul>
          </section>

          <section className="space-y-2">
            <h2 className="text-[15px] font-semibold text-[#1A2F28] border-l-2 border-[#D4A373] pl-2">3. 개인정보보호책임자</h2>
            <p>회사는 이용자의 개인정보를 보호하고 관련 불만을 처리하기 위하여 아래와 같이 개인정보보호책임자를 지정하고 있습니다.</p>
            <div className="bg-[#F1EDE8]/20 p-4 rounded border border-[#1A2F28]/5 mt-2 space-y-1 text-[13px]">
              <p><strong>책임자 성명:</strong> 최정웅 대표</p>
              <p><strong>문의 이메일:</strong> info@focusonwood.com</p>
            </div>
          </section>
        </div>

      </div>
    </div>
  );
}