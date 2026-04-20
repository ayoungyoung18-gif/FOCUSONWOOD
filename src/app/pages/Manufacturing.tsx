import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Manufacturing() {
  const steps = [
    {
      number: '01',
      title: '상담 및 디자인',
      description:
        '고객의 니즈를 파악하고 공간을 측정합니다. 용도, 사이즈, 스타일에 대해 충분히 상담한 후 맞춤 디자인을 제안합니다.',
      image: 'https://images.unsplash.com/photo-1760939858984-5dc76f0ea34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NzYzMDIwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      number: '02',
      title: '목재 선정',
      description:
        '엄선된 천연 원목 중 가구의 용도와 디자인에 가장 적합한 목재를 선택합니다. 각 나무의 결과 색상을 고려하여 최상의 재료를 준비합니다.',
      image: 'https://images.unsplash.com/photo-1683557165720-cc8dd486233c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjB3b29kJTIwdGV4dHVyZSUyMGdyYWlufGVufDF8fHx8MTc3NjMwMjAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      number: '03',
      title: '재단 및 가공',
      description:
        '정밀한 측정 후 목재를 재단하고 가공합니다. 전통 목공 기법과 현대적 장비를 적절히 활용하여 정확하고 섬세하게 작업합니다.',
      image: 'https://images.unsplash.com/photo-1768946131571-cce8b997e648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwbWFudWZhY3R1cmluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzc2MzAyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      number: '04',
      title: '조립',
      description:
        '가공된 부재들을 정교하게 조립합니다. 견고함과 내구성을 위해 전통적인 장부 결합 방식을 사용하며, 필요시 친환경 접착제를 병행합니다.',
      image: 'https://images.unsplash.com/photo-1760939858984-5dc76f0ea34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NzYzMDIwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      number: '05',
      title: '샌딩 및 마감',
      description:
        '여러 단계의 샌딩을 거쳐 부드러운 표면을 만들고, 친환경 오일이나 왁스로 마감합니다. 나무의 자연스러운 결을 살리면서 보호막을 형성합니다.',
      image: 'https://images.unsplash.com/photo-1656075992106-310ff318a512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHdvb2RlbiUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzYzMDIwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      number: '06',
      title: '최종 검수',
      description:
        '완성된 가구의 모든 부분을 꼼꼼히 검수합니다. 디자인, 마감, 기능성 등 모든 면에서 최고의 품질을 확인한 후 포장하여 배송합니다.',
      image: 'https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NzYzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">가구 제작 과정</h1>
          <p className="text-xl text-gray-600">
            정성스러운 6단계 제작 과정을 소개합니다
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="aspect-[4/3] rounded-lg overflow-hidden">
                  <ImageWithFallback
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <div className="text-6xl text-gray-200 mb-2">{step.number}</div>
                <h2 className="text-3xl mb-4">{step.title}</h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="mt-20 bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl mb-6 text-center">평균 제작 기간</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl mb-2">1-2주</div>
              <p className="text-gray-600">소형 가구 및 소품</p>
            </div>
            <div>
              <div className="text-3xl mb-2">4-6주</div>
              <p className="text-gray-600">일반 가구</p>
            </div>
            <div>
              <div className="text-3xl mb-2">8-12주</div>
              <p className="text-gray-600">대형 가구 및 특수 제작</p>
            </div>
          </div>
          <p className="text-sm text-gray-500 text-center mt-6">
            * 제작 기간은 제품의 복잡도와 규모에 따라 달라질 수 있습니다
          </p>
        </div>
      </div>
    </div>
  );
}
