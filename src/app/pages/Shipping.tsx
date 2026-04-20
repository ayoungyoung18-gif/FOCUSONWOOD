import { motion } from 'motion/react';
import { Truck, Package, Home, MapPin } from 'lucide-react';

export function Shipping() {
  const shippingTypes = [
    {
      icon: Package,
      title: '소품 배송',
      items: '도마, 트레이, 소형 액세서리',
      method: '택배 배송',
      time: '2-3일',
      cost: '3,000원 (5만원 이상 무료)',
    },
    {
      icon: Truck,
      title: '가구 배송',
      items: '테이블, 의자, 수납장 등',
      method: '화물 배송',
      time: '5-7일',
      cost: '지역별 상이 (착불)',
    },
    {
      icon: Home,
      title: '대형 가구 배송',
      items: '대형 테이블, 붙박이 가구',
      method: '전문 배송 및 설치',
      time: '일정 협의',
      cost: '별도 견적',
    },
  ];

  const process = [
    {
      step: '주문 접수',
      description: '주문이 완료되면 제작이 시작됩니다',
    },
    {
      step: '제작 완료',
      description: '품질 검수 후 포장을 진행합니다',
    },
    {
      step: '배송 준비',
      description: '안전한 포장과 함께 배송 정보를 전달드립니다',
    },
    {
      step: '배송 출발',
      description: '운송장 번호를 문자로 안내드립니다',
    },
    {
      step: '배송 완료',
      description: '제품 수령 및 설치(필요시) 완료',
    },
  ];

  const regions = [
    { area: '서울/경기', cost: '무료 (일부 지역 제외)' },
    { area: '인천/충청', cost: '30,000원~' },
    { area: '강원/전라', cost: '50,000원~' },
    { area: '경상', cost: '60,000원~' },
    { area: '제주', cost: '별도 문의' },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">배송 방법</h1>
          <p className="text-xl text-gray-600">
            안전하고 신속한 배송 서비스를 제공합니다
          </p>
        </div>

        {/* Shipping Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {shippingTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg border border-gray-200"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4">
                <type.icon size={24} />
              </div>
              <h3 className="text-xl mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600 mb-4">{type.items}</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-500">배송 방법</span>
                  <span>{type.method}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">배송 기간</span>
                  <span>{type.time}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">배송비</span>
                  <span>{type.cost}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl mb-8 text-center">배송 프로세스</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {process.map((item, index) => (
                <div key={index} className="relative text-center">
                  <div className="relative inline-flex items-center justify-center w-16 h-16 bg-gray-900 text-white rounded-full mb-4 z-10">
                    {index + 1}
                  </div>
                  <h4 className="text-lg mb-2">{item.step}</h4>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Regional Shipping Costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl mb-8 text-center">지역별 배송비 (가구)</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
              {regions.map((region, index) => (
                <div
                  key={index}
                  className={`flex justify-between p-4 ${
                    index !== regions.length - 1 ? 'border-b border-gray-200' : ''
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <MapPin size={18} className="text-gray-400" />
                    <span>{region.area}</span>
                  </div>
                  <span className="text-gray-600">{region.cost}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-500 text-center mt-4">
              * 도서산간 지역은 추가 비용이 발생할 수 있습니다
            </p>
          </div>
        </motion.div>

        {/* Installation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50 p-8 rounded-lg mb-12"
        >
          <h3 className="text-2xl mb-4">설치 서비스</h3>
          <div className="space-y-3 text-gray-700">
            <p>
              • 대형 가구의 경우 전문 기사가 배송 및 설치를 진행합니다
            </p>
            <p>
              • 조립이 필요한 제품은 조립 서비스를 제공합니다 (별도 비용)
            </p>
            <p>
              • 맞춤 제작 가구는 설치 서비스가 포함되어 있습니다
            </p>
          </div>
        </motion.div>

        {/* Notes */}
        <div className="bg-gray-900 text-white p-8 rounded-lg">
          <h3 className="text-xl mb-4">배송 안내사항</h3>
          <ul className="space-y-2 text-gray-300">
            <li>• 제작 상품의 특성상 주문 후 취소/교환이 어려울 수 있습니다</li>
            <li>• 배송 전 파손 방지를 위해 안전하게 포장하여 발송합니다</li>
            <li>• 수령 시 제품 상태를 꼭 확인해주시기 바랍니다</li>
            <li>• 파손이나 하자가 있을 경우 즉시 연락 주시면 교환해드립니다</li>
            <li>• 엘리베이터가 없는 경우 층별 추가 비용이 발생할 수 있습니다</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-2">
            배송 관련 문의사항이 있으시면 언제든지 연락해주세요
          </p>
          <p className="text-lg">
            전화: 02-1234-5678 | 이메일: delivery@namugyeol.kr
          </p>
        </div>
      </div>
    </div>
  );
}
