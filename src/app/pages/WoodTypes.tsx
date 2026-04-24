import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function WoodTypes() {
  const woods = [
    {
      name: "호두나무 (Walnut)",
      characteristics: "흔히 '월넛'이라 불리며, 원목 중 가장 고급스럽고 중후한 멋을 지닌 최상급 목재",
      color: "진한 밤색에서 보랏빛이 감도는 초콜릿색",
      uses: "거실 메인 식탁, 서재 책상, 침대 프레임, 최고급 인테리어 소품",
      image: "/images/woodwalnut.jpg",
      features: ["'월넛'과 동일 수종", "습기에 강해 뒤틀림이 매우 적음", "세월이 흐를수록 깊어지는 색감"],
    },
    {
      name: "참나무 - 화이트오크 (White Oak)",
      characteristics: "단단한 강도와 차분한 결을 가진 참나무의 일종으로, 밝은 톤 원목의 대명사",
      color: "밝은 베이지에서 옅은 갈색",
      uses: "가족용 식탁, 튼튼한 의자, 고급 수납장",
      image: "https://unsplash.com",
      features: ["오크 중 수분에 가장 강함", "매우 단단하여 찍힘에 강함", "유행을 타지 않는 정석적인 결"],
    },
    {
      name: "참나무 - 레드오크 (Red Oak)",
      characteristics: "나뭇결이 시원하고 뚜렷하며, 화이트오크보다 따뜻한 붉은 기운이 감도는 참나무",
      color: "연한 분홍빛이 도는 갈색",
      uses: "침대, 서랍장, 옷장 등 넓은 면적의 가구",
      image: "https://unsplash.com",
      features: ["선명하고 화려한 나뭇결", "우수한 탄성으로 충격에 강함", "합리적인 가격대의 하드우드"],
    },
    {
      name: "단풍나무 (Maple)",
      characteristics: "흔히 '메이플'이라 불리며, 조직이 매우 치밀해 표면이 도자기처럼 매끄러운 목재",
      color: "우윳빛 크림색에서 연한 노란색",
      uses: "아이방 가구, 주방 도마, 밝은 분위기의 거실 가구",
      image: "https://unsplash.com",
      features: ["'메이플'과 동일 수종", "먼지나 오염이 잘 스며들지 않음", "공간을 넓어 보이게 하는 밝은 톤"],
    },
    {
      name: "너도밤나무 (Beech)",
      characteristics: "유럽에서 대중적인 '비취' 목재로, 결이 고르고 탄력이 좋아 부드러운 곡선 가공에 최적",
      color: "은은한 살구색이 감도는 베이지",
      uses: "곡선형 의자, 아동용 가구, 주방 소품",
      image: "https://unsplash.com",
      features: ["'비취'와 동일 수종", "옹이가 거의 없어 깨끗한 느낌", "살결처럼 부드러운 촉감"],
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">나무 종류</h1>
          <p className="text-xl text-gray-600">포커스온우드에서 사용하는 엄선된 원목을 소개합니다</p>
        </div>

        {/* Wood Types */}
        <div className="space-y-16">
          {woods.map((wood, index) => (
            <motion.div
              key={wood.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <ImageWithFallback src={wood.image} alt={wood.name} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl mb-4">{wood.name}</h2>
                <p className="text-lg text-gray-700 mb-4">{wood.characteristics}</p>
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm text-gray-500">색상</span>
                    <p>{wood.color}</p>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">주요 용도</span>
                    <p>{wood.uses}</p>
                  </div>
                </div>
                <div>
                  <span className="text-sm text-gray-500 block mb-2">특징</span>
                  <ul className="space-y-2">
                    {wood.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <span className="w-1.5 h-1.5 bg-gray-900 rounded-full" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl mb-4">원목 선택 가이드</h3>
          <div className="space-y-3 text-gray-700">
            <p>• 각 나무는 고유한 특성과 아름다움을 가지고 있습니다. 용도와 취향에 맞는 목재를 선택해주세요.</p>
            <p>• 천연 원목은 시간이 지남에 따라 색상이 변할 수 있으며, 이는 자연스러운 변화입니다.</p>
            <p>• 포커스온우드에서는 FSC 인증을 받은 지속 가능한 목재만을 사용합니다.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
