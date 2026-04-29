import { X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// ... 상단 import 부분 동일

export function KakaoChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      <style>
        {`
          @keyframes wave {
            0%, 100% { transform: rotate(0deg); }
            50% { transform: rotate(-25deg); }
          }
          .wave-arm {
            animation: wave 1.2s infinite ease-in-out;
            transform-origin: 104px 123px;
          }
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-5px); }
          }
          .floating {
            animation: float 2s infinite ease-in-out;
          }
        `}
      </style>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 10 }}
            // 상담창 내부 요소들도 손가락 커서 적용
            className="mb-3 bg-[#F1EDE8] rounded-2xl shadow-2xl p-5 w-60 border border-[#1A2F28]/10 cursor-default"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-bold text-[#1A2F28]">제작 상담</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-[#1A2F28]/5 rounded-full cursor-pointer" // 닫기 버튼: 손가락 모양
              >
                <X size={16} />
              </button>
            </div>
            <p className="text-[11px] text-[#1A2F28]/70 mb-5 leading-relaxed">
              안녕하세요! 포커스온우드입니다.
              <br />
              무엇이든 편하게 물어보세요.
            </p>
            <button
              onClick={() => window.open("https://kakao.com", "_blank")}
              // 상담 버튼: 손가락 모양
              className="w-full bg-[#D4A373] hover:bg-[#C59262] text-[#1A2F28] py-2.5 rounded-xl text-xs font-bold shadow-sm cursor-pointer transition-colors"
            >
              카카오톡 상담하기
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 마스코트 버튼 영역 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative transition-all duration-700 ease-in-out transform origin-bottom-right cursor-pointer ${
          isOpen
            ? "scale-[0.4] -translate-y-20 -translate-x-44 opacity-95"
            : "scale-50 translate-y-8 animate-[floating_3s_ease-in-out_infinite]" // 둥둥 떠 있는 애니메이션 강조
        }`}
      >
        {/* 마스코트 위 물음표 뱃지 */}
        {!isOpen && (
          <div className="absolute -top-6 -left-4 bg-[#1A2F28] text-[#F1EDE8] w-9 h-9 rounded-full flex items-center justify-center shadow-lg border-2 border-[#F1EDE8] z-10 animate-bounce">
            <span className="text-base font-bold">?</span>
          </div>
        )}

        <svg width="140" height="200" viewBox="0 0 140 200" fill="none" className="drop-shadow-2xl">
          {/* [항상 보임] 머리: 모서리가 둥근 직사각형 */}
          <rect x="25" y="20" width="90" height="70" rx="20" fill="#5D4037" />

          {/* 크게 키운 눈 (반지름 4 -> 7로 변경하여 더 또렷하게) */}
          <circle cx="52" cy="55" r="7" fill="#D1CCC7" />
          <circle cx="88" cy="55" r="7" fill="#D1CCC7" />

          {/* 눈동자 하이라이트 (더 생기있게) */}
          <circle cx="54" cy="53" r="2.5" fill="white" fillOpacity="0.8" />
          <circle cx="90" cy="53" r="2.5" fill="white" fillOpacity="0.8" />

          {/* 나뭇잎 장식 */}
          <path d="M70 20C70 5 85 0 95 5C85 10 80 20 70 20Z" fill="#8A9A78" />

          {/* [클릭 시에만 나타남] 몸통 및 팔다리 그룹 */}
          <g
            className={`transition-all duration-500 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"}`}
          >
            {/* 몸통: 머리보다 작은 직사각형 */}
            <rect x="40" y="95" width="60" height="50" rx="15" fill="#5D4037" />

            {/* 팔 */}
            <rect x="12" y="105" width="28" height="12" rx="6" fill="#5D4037" />
            <rect x="100" y="105" width="28" height="12" rx="6" fill="#5D4037" className="wave-arm" />

            {/* 다리 */}
            <rect x="50" y="145" width="10" height="22" rx="5" fill="#5D4037" />
            <rect x="80" y="145" width="10" height="22" rx="5" fill="#5D4037" />
          </g>
        </svg>
      </button>

      {/* Tailwind CSS를 사용 중이라면 global CSS에 추가 필요 */}
      <style jsx>{`
        @keyframes floating {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          } /* 둥둥 뜨는 높이 증가 */
        }
      `}</style>
    </div>
  );
}
