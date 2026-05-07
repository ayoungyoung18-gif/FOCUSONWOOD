import { useState } from "react";
import { motion } from "motion/react";
import { ClipboardList, MessageSquare, Ruler, Wrench, CheckCircle, Package } from "lucide-react";
import { ImageWithFallback } from "../components/image/ImageWithFallback";

export function CustomOrder() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    furnitureType: "",
    size: "",
    material: "",
    budget: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        furnitureType: "",
        size: "",
        material: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const process = [
    {
      icon: MessageSquare,
      title: "1. 상담",
      description: "원하시는 가구의 용도, 사이즈, 디자인에 대해 상담합니다",
    },
    {
      icon: Ruler,
      title: "2. 설계",
      description: "공간 측정 후 최적의 디자인을 제안합니다",
    },
    {
      icon: ClipboardList,
      title: "3. 견적",
      description: "소재와 디자인에 따른 정확한 견적을 제공합니다",
    },
    {
      icon: Wrench,
      title: "4. 제작",
      description: "숙련된 장인이 정성스럽게 가구를 제작합니다",
    },
    {
      icon: CheckCircle,
      title: "5. 검수",
      description: "완성된 가구의 품질을 꼼꼼히 확인합니다",
    },
    {
      icon: Package,
      title: "6. 배송 및 설치",
      description: "안전하게 배송하고 전문적으로 설치합니다",
    },
  ];

  const furnitureTypes = ["테이블", "의자", "수납장/서랍장", "책상", "책장", "TV장", "침대", "기타"];

  const materials = ["월넛", "화이트오크", "레드오크", "메이플", "상담 후 결정"];

  return (
    <div>
      {/* Header */}
      <div className="text-center mb-24 pt-16">
        {/* 1. 상단 수직 선 애니메이션 */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="w-[1px] bg-[#1C352D]/40 mb-6"
          />
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#1C352D] text-xs tracking-[0.4em] font-medium uppercase block"
            >
              Works Archive
            </motion.span>
          </div>
        </div>

        {/* 2. 제목: 슬라이드 업 효과 */}
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl md:text-5xl font-extralight text-[#4A4540] tracking-tight"
          >
            맞춤가구 제작문의
          </motion.h1>
        </div>

        {/* 3. 설명문: 부드러운 페이드 인 */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto break-keep opacity-80">
            아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다
          </p>
        </motion.div>
      </div>
      {/* Process Section - 심플한 가로 한 줄 버전 */}
      <section className="py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-[#4A4540] mb-4">제작 과정</h2>
            <div className="w-12 h-[1px] bg-[#1C352D] mx-auto" />
          </div>

          {/* 가로 흐름 컨테이너 */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 relative">
            {/* 배경 연결선 (데스크탑용) */}
            <div className="hidden lg:block absolute top-7 left-0 w-full h-[1px] bg-gray-200 z-0" />

            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative z-10 text-center flex flex-col items-center"
              >
                {/* 아이콘 원형 */}
                <div className="w-14 h-14 bg-white border border-gray-100 rounded-full flex items-center justify-center mb-4 shadow-sm text-[#1C352D] group-hover:bg-[#1C352D] transition-colors">
                  <step.icon size={22} strokeWidth={1.5} />
                </div>

                {/* 텍스트 */}
                <span className="text-[10px] text-[#1C352D] font-bold tracking-tighter mb-1 block">
                  STEP 0{index + 1}
                </span>
                <h3 className="text-base font-medium text-[#4A4540] mb-2">{step.title.split(". ")[1]}</h3>
                <p className="text-xs text-gray-500 leading-tight break-keep px-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* Order Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">제작 문의</h2>
            <p className="text-xl text-gray-600">아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다</p>
          </div> */}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm mb-2">
                  이름 *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm mb-2">
                  이메일 *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm mb-2">
                연락처 *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="furnitureType" className="block text-sm mb-2">
                  가구 종류 *
                </label>
                <select
                  id="furnitureType"
                  name="furnitureType"
                  required
                  value={formData.furnitureType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                >
                  <option value="">선택해주세요</option>
                  {furnitureTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label htmlFor="material" className="block text-sm mb-2">
                  선호 목재
                </label>
                <select
                  id="material"
                  name="material"
                  value={formData.material}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                >
                  <option value="">선택해주세요</option>
                  {materials.map((material) => (
                    <option key={material} value={material}>
                      {material}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="size" className="block text-sm mb-2">
                  희망 사이즈 (가로 x 세로 x 높이)
                </label>
                <input
                  type="text"
                  id="size"
                  name="size"
                  placeholder="예: 200cm x 90cm x 75cm"
                  value={formData.size}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                />
              </div>

              <div>
                <label htmlFor="budget" className="block text-sm mb-2">
                  예산 범위
                </label>
                <input
                  type="text"
                  id="budget"
                  name="budget"
                  placeholder="예: 100만원 ~ 150만원"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm mb-2">
                상세 요청사항 *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                placeholder="원하시는 디자인, 용도, 특별한 요구사항 등을 자세히 작성해주세요"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-900 focus:border-transparent outline-none resize-none"
              />
            </div>

            <button
              disabled={submitted}
              className={`px-8 py-3 rounded-sm transition-colors ${
                submitted
                  ? "bg-[#4A4540] text-[#F9F6F3] cursor-default" // ✅ 클릭해서 제출된 후의 색상 (예: 진한 브라운)
                  : "bg-[#1C352D] text-[#F9F6F3] hover:bg-[#2a4d42] active:scale-[0.98]" // ✅ 기본 색상
              }`}
            >
              {submitted ? "문의가 접수되었습니다" : "제작 문의 보내기"}
            </button>
            {/* --- 여기부터 추가/교체하세요 --- */}
            <div className="pt-4">
              {submitted && (
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center text-sm text-gray-500 mt-4"
                >
                  확인 후 빠른 시일 내에 연락드리겠습니다.
                </motion.p>
              )}
            </div>
            {/* --- 여기까지 --- */}
          </form>

          <p className="text-sm text-gray-500 text-center mt-6">
            제출하신 내용을 검토 후 1-2 영업일 내에 연락드리겠습니다
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl mb-8 text-center">자주 묻는 질문</h2>
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg mb-2">Q. 제작 기간은 얼마나 걸리나요?</h3>
              <p className="text-gray-600">
                A. 일반적으로 4-6주가 소요되며, 가구의 크기와 복잡도에 따라 달라질 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg mb-2">Q. 견적은 어떻게 받나요?</h3>
              <p className="text-gray-600">A. 의뢰서 제출 후 상담을 통해 정확한 견적을 제공해드립니다.</p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg mb-2">Q. 디자인 수정이 가능한가요?</h3>
              <p className="text-gray-600">
                A. 제작 전 디자인 확정 단계에서 수정이 가능합니다. 제작 시작 후에는 변경이 어렵습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
