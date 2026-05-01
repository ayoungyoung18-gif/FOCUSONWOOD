import { motion } from "motion/react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import ddpImg from "../../assets/images/ddp.png";
import schoolImg from "../../assets/images/project_school.png";
import samharuImg from "../../assets/images/samharu.jpg";
import centerImg from "../../assets/images/communityCenter.png";
import kinderImg from "../../assets/images/kindergarden.jpg";
import bedImg from "../../assets/images/bed.jpg";

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
      title: "동대문 DDP 디자인스토어",
      category: "commercial",
      year: "2026",
      description: "디자인 성지의 공간미를 살린 미니멀한 전시 매대와 라이프스타일 굿즈 진열 선반 제작",
      image: ddpImg,
      tags: ["공공기관", "전시가구", "화이트오크"],
    },
    {
      id: 2,
      title: "철원역사문화공원의 근대 학교",
      category: "commercial",
      year: "2026",
      description: "근대 교육 현장의 분위기를 재현하기 위해 고재의 질감을 살린 맞춤 책상과 교구장 제작",
      image: schoolImg,
      tags: ["문화공원", "역사재현", "전통가구"],
    },
    {
      id: 3,
      title: "성수동 카페 삼하루",
      category: "commercial",
      year: "2025",
      description: "클라이언트의 디자인 시안을 바탕으로 공간 내 모든 가구를 정교하게 구현한 풀커스텀 제작",
      image: samharuImg,
      tags: ["풀커스텀", "공간디자인", "상업공간"],
    },
    {
      id: 4,
      title: "포천시 주민센터",
      category: "custom",
      year: "2025",
      description: "실내 조경과 수납을 결합해 시민들에게 쾌적한 쉼터를 제공하는 포천 주민센터 맞춤형 플랜테리어",
      image: centerImg,
      tags: ["서재", "책장", "맞춤제작"],
    },
    {
      id: 5,
      title: "의정부 어린이집",
      category: "commercial",
      year: "2025",
      description: "아이들의 활동 동선에 맞춰 모서리를 둥글게 다듬고 친환경 소재로 제작한 맞춤형 원목 사물함 3조",
      image: kinderImg,
      tags: ["어린이가구", "원목사물함", "맞춤제작"],
    },
    {
      id: 6,
      title: "주택 침실 가구 세트",
      category: "residential",
      year: "2025",
      description: "전시 디자인 X 공간 맞춤 커스텀: 침실·다이닝·아이방 통합 가구 제작",
      image: bedImg,
      tags: ["침실", "주거", "세트"],
    },
    {
      id: 7,
      title: "레이저 각인 (명패·상패)",
      category: "custom",
      year: "2025",
      description: "관공서·기업 명패 및 단체 상패 맞춤 제작",
      image: bedImg, // 추후 명패/상패 이미지로 교체 권장
      tags: ["단체주문", "나무명패", "감사패", "기업제작"],
    },
    {
      id: 8,
      title: "영북고등학교 휴게공간",
      category: "commercial",
      year: "2025",
      description: "학생들의 쉼을 위한 밴치 배치 및 편안한 분위기의 휴게 공간 조성",
      image: bedImg,
      tags: ["학교인테리어", "휴게공간", "맞춤가구"],
    },
    {
      id: 9,
      title: "충북 방아로스터리 카페 데크리모델링",
      category: "commercial",
      year: "2025",
      description: "야외 테라스의 정취를 살리는 천연 원목 데크 시공 및 카페 외부 공간 리모델링",
      image: bedImg,
      tags: ["카페인테리어", "야외데크", "리모델링"],
    },
    {
      id: 10,
      title: "포천 술빚는 전가네",
      category: "commercial",
      year: "2025",
      description: "전통주의 깊은 맛과 어우러지는 집기 제작",
      image: bedImg,
      tags: ["전통음식점", "매장인테리어", "포천"],
    },
  ];

  const filteredProjects =
    activeCategory === "all" ? projects : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header - 정갈한 레이아웃 + 슬라이드 애니메이션 */}
        <div className="text-center mb-24 pt-16">
          {/* 1. 상단 수직 선 애니메이션 */}
          <div className="flex flex-col items-center mb-10">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 48 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-[1px] bg-[#1C352D]/40 mb-6"
            />
            <div className="overflow-hidden">
              <motion.span
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-[#1C352D] text-xs tracking-[0.4em] font-medium uppercase block"
              >
                Works Archive
              </motion.span>
            </div>
          </div>

          {/* 2. 제목: 슬라이드 업 효과 (쌍용건설 스타일 모션) */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl md:text-5xl font-extralight text-[#4A4540] tracking-tight"
            >
              프로젝트
            </motion.h1>
          </div>

          {/* 3. 설명문: 부드러운 페이드 인 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto break-keep opacity-80">
              시간이 흐를수록 깊어지는 나무의 가치로
              <br />
              공간의 흐름을 완성한 포커스온우드의 기록입니다.
            </p>
          </motion.div>
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
                {/* <div className="absolute top-4 right-4">
                  <span className="inline-block bg-white px-3 py-1 text-sm">{project.year}</span>
                </div> */}
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
              className="inline-block bg-[#1C352D] text-[#F9F6F3] px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              맞춤 제작 문의하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
