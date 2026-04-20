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

      {/* 마스코트 버튼 영역: cursor-pointer 추가 */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative transition-all duration-500 ease-in-out transform origin-bottom-right cursor-pointer ${
          isOpen ? "scale-[0.4] -translate-y-20 -translate-x-44 opacity-95" : "scale-50 translate-y-8"
        }`}
      >
        {/* 마스코트 위 물음표 뱃지 */}
        {!isOpen && (
          <div className="absolute -top-4 -left-2 bg-[#1A2F28] text-[#F1EDE8] w-8 h-8 rounded-full flex items-center justify-center shadow-lg floating border-2 border-[#F1EDE8]">
            <span className="text-sm font-bold">?</span>
          </div>
        )}

        <svg width="140" height="200" viewBox="0 0 140 200" fill="none" className="drop-shadow-2xl">
          {/* 머리, 눈, 몸통, 팔다리 도안 동일 */}
          <path d="M70 25C70 10 85 5 95 10C85 15 80 25 70 25Z" fill="#8A9A78" />
          <rect x="30" y="25" width="80" height="70" rx="15" fill="#5D4037" />
          <circle cx="55" cy="60" r="4" fill="#D1CCC7" />
          <circle cx="85" cy="60" r="4" fill="#D1CCC7" />

          <g className={`transition-opacity duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}>
            <rect x="6" y="123" width="30" height="12" rx="6" fill="#5D4037" />
            <rect x="36.5" y="100" width="67" height="60" rx="12" fill="#5D4037" />
            <rect x="50" y="160" width="8" height="25" rx="4" fill="#5D4037" />
            <rect x="82" y="160" width="8" height="25" rx="4" fill="#5D4037" />
            <rect x="104" y="123" width="30" height="12" rx="6" fill="#5D4037" className="wave-arm" />
          </g>
        </svg>
      </button>
    </div>
  );
}
