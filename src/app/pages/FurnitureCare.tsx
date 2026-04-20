import { motion } from 'motion/react';
import { Droplet, Sun, Wind, AlertCircle } from 'lucide-react';

export function FurnitureCare() {
  const tips = [
    {
      icon: Droplet,
      title: '습기 관리',
      description:
        '물이나 액체가 묻었을 경우 즉시 마른 천으로 닦아주세요. 과도한 습기는 나무의 변형을 일으킬 수 있습니다.',
      dos: ['즉시 물기 제거', '실내 습도 40-60% 유지', '주기적 환기'],
      donts: ['젖은 행주 사용', '가습기 직접 노출', '물에 장시간 방치'],
    },
    {
      icon: Sun,
      title: '햇빛 차단',
      description:
        '직사광선에 장시간 노출되면 변색이 발생할 수 있습니다. 커튼이나 블라인드로 햇빛을 조절해주세요.',
      dos: ['커튼/블라인드 사용', '간접 조명 활용', '정기적 위치 변경'],
      donts: ['직사광선 장시간 노출', '창가 바로 옆 배치', '강한 조명 직접 조사'],
    },
    {
      icon: Wind,
      title: '온도 관리',
      description:
        '급격한 온도 변화는 나무의 수축과 팽창을 일으킬 수 있습니다. 일정한 실내 온도를 유지해주세요.',
      dos: ['실온 18-24도 유지', '서서히 온도 조절', '적절한 난방'],
      donts: ['난방기구 근처 배치', '급격한 온도 변화', '에어컨 바람 직접 노출'],
    },
  ];

  const cleaning = [
    {
      step: '일상 청소',
      method: '부드러운 마른 천으로 먼지를 제거합니다',
      frequency: '매일 또는 필요시',
    },
    {
      step: '물기 제거',
      method: '물이나 액체가 묻으면 즉시 마른 천으로 닦아냅니다',
      frequency: '발생 즉시',
    },
    {
      step: '오일 관리',
      method: '천연 오일을 얇게 발라 나무에 영양을 공급합니다',
      frequency: '6개월마다',
    },
    {
      step: '왁스 마감',
      method: '왁스를 발라 광택을 내고 보호막을 형성합니다',
      frequency: '1년마다',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">가구 관리 방법</h1>
          <p className="text-xl text-gray-600">
            원목 가구를 오래도록 아름답게 사용하는 방법
          </p>
        </div>

        {/* Care Tips */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {tips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4">
                <tip.icon size={24} />
              </div>
              <h3 className="text-xl mb-3">{tip.title}</h3>
              <p className="text-gray-600 mb-4">{tip.description}</p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm mb-2 text-green-700">✓ 권장사항</h4>
                  <ul className="space-y-1 text-sm">
                    {tip.dos.map((item, idx) => (
                      <li key={idx} className="text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm mb-2 text-red-700">✗ 주의사항</h4>
                  <ul className="space-y-1 text-sm">
                    {tip.donts.map((item, idx) => (
                      <li key={idx} className="text-gray-600">
                        • {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cleaning Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl mb-8 text-center">청소 및 관리 가이드</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cleaning.map((item, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg text-center"
              >
                <div className="text-2xl mb-2">{index + 1}</div>
                <h4 className="text-lg mb-2">{item.step}</h4>
                <p className="text-gray-600 text-sm mb-3">{item.method}</p>
                <div className="text-xs text-gray-500">{item.frequency}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Important Notes */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-amber-50 border border-amber-200 p-8 rounded-lg"
        >
          <div className="flex items-start space-x-4">
            <AlertCircle className="text-amber-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="text-xl mb-4">중요 안내사항</h3>
              <div className="space-y-3 text-gray-700">
                <p>
                  • 원목은 살아있는 자연 소재입니다. 시간이 지남에 따라 색상이
                  변하거나 미세한 갈라짐이 발생할 수 있으며, 이는 자연스러운
                  현상입니다.
                </p>
                <p>
                  • 화학 세제나 연마제는 가구 표면을 손상시킬 수 있으니 사용하지
                  마세요.
                </p>
                <p>
                  • 뜨거운 물건을 직접 올려놓지 말고 받침대나 매트를 사용해주세요.
                </p>
                <p>
                  • 날카로운 물건으로 인한 흠집이 생기지 않도록 주의해주세요.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            관리 방법에 대해 궁금한 점이 있으시면 언제든지 문의해주세요.
          </p>
          <p className="text-gray-600">전화: 02-1234-5678 | 이메일: info@namugyeol.kr</p>
        </div>
      </div>
    </div>
  );
}
