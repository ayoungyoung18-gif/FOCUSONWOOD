import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-[#1A2F28] text-[#F1EDE8]/90">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <span className="text-lg text-[#F1EDE8] tracking-widest font-medium block">FOCUS ON WOOD</span>
            <p className="text-[#F1EDE8]/60 leading-relaxed text-[13px] max-w-[200px]">
              포커스온우드는 상담을 통해 공간에 맞춰 주문제작할 수 있습니다.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[#D4A373] text-[13px] font-semibold mb-4 uppercase tracking-wider">메뉴</h3>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link to="/brand/story" className="hover:text-[#D4A373] transition-colors">
                  브랜드 철학
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-[#D4A373] transition-colors">
                  프로젝트
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-[#D4A373] transition-colors">
                  소품 스토어
                </Link>
              </li>
              <li>
                <Link to="/custom-order" className="hover:text-[#D4A373] transition-colors">
                  제작 문의
                </Link>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-[#D4A373] text-[13px] font-semibold mb-4 uppercase tracking-wider">지원</h3>
            <ul className="space-y-2 text-[13px]">
              <li>
                <Link to="/furniture-care" className="hover:text-[#D4A373] transition-colors">
                  가구 관리
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-[#D4A373] transition-colors">
                  배송/반품
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A373] transition-colors">
                  자주 묻는 질문
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4A373] text-[13px] font-semibold mb-4 uppercase tracking-wider">연락처</h3>
            <div className="space-y-2.5 text-[13px] text-[#F1EDE8]/60">
              <div className="flex items-center space-x-2">
                <Phone size={12} className="text-[#D4A373]" />
                <span>010-9991-1341</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={12} className="text-[#D4A373]" />
                <span>info@focusonwood.com</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={12} className="mt-0.5 text-[#D4A373]" />
                <span className="leading-tight">경기도 포천시 자작로 93-5</span>
              </div>
            </div>

            <div className="flex mt-5">
              <a
                href="https://www.instagram.com/focusonwood/"
                className="flex items-center gap-1.5 px-3 py-1.5 border border-[#F1EDE8]/20 rounded-md text-[11px] hover:bg-[#F1EDE8] hover:text-[#1A2F28] transition-all"
              >
                <Instagram size={13} />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>

        {/* ─── 토스 결제 심사 필수 정보 영역 추가 ─── */}
        <div className="border-t border-[#F1EDE8]/5 mt-10 pt-6 text-[11px] text-[#F1EDE8]/50 space-y-4">
          
          {/* 법적 약관 링크 (개인정보처리방침은 굵게 처리하여 심사 위반 방지) */}
          <div className="flex justify-center gap-5 text-[12px]">
            <Link to="/terms" className="hover:text-[#D4A373] transition-colors">이용약관</Link>
            <Link to="/privacy" className="font-bold text-[#F1EDE8] hover:text-[#D4A373] transition-colors">개인정보처리방침</Link>
          </div>

          {/* 전자상거래법 필수 사업자 고지 정보 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-1 text-center md:text-left max-w-4xl mx-auto leading-relaxed">
            <div className="space-y-1">
              <p>상호명: 포커스온우드 | 대표자: 최정웅</p>
              <p>주소: 경기도 포천시 자작로 93-5</p>
              <p>
                사업자등록번호: 350-48-00436{" "}
                <a 
                  href="https://www.ftc.go.kr/www/selectBizCommList.do" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="underline hover:text-[#D4A373] ml-1"
                >
                  [사업자정보확인]
                </a>
              </p>
            </div>
            <div className="space-y-1">
              <p>통신판매업신고: 제 2026-경기포천-0101</p>
              <p>개인정보보호책임자: 최정웅 (info@focusonwood.com)</p>
              <p>호스팅서비스제공자: Vercel / Supabase</p>
            </div>
          </div>

          {/* 저작권 표시 */}
          <div className="text-center text-[#F1EDE8]/30 pt-2">
            <p>&copy; 2026 FOCUS ON WOOD. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
