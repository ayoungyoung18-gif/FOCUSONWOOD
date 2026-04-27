import { motion } from "framer-motion";
import { Droplet, Sun, Wind, CheckCircle2, XCircle } from "lucide-react";

export function FurnitureCare() {
  const tips = [
    {
      icon: Droplet,
      title: "습기 관리",
      description: "과도한 습기는 나무의 변형을 일으킵니다. 물기가 묻었을 땐 즉시 마른 천으로 결을 따라 닦아주세요.",
      dos: ["실내 습도 40-60% 유지", "주기적인 자연 환기"],
      donts: ["젖은 행주 사용 금지", "가습기 직접 노출 주의"],
    },
    {
      icon: Sun,
      title: "빛과 변색",
      description: "직사광선은 나무의 수분을 뺏고 변색을 유발합니다. 커튼 등으로 은은한 광량을 유지해주세요.",
      dos: ["블라인드/커튼 활용", "정기적인 가구 위치 변경"],
      donts: ["직사광선 장시간 노출", "창가 바로 옆 배치 자제"],
    },
    {
      icon: Wind,
      title: "온도 유지",
      description: "급격한 온도 변화는 수축과 팽창의 원인이 됩니다. 일정한 실내 온도를 유지하는 것이 좋습니다.",
      dos: ["실온 18-24도 유지", "완만한 온도 조절"],
      donts: ["난방기구 근처 배치", "에어컨 직사 바람 노출"],
    },
  ];

  return (
    <div className="bg-[#F9F6F3] min-h-screen pb-32">
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
            가구 관리 방법
          </motion.h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* 2. Care Tips Card: 카드 내부 폰트 가독성 보정 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-32">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-sm shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-[#F9F6F3] text-[#1C352D] rounded-full flex items-center justify-center mb-6">
                <tip.icon size={22} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-medium text-[#4A4540] mb-4">{tip.title}</h3>
              <p className="text-gray-600 font-normal leading-relaxed mb-8 break-keep text-[15px]">{tip.description}</p>

              <div className="space-y-6 pt-6 border-t border-gray-50">
                {/* 권장 사항 (Dos) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-[#1C352D] rounded-full" />
                    <span className="text-sm font-bold text-[#1C352D] tracking-tight">권장 사항</span>
                  </div>
                  <ul className="space-y-2 text-[14px] text-gray-800 font-medium">
                    {tip.dos.map((item, idx) => (
                      <li key={idx} className="flex items-center pl-3">
                        <span className="w-1 h-px bg-[#1C352D]/30 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 주의 사항 (Don'ts) */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="w-1.5 h-1.5 bg-[#A44540] rounded-full" />
                    <span className="text-sm font-bold text-[#A44540] tracking-tight">주의 사항</span>
                  </div>
                  <ul className="space-y-2 text-[14px] text-gray-800 font-medium">
                    {tip.donts.map((item, idx) => (
                      <li key={idx} className="flex items-center pl-3">
                        <span className="w-1 h-px bg-[#A44540]/30 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. 현장 안내 및 통합 연락처 섹션: 폰트 크기 및 굵기 하향 조정 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border border-gray-100 p-12 text-center rounded-sm shadow-sm"
        >
          <div className="flex flex-col items-center">
            <div className="w-10 h-px bg-[#1C352D] mb-8 opacity-40" />
            <h3 className="text-2xl font-light text-[#4A4540] mb-6">현장 케어 가이드 안내</h3>
            <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed break-keep max-w-3xl mb-12">
              원목 가구는 배송되는 공간의 환경에 따라 관리 방법이 달라질 수 있습니다. 포커스온우드는{" "}
              <span className="text-[#1C352D] font-normal">
                배송 현장에서 공간의 특성을 고려한 상세한 관리 방법과 주의사항을 직접 설명
              </span>
              해 드리고 있습니다.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
