import { motion } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function WoodTypes() {
  const woods = [
    {
      name: "참나무 (Oak)",
      characteristics: "단단하고 내구성이 뛰어나며 아름다운 나뭇결",
      color: "밝은 갈색에서 중간 갈색",
      uses: "테이블, 의자, 수납장, 도마",
      image:
        "https://images.unsplash.com/photo-1683557165720-cc8dd486233c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjB3b29kJTIwdGV4dHVyZSUyMGdyYWlufGVufDF8fHx8MTc3NjMwMjAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["높은 내구성", "항균 효과", "아름다운 결"],
    },
    {
      name: "월넛 (Walnut)",
      characteristics: "고급스러운 짙은 색상과 우아한 질감",
      color: "진한 갈색에서 초콜릿 색상",
      uses: "고급 가구, 액세서리, 악기",
      image:
        "https://images.unsplash.com/photo-1655512318649-8e32533c1c9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXQlMjB3b29kJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzYyNTkzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["고급스러운 색상", "가공성 우수", "안정적 강도"],
    },
    {
      name: "애쉬 (Ash)",
      characteristics: "밝은 색상과 뚜렷한 나뭇결",
      color: "크림색에서 연한 갈색",
      uses: "모던 가구, 책상, 선반",
      image:
        "https://images.unsplash.com/photo-1683557165720-cc8dd486233c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjB3b29kJTIwdGV4dHVyZSUyMGdyYWlufGVufDF8fHx8MTc3NjMwMjAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["밝고 깔끔한 색상", "탄력성", "현대적 느낌"],
    },
    {
      name: "티크 (Teak)",
      characteristics: "방수성과 내구성이 뛰어난 고급 목재",
      color: "황금빛 갈색",
      uses: "야외 가구, 고급 가구, 주방용품",
      image:
        "https://images.unsplash.com/photo-1655512318649-8e32533c1c9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3YWxudXQlMjB3b29kJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzYyNTkzNTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      features: ["방수성 탁월", "높은 내구성", "자연 오일 함유"],
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
