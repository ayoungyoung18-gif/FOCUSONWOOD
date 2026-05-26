import { useState } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useAuth } from "../context/AuthContext";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // 🟢 이전 단계에서 AuthContext에 추가한 loginWithKakao 함수를 가져옵니다.
  const { login, loginWithKakao } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login(email, password);
    onClose();
  };

  // 🟢 컨텍스트의 함수를 호출하도록 변경하여 모달 내부 코드를 간결하게 유지합니다.
  const handleKakaoLoginClick = async () => {
    await loginWithKakao();
    onClose(); // 로그인 요청이 성공적으로 시작되면 모달을 닫습니다.
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md z-50 px-4"
          >
            <div className="bg-white rounded-lg shadow-xl p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl">로그인</h2>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm mb-2">
                    이메일
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="password" className="block text-sm mb-2">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-gray-800 transition-colors"
                >
                  로그인
                </button>
              </form>

              {/* 구별선 */}
              <div className="relative my-6 text-center">
                <hr className="border-gray-200" />
                <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-xs text-gray-400">
                  또는
                </span>
              </div>

              {/* 🟢 수정된 카카오 로그인 핸들러 함수를 바인딩했습니다. */}
              <button
                type="button"
                onClick={handleKakaoLoginClick}
                className="w-full flex items-center justify-center gap-2 bg-[#FEE500] text-[#191919] py-3 rounded-lg hover:bg-[#FCE000] transition-colors font-medium"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c-4.97 0-9 3.185-9 7.115 0 2.553 1.706 4.8 4.27 6.054-.169.574-.612 2.083-.701 2.4-.11.397.136.393.287.293.118-.078 1.878-1.272 2.625-1.782.808.225 1.657.348 2.519.348 4.97 0 9-3.185 9-7.115S16.97 3 12 3z" />
                </svg>
                카카오 계정으로 로그인
              </button>

              <div className="mt-6 text-center text-sm text-gray-600">
                <p>
                  아직 회원이 아니신가요? <button className="text-gray-900 hover:underline">회원가입</button>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
