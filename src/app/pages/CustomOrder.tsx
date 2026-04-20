import { useState } from 'react';
import { motion } from 'motion/react';
import { ClipboardList, MessageSquare, Ruler, Wrench, CheckCircle, Package } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function CustomOrder() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    furnitureType: '',
    size: '',
    material: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        furnitureType: '',
        size: '',
        material: '',
        budget: '',
        message: '',
      });
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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

  const furnitureTypes = [
    '테이블',
    '의자',
    '수납장/서랍장',
    '책상',
    '책장',
    'TV장',
    '침대',
    '기타',
  ];

  const materials = ['참나무', '월넛', '애쉬', '티크', '상담 후 결정'];

  return (
    <div>
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1760939858984-5dc76f0ea34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NzYzMDIwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="맞춤 제작"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-5xl md:text-6xl mb-4">맞춤 제작 의뢰</h1>
          <p className="text-xl text-gray-200">
            공간과 라이프스타일에 딱 맞는 가구를 제작합니다
          </p>
        </motion.div>
      </section>

      {/* Process */}
      <section className="py-20 bg-gray-50">
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
                className="bg-white p-6 rounded-lg"
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

      {/* Order Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">의뢰서 작성</h2>
            <p className="text-xl text-gray-600">
              아래 양식을 작성해주시면 빠른 시일 내에 연락드리겠습니다
            </p>
          </div>

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
              type="submit"
              disabled={submitted}
              className={`w-full py-4 rounded-lg transition-colors text-lg ${
                submitted
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {submitted ? '의뢰서가 접수되었습니다' : '의뢰서 제출하기'}
            </button>
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
                A. 일반적으로 4-6주가 소요되며, 가구의 크기와 복잡도에 따라
                달라질 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg mb-2">Q. 견적은 어떻게 받나요?</h3>
              <p className="text-gray-600">
                A. 의뢰서 제출 후 상담을 통해 정확한 견적을 제공해드립니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg">
              <h3 className="text-lg mb-2">Q. 디자인 수정이 가능한가요?</h3>
              <p className="text-gray-600">
                A. 제작 전 디자인 확정 단계에서 수정이 가능합니다. 제작 시작
                후에는 변경이 어렵습니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
