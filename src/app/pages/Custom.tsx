import { motion } from 'motion/react';
import { ClipboardList, MessageSquare, Ruler, Wrench, CheckCircle, Package } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Custom() {
  const process = [
    {
      icon: MessageSquare,
      title: '1. 상담',
      description: '원하시는 가구의 용도, 사이즈, 디자인에 대해 상담합니다',
    },
    {
      icon: Ruler,
      title: '2. 설계',
      description: '공간 측정 후 최적의 디자인을 제안합니다',
    },
    {
      icon: ClipboardList,
      title: '3. 견적',
      description: '소재와 디자인에 따른 정확한 견적을 제공합니다',
    },
    {
      icon: Wrench,
      title: '4. 제작',
      description: '숙련된 장인이 정성스럽게 가구를 제작합니다',
    },
    {
      icon: CheckCircle,
      title: '5. 검수',
      description: '완성된 가구의 품질을 꼼꼼히 확인합니다',
    },
    {
      icon: Package,
      title: '6. 배송 및 설치',
      description: '안전하게 배송하고 전문적으로 설치합니다',
    },
  ];

  const categories = [
    {
      title: '테이블',
      description: '다이닝 테이블, 작업 테이블, 사이드 테이블',
      image: 'https://images.unsplash.com/photo-1656403002413-2ac6137237d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29vZCUyMGRpbmluZyUyMHRhYmxlfGVufDF8fHx8MTc3NjMwMDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: '의자',
      description: '다이닝 체어, 암체어, 스툴',
      image: 'https://images.unsplash.com/photo-1766330976655-629cbab33c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3b29kZW4lMjBjaGFpciUyMGNyYWZ0c21hbnNoaXB8ZW58MXx8fHwxNzc2MzAwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: '수납가구',
      description: '수납장, 서랍장, 책장, TV장',
      image: 'https://images.unsplash.com/photo-1768578927302-0d85da43f34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjBjYWJpbmV0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MzAwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      title: '책상',
      description: '학습 책상, 작업 책상, 컴퓨터 책상',
      image: 'https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzYzMDA3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  const materials = [
    { name: '참나무', description: '단단하고 무늬가 아름다운 국내산 원목' },
    { name: '월넛', description: '짙은 색감과 고급스러운 질감' },
    { name: '애쉬', description: '밝은 색상과 뚜렷한 나뭇결' },
    { name: '티크', description: '내구성이 뛰어난 고급 원목' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl mb-6">맞춤 제작</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              공간과 라이프스타일에 딱 맞는 가구를 제작합니다.
              <br />
              사이즈, 디자인, 소재까지 자유롭게 선택하실 수 있습니다.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">제작 과정</h2>
            <p className="text-xl text-gray-600">
              상담부터 배송까지, 체계적인 프로세스로 진행됩니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gray-900 text-white rounded-full mb-4">
                  <step.icon size={24} />
                </div>
                <h3 className="text-xl mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">제작 가능 품목</h2>
            <p className="text-xl text-gray-600">
              다양한 종류의 가구를 맞춤 제작합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden"
              >
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-xl mb-2">{category.title}</h3>
                  <p className="text-sm text-gray-600">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">사용 가능 소재</h2>
            <p className="text-xl text-gray-600">
              엄선된 천연 원목을 사용합니다
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {materials.map((material, index) => (
              <motion.div
                key={material.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-lg"
              >
                <h3 className="text-xl mb-2">{material.name}</h3>
                <p className="text-gray-600">{material.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-4">가격 안내</h2>
          </div>
          <div className="bg-white p-8 rounded-lg">
            <div className="space-y-4 text-gray-700">
              <p>
                맞춤 가구의 가격은 사이즈, 디자인, 소재에 따라 달라집니다.
              </p>
              <p>
                정확한 견적은 상담 후 제공되며, 투명하고 합리적인 가격을
                제시합니다.
              </p>
              <p className="text-sm text-gray-500">
                * 기본 제작 기간: 4-6주 (디자인 복잡도에 따라 변동 가능)
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl mb-6">맞춤 가구 제작 상담</h2>
          <p className="text-xl text-gray-300 mb-8">
            원하시는 가구에 대해 편하게 문의해 주세요.
            <br />
            전문 상담사가 친절하게 안내해드립니다.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-white text-gray-900 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
          >
            상담 문의하기
          </Link>
        </div>
      </section>
    </div>
  );
}
