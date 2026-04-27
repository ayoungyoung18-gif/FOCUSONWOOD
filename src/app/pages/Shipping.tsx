import { motion } from "framer-motion";
import { Truck, Package, Home, MapPin, CheckCircle2 } from "lucide-react";

export function Shipping() {
  const shippingTypes = [
    {
      icon: Package,
      title: "소품 배송",
      items: "도마, 트레이, 소형 소품",
      method: "택배 배송",
      time: "제작 완료 후 2-3일",
      cost: "3,000원 (5만원 이상 무료)",
    },
    {
      icon: Truck,
      title: "가구 직접 배송",
      items: "테이블, 의자, 수납장 등",
      method: "공방 직접 배송",
      time: "일정 협의 후 순차 배송",
      cost: "지역별 상이 (하단 참조)",
    },
    {
      icon: Home,
      title: "대형·설치 가구",
      items: "대형 테이블, 붙박이 가구",
      method: "전문 인력 설치 포함",
      time: "제작 완료 시점 협의",
      cost: "별도 견적 안내",
    },
  ];

  const process = [
    { step: "주문 접수", description: "상담 완료 후 제작 시작" },
    { step: "정성 제작", description: "나무 선별 및 가공 조립" },
    { step: "품질 검수", description: "최종 마감 및 검수 작업" },
    { step: "일정 조율", description: "배송 일시 해피콜 안내" },
    { step: "안전 배송", description: "공간 맞춤 설치 및 설명" },
  ];

  const regions = [
    { area: "서울 / 경기 전지역", cost: "무료 (일부 외곽 제외)" },
    { area: "인천 / 충청 지역", cost: "30,000원 ~" },
    { area: "강원 / 전라 지역", cost: "50,000원 ~" },
    { area: "경상 지역", cost: "60,000원 ~" },
    { area: "제주 / 도서 산간", cost: "별도 협의" },
  ];

  return (
    <div className="bg-[#F9F6F3] min-h-screen pb-32">
      {/* 1. Header: 슬라이드 업 스타일 */}
      <header className="text-center mb-32 pt-24 px-4">
        <div className="flex flex-col items-center mb-10">
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 48 }}
            transition={{ duration: 0.8 }}
            className="w-[1px] bg-[#1C352D] mb-6"
          />
          <div className="overflow-hidden">
            <motion.span
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#1C352D] text-sm tracking-[0.4em] font-bold uppercase block"
            >
              Logistics Service
            </motion.span>
          </div>
        </div>
        <div className="overflow-hidden">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl md:text-5xl font-extralight text-[#4A4540] tracking-tight"
          >
            배송 방법 안내
          </motion.h1>
        </div>
      </header>

      <div className="max-w-6xl mx-auto px-6">
        {/* 2. Shipping Types: 간결한 정보 카드 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-40">
          {shippingTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-10 rounded-sm shadow-sm border border-gray-100 text-center"
            >
              <div className="w-14 h-14 bg-[#F9F6F3] text-[#1C352D] rounded-full flex items-center justify-center mx-auto mb-8">
                <type.icon size={24} strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-[#4A4540] mb-3">{type.title}</h3>
              <p className="text-xs text-gray-400 mb-8 uppercase tracking-widest font-bold">{type.items}</p>

              <div className="space-y-4 border-t border-gray-50 pt-8 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">METHOD</span>
                  <span className="text-[#4A4540] font-bold">{type.method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">TIME</span>
                  <span className="text-[#4A4540] font-bold">{type.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400 font-medium">COST</span>
                  <span className="text-[#1C352D] font-bold">{type.cost}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3. Process: 한 줄 타임라인 */}
        <div className="mb-40">
          <div className="text-center mb-20">
            <span className="text-[#1C352D] text-[10px] font-bold tracking-[0.3em] uppercase block mb-4">
              The Journey to Your Space
            </span>
            <h2 className="text-3xl font-light text-[#4A4540]">배송 프로세스</h2>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-px bg-gray-200 z-0" />
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative z-10 text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-white border border-gray-100 text-[#1C352D] rounded-full mb-6 font-bold shadow-sm">
                    0{index + 1}
                  </div>
                  <h4 className="text-lg font-bold text-[#4A4540] mb-2">{item.step}</h4>
                  <p className="text-xs text-gray-500 font-normal leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* 4. Regional Costs & Guide: 통합 안내 보드 */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* 지역별 배송비 */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-sm shadow-sm border border-gray-100"
          >
            <h3 className="text-xl font-bold text-[#4A4540] mb-10 flex items-center gap-2">
              <MapPin size={20} className="text-[#1C352D]" />
              지역별 배송비 (가구 기준)
            </h3>
            <div className="space-y-4">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center py-4 border-b border-gray-50 last:border-0 text-sm"
                >
                  <span className="text-gray-700 font-medium">{region.area}</span>
                  <span className="text-[#1C352D] font-bold">{region.cost}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 배송 안내사항 */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-[#1C352D] p-12 rounded-sm shadow-xl text-white flex flex-col justify-center"
          >
            <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
              <CheckCircle2 size={20} className="text-[#F9F6F3]/60" />
              배송 필독 안내
            </h3>
            <ul className="space-y-4 text-sm font-normal text-[#F9F6F3]/80 leading-relaxed break-keep">
              <li>• 결제가 완료된 순서대로 제작 리스트에 등록됩니다.</li>
              <li>• 제품 수령 시 전문가와 함께 외관 상태를 확인해 주시기 바랍니다.</li>
              <li>• 엘리베이터가 없는 3층 이상의 공간은 사다리차 이용 비용이 발생할 수 있습니다.</li>
              <li>• 설치 가구의 경우 공간 확보가 미리 되어 있어야 안전한 설치가 가능합니다.</li>
            </ul>
          </motion.div>
        </div>

        {/* Contact info: 카카오톡 상담 유도형 하단 마무리 */}
        <div className="mt-32 pt-20 border-t border-gray-200 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            {/* 1. 메인 안내 문구: 가독성 높게 수정 */}
            <p className="text-xl text-[#4A4540] font-normal mb-8 break-keep">
              배송 관련 궁금하신 점은 <span className="text-[#1C352D] font-bold">카카오톡 채널</span>로 문의 주시면{" "}
              <br className="hidden md:block" />
              가장 빠르고 상세하게 안내받으실 수 있습니다.
            </p>

            <p className="mt-8 text-xs text-gray-400 font-light italic">
              * 작업 및 배송 중에는 전화 연결이 어려울 수 있으니 가급적 카카오톡 상담을 이용해 주세요.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
