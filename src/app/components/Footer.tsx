import { Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-[#1A2F28] text-[#F1EDE8]/90">
      {/* 1. py-16 -> py-10으로 줄여 전체 높이 감소 */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
        {/* 2. gap-12 -> gap-8로 조정하여 밀도 상향 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info - 가로 폭을 넓게 쓰도록 md:col-span-1 유지 */}
          <div className="space-y-4">
            <span className="text-lg text-[#F1EDE8] tracking-widest font-medium block">FOCUS ON WOOD</span>
            <p className="text-[#F1EDE8]/60 leading-relaxed text-[13px] max-w-[200px]">
              포커스온우드는 상담을 통해 공간에 맞춰 주문제작할 수 있습니다.
            </p>
          </div>

          {/* Quick Links - 제목과 리스트 간격 축소 */}
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

          {/* Contact - 아이콘 크기 및 간격 최적화 */}
          <div>
            <h3 className="text-[#D4A373] text-[13px] font-semibold mb-4 uppercase tracking-wider">연락처</h3>
            <div className="space-y-2.5 text-[13px] text-[#F1EDE8]/60">
              <div className="flex items-center space-x-2">
                <Phone size={12} className="text-[#D4A373]" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={12} className="text-[#D4A373]" />
                <span>info@namugyeol.kr</span>
              </div>
              <div className="flex items-start space-x-2">
                <MapPin size={12} className="mt-0.5 text-[#D4A373]" />
                <span className="leading-tight">경기도 포천시 자작로 93-5</span>
              </div>
            </div>

            {/* 인스타그램 버튼 크기 축소 */}
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

        {/* 3. mt-16 -> mt-10으로 줄임 */}
        <div className="border-t border-[#F1EDE8]/5 mt-10 pt-6 text-[#F1EDE8]/30 text-[11px] text-center">
          <p>&copy; 2026 FOCUS ON WOOD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
