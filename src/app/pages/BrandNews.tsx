import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function BrandNews() {
  const news = [
    {
      id: 1,
      title: '2026 성수동 쇼룸 리뉴얼 오픈',
      date: '2026.03.15',
      category: '소식',
      excerpt:
        '더욱 넓고 쾌적한 공간으로 리뉴얼한 성수동 쇼룸에서 다양한 가구들을 직접 만나보세요.',
      image: 'https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NzYzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 2,
      title: '친환경 목재 인증 획득',
      date: '2026.02.20',
      category: '인증',
      excerpt:
        '지속 가능한 산림에서 생산된 목재만을 사용하는 FSC 인증을 획득했습니다.',
      image: 'https://images.unsplash.com/photo-1683557165720-cc8dd486233c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvYWslMjB3b29kJTIwdGV4dHVyZSUyMGdyYWlufGVufDF8fHx8MTc3NjMwMjAyOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 3,
      title: '신제품 라인 출시: 데스크 컬렉션',
      date: '2026.01.10',
      category: '제품',
      excerpt:
        '재택근무와 홈오피스를 위한 새로운 데스크 컬렉션을 선보입니다.',
      image: 'https://images.unsplash.com/photo-1760888331042-e9f4a447fb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzYzMDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 4,
      title: '장인과의 만남 워크숍 개최',
      date: '2025.12.05',
      category: '이벤트',
      excerpt:
        '12월 셋째 주 토요일, 목공 장인과 함께하는 원데이 클래스가 진행됩니다.',
      image: 'https://images.unsplash.com/photo-1768946131571-cce8b997e648?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kJTIwZnVybml0dXJlJTIwbWFudWZhY3R1cmluZyUyMHByb2Nlc3N8ZW58MXx8fHwxNzc2MzAyMDMxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 5,
      title: '창립 20주년 기념 전시회',
      date: '2025.11.20',
      category: '전시',
      excerpt:
        '20년간의 여정을 담은 특별 전시회가 11월 한 달간 진행됩니다.',
      image: 'https://images.unsplash.com/photo-1656075992106-310ff318a512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHdvb2RlbiUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzYzMDIwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
    {
      id: 6,
      title: '지역 사회 공헌 프로젝트',
      date: '2025.10.15',
      category: '소식',
      excerpt:
        '지역 학교에 원목 책상과 의자를 기부하는 사회 공헌 활동을 진행했습니다.',
      image: 'https://images.unsplash.com/photo-1760939858984-5dc76f0ea34a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBmdXJuaXR1cmUlMjB3b3Jrc2hvcCUyMGNyYWZ0c21hbnxlbnwxfHx8fDE3NzYzMDIwMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    },
  ];

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">브랜드 이야기</h1>
          <p className="text-xl text-gray-600">
            나무결 공방의 소식과 이야기를 전합니다
          </p>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block bg-white px-3 py-1 text-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                <Calendar size={14} />
                <span>{item.date}</span>
              </div>
              <h3 className="text-xl mb-2 group-hover:text-gray-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-600">{item.excerpt}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}
