import { useState } from 'react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'table', label: '테이블' },
    { id: 'chair', label: '의자' },
    { id: 'cabinet', label: '수납가구' },
    { id: 'desk', label: '책상' },
  ];

  const works = [
    {
      id: 1,
      title: '원목 다이닝 테이블',
      category: 'table',
      image: 'https://images.unsplash.com/photo-1656403002413-2ac6137237d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwd29vZCUyMGRpbmluZyUyMHRhYmxlfGVufDF8fHx8MTc3NjMwMDczMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '참나무',
    },
    {
      id: 2,
      title: '북유럽 스타일 의자',
      category: 'chair',
      image: 'https://images.unsplash.com/photo-1685113348801-4c0f06a11030?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2FuZGluYXZpYW4lMjB3b29kZW4lMjBmdXJuaXR1cmV8ZW58MXx8fHwxNzc2MzAwNzM0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '월넛',
    },
    {
      id: 3,
      title: '모던 수납장',
      category: 'cabinet',
      image: 'https://images.unsplash.com/photo-1768578927302-0d85da43f34e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kZW4lMjBjYWJpbmV0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzc2MzAwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '애쉬',
    },
    {
      id: 4,
      title: '원목 작업 책상',
      category: 'desk',
      image: 'https://images.unsplash.com/photo-1586202690666-e1f32e218afe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b29kJTIwZGVzayUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzYzMDA3MzR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '참나무',
    },
    {
      id: 5,
      title: '커스텀 의자',
      category: 'chair',
      image: 'https://images.unsplash.com/photo-1766330976655-629cbab33c9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b20lMjB3b29kZW4lMjBjaGFpciUyMGNyYWZ0c21hbnNoaXB8ZW58MXx8fHwxNzc2MzAwNzMzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '월넛',
    },
    {
      id: 6,
      title: '우드 카운터 테이블',
      category: 'table',
      image: 'https://images.unsplash.com/photo-1763392199096-6efd9d28d8cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmFsJTIwd29vZCUyMGdyYWluJTIwdGV4dHVyZXxlbnwxfHx8fDE3NzYyOTExNzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '티크',
    },
  ];

  const filteredWorks =
    activeCategory === 'all'
      ? works
      : works.filter((work) => work.category === activeCategory);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">작품 갤러리</h1>
          <p className="text-xl text-gray-600">
            나무결 공방에서 제작한 다양한 가구들을 만나보세요
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredWorks.map((work) => (
            <motion.div
              key={work.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <ImageWithFallback
                  src={work.image}
                  alt={work.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
              </div>
              <h3 className="text-xl mb-1">{work.title}</h3>
              <p className="text-sm text-gray-600">소재: {work.material}</p>
            </motion.div>
          ))}
        </motion.div>

        {filteredWorks.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            해당 카테고리에 작품이 없습니다.
          </div>
        )}
      </div>
    </div>
  );
}
