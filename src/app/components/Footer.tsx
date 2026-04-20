import { Instagram, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    // 1. 배경을 딥그린으로, 기본 텍스트를 연한 베이지로 변경
    <footer className="bg-[#1A2F28] text-[#F1EDE8]/90">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {" "}
        {/* 여백을 살짝 더 줌 */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              {/* 로고 텍스트를 더 밝게 */}
              <span className="text-xl text-[#F1EDE8] tracking-widest font-medium">FOCUS ON WOOD</span>
            </div>
            <p className="text-[#F1EDE8]/70 leading-relaxed text-sm">
              포커스온우드는 상담을 통해 공간에 맞춰 주문 제작하실 수 있으며 소품은 스토어를 통해 구매하실 수 있습니다.
            </p>
          </div>

          {/* Quick Links & Customer Service - 링크 색상 통일 */}
          <div>
            <h3 className="text-[#D4A373] font-medium mb-6">바로가기</h3>
            <ul className="space-y-3 text-sm">
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
                  소품
                </Link>
              </li>
              <li>
                <Link to="/custom-order" className="hover:text-[#D4A373] transition-colors">
                  맞춤가구 제작
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[#D4A373] font-medium mb-6">고객 지원</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link to="/furniture-care" className="hover:text-[#D4A373] transition-colors">
                  가구 관리 방법
                </Link>
              </li>
              <li>
                <Link to="/shipping" className="hover:text-[#D4A373] transition-colors">
                  배송 안내
                </Link>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A373] transition-colors">
                  자주 묻는 질문
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#D4A373] transition-colors">
                  교환 및 반품
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[#D4A373] font-medium mb-6">연락처</h3>
            <div className="space-y-4 text-sm text-[#F1EDE8]/70">
              <div className="flex items-center space-x-3">
                <Phone size={14} className="text-[#D4A373]" />
                <span>02-1234-5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={14} className="text-[#D4A373]" />
                <span>info@namugyeol.kr</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={14} className="mt-1 text-[#D4A373]" />
                <span>
                  경기도 포천시 자작로 93-5
                  <br />
                  호롱불마을 최공방
                </span>
              </div>
            </div>

            <div className="flex mt-8">
              <a
                href="https://www.instagram.com/focusonwood/"
                className="flex items-center gap-2 px-4 py-2 border border-[#F1EDE8]/20 rounded-full text-xs hover:bg-[#F1EDE8] hover:text-[#1A2F28] transition-all"
              >
                <Instagram size={16} />
                <span>INSTAGRAM</span>
              </a>
            </div>
          </div>
        </div>
        {/* 하단 구분선 색상 조정 */}
        <div className="border-t border-[#F1EDE8]/10 mt-16 pt-8 text-[#F1EDE8]/40 text-xs text-center">
          <p>&copy; 2026 FOCUS ON WOOD. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
