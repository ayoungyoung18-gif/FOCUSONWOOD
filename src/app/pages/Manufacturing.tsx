import { motion } from "framer-motion";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Manufacturing() {
  const steps = [
    {
      number: "01",
      title: "상담 및 디자인",
      description:
        "고객의 니즈를 파악하고 공간을 측정합니다. 용도, 사이즈, 스타일에 대해 충분히 상담한 후 맞춤 디자인을 제안합니다.",
      image: "/images/working.png",
    },
    {
      number: "02",
      title: "목재 선정",
      description:
        "엄선된 천연 원목 중 가구의 용도와 디자인에 가장 적합한 목재를 선택합니다. 각 나무의 결과 색상을 고려하여 최상의 재료를 준비합니다.",
      image: "/images/select.jpg",
    },
    {
      number: "03",
      title: "재단 및 가공",
      description:
        "정밀한 측정 후 목재를 재단하고 가공합니다. 전통 목공 기법과 현대적 장비를 적절히 활용하여 정확하고 섬세하게 작업합니다.",
      image: "/images/making1.png",
    },
    {
      number: "04",
      title: "조립",
      description:
        "가공된 부재들을 정교하게 조립합니다. 견고함과 내구성을 위해 전통적인 장부 결합 방식을 사용하며, 필요시 친환경 접착제를 병행합니다.",
      image: "/images/making2.png",
    },
    {
      number: "05",
      title: "샌딩 및 마감",
      description:
        "여러 단계의 샌딩을 거쳐 부드러운 표면을 만들고, 친환경 오일이나 왁스로 마감합니다. 나무의 자연스러운 결을 살리면서 보호막을 형성합니다.",
      image: "/images/sanding.jpg",
    },
    {
      number: "06",
      title: "최종 검수",
      description:
        "완성된 가구의 모든 부분을 꼼꼼히 검수합니다. 디자인, 마감, 기능성 등 모든 면에서 최고의 품질을 확인한 후 포장하여 배송합니다.",
      image: "/images/comfirm.png",
    },
  ];

  return (
    <div className="bg-[#F9F6F3] min-h-screen pb-32">
      {/* 1. Header: 타 페이지와 동일한 슬라이드 업 스타일 */}
      <header className="text-center mb-32 pt-24">
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{ duration: 0.8 }}
            className="w-[1px] bg-[#1C352D]/40 mb-6"
          />
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#1C352D] text-xs tracking-[0.4em] font-medium uppercase block"
            >
              Craftsmanship Process
            </motion.span>
          </div>
        </div>
        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl md:text-5xl font-extralight text-[#4A4540] tracking-tight"
          >
            가구 제작 과정
          </motion.h1>
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 2. Steps: 중앙 정렬 & 세련된 슬라이드 모션 */}
        <div className="space-y-40">
          {steps.map((step, index) => (
            <div key={step.number} className="text-center group">
              {/* 이미지 영역 */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 1, ease: [0.33, 1, 0.68, 1] }}
                className="relative mb-12"
              >
                <div className="aspect-[16/9] overflow-hidden rounded-sm shadow-sm">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                </div>
                {/* 단계 표시 오버레이 */}
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-[10px] font-bold text-[#1C352D] tracking-widest uppercase">
                  Step {step.number}
                </div>
              </motion.div>

              {/* 텍스트 영역 */}
              <div className="max-w-2xl mx-auto space-y-6">
                <div className="overflow-hidden">
                  <motion.h2
                    initial={{ y: "100%" }}
                    whileInView={{ y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                    className="text-3xl font-light text-[#4A4540]"
                  >
                    {step.title}
                  </motion.h2>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <p className="text-gray-600 leading-relaxed font-light text-lg break-keep italic">
                    "{step.description}"
                  </p>
                </motion.div>

                {/* 장식용 구분선 */}
                <div className="w-8 h-px bg-[#1C352D]/20 mx-auto pt-4" />
              </div>
            </div>
          ))}
        </div>

        {/* 3. Timeline: 안내 섹션 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-48 text-center border-t border-gray-200 pt-20"
        >
          <span className="text-[#1C352D] text-[10px] tracking-[0.3em] font-bold uppercase mb-10 block">
            Lead Time Guide
          </span>
          <h3 className="text-2xl font-light text-[#4A4540] mb-12">평균 제작 기간</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center max-w-4xl mx-auto mb-20">
            <div className="space-y-2">
              <div className="text-3xl font-extralight text-[#1C352D]">1-2 Weeks</div>
              <p className="text-sm text-gray-500 font-light">소형 가구 및 소품</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-extralight text-[#1C352D]">4-6 Weeks</div>
              <p className="text-sm text-gray-500 font-light">일반 가구</p>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-extralight text-[#1C352D]">8-12 Weeks</div>
              <p className="text-sm text-gray-500 font-light">대형 및 특수 제작</p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto border-y border-gray-100 py-8 px-4">
            <p className="text-sm text-[#4A4540] font-light leading-relaxed break-keep">
              포커스온우드는 최상의 품질 유지를 위해 <span className="font-medium">한정된 수량만을 정성껏 제작</span>
              하고 있습니다.
              <br className="hidden md:block" />
              <span className="text-[#1C352D] font-medium">
                현재 주문량에 따라 제작 일정이 지연될 수 있으므로,
                <br className="hidden md:block" />
              </span>
              상세 일정은 상담 시 안내해 드리는 일정을 확인해 주시기 바랍니다.
            </p>
          </div>

          <p className="text-[10px] text-gray-400 mt-10 tracking-widest uppercase">
            * 모든 가구는 결제 완료 순으로 제작 리스트에 등록됩니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
