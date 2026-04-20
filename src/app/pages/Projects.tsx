import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "전체" },
    { id: "residential", label: "주거 공간" },
    { id: "commercial", label: "상업 공간" },
    { id: "custom", label: "맞춤 제작" },
  ];

  const projects = [
    {
      id: 1,
      title: "성수동 카페 전체 가구 제작",
      category: "commercial",
      year: "2026",
      description: "빈티지한 분위기의 카페를 위한 테이블 20개, 의자 40개, 수납장 제작",
      image:
        "https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NzYzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["카페", "상업공간", "테이블", "의자"],
    },
    {
      id: 2,
      title: "한남동 주택 거실 가구",
      category: "residential",
      year: "2026",
      description: "넓은 거실 공간에 어울리는 맞춤 TV장, 사이드보드, 선반 제작",
      image:
        "https://images.unsplash.com/photo-1760888331042-e9f4a447fb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzYzMDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["주거", "거실", "수납장"],
    },
    {
      id: 3,
      title: "이태원 레스토랑 다이닝 테이블",
      category: "commercial",
      year: "2025",
      description: "고급 레스토랑을 위한 대형 월넛 테이블 8개 제작",
      image:
        "https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NzYzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["레스토랑", "테이블", "월넛"],
    },
    {
      id: 4,
      title: "서초동 아파트 서재 가구",
      category: "custom",
      year: "2025",
      description: "벽면 전체를 활용한 맞춤 책장과 책상 일체형 제작",
      image:
        "https://images.unsplash.com/photo-1656075992106-310ff318a512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHdvb2RlbiUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzYzMDIwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["서재", "책장", "맞춤제작"],
    },
    {
      id: 5,
      title: "강남 사무실 회의실 테이블",
      category: "commercial",
      year: "2025",
      description: "대형 회의실을 위한 10인용 회의 테이블 제작",
      image:
        "https://images.unsplash.com/photo-1768397003905-a202ea6325f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3b29kZW4lMjBkaW5pbmclMjB0YWJsZXxlbnwxfHx8fDE3NzYzMDIwMzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["사무실", "회의실", "테이블"],
    },
    {
      id: 6,
      title: "송파 주택 침실 가구 세트",
      category: "residential",
      year: "2025",
      description: "침대 프레임, 협탁, 옷장으로 구성된 침실 가구 세트",
      image:
        "https://images.unsplash.com/photo-1760888331042-e9f4a447fb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzYzMDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["침실", "주거", "세트"],
    },
  ];

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">프로젝트</h1>
          <p className="text-xl text-gray-600">포커스온우드가 완성한 다양한 프로젝트를 소개합니다</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? "bg-gray-900 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <ImageWithFallback
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4">
                  <span className="inline-block bg-white px-3 py-1 text-sm">{project.year}</span>
                </div>
              </div>
              <h3 className="text-xl mb-2">{project.title}</h3>
              <p className="text-gray-600 mb-3">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="inline-block bg-gray-100 px-3 py-1 text-sm text-gray-600 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gray-50 p-12 rounded-lg">
            <h2 className="text-3xl mb-4">맞춤 프로젝트 문의</h2>
            <p className="text-lg text-gray-600 mb-8">공간에 딱 맞는 가구를 제작해드립니다</p>
            <a
              href="/custom-order"
              className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              맞춤 제작 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
