import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight, ChevronLeft } from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
// import award2019 from "@/assets/images/award20192.png";
// import teaching1 from "@/assets/images/teaching1.png";
// import siganatureTC from "@/assets/images/signaturetableandchair.png";
// import WS2020 from "@/assets/images/WS2020.png";
// import Fair2023 from "@/assets/images/Fair2023.png";
// import Fair2022 from "@/assets/images/Fair2022.png";

export function BrandNews() {
  // 1. 데이터 배열 (여기에 7번째 데이터를 꼭 추가 확인해주세요!)
  const news = [
    {
      id: 1,
      title: "2019국제기능올림픽선수협회 금메달 수상",
      date: "2019.08.06",
      category: "소식",
      excerpt: "...",
      image: "/images/award20192.png",
    },
    {
      id: 2,
      title: "메이크업 박스 및 스툴 만들기 수업 진행",
      date: "2019.10.12",
      category: "소식",
      excerpt: "...",
      image: "/images/teaching1.png",
    },
    {
      id: 3,
      title: "2019 공예트렌트 페어 브랜드관 참가",
      date: "2019.12.13",
      category: "전시",
      excerpt: "...",
      image: "/images/signaturetableandchair.png",
    },
    {
      id: 4,
      title: "경기가구창작스튜디오 작품 출품",
      date: "2020.07.30",
      category: "소식",
      excerpt: "...",
      image: "/images/WS2020.png",
    },
    {
      id: 5,
      title: "언론이 주목한 포커스온우드: '2022 공예트렌드페어'",
      date: "2022.12.08",
      category: "전시",
      excerpt: "...",
      image: "/images/Fair2022.png",
    },
    {
      id: 6,
      title: "한국국제가구 및 인테리어산업대전(KOFURN) 참가",
      date: "2023.08.23",
      category: "전시",
      excerpt: "...",
      image: "/images/Fair2023.png",
    },
    // 7번째 테스트 데이터
    {
      id: 7,
      title: "새로운 소식 테스트",
      date: "2024.01.01",
      category: "소식",
      excerpt: "페이지네이션 테스트를 위한 7번째 글입니다.",
      image: "/images/Fair2023.png",
    },
  ];

  // 2. 페이지네이션 설정
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 한 페이지에 6개씩

  // 3. 데이터 계산 (가장 중요)
  const sortedNews = [...news].sort((a, b) => b.id - a.id); // ID 기준 내림차순 정렬
  const totalItems = sortedNews.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedNews.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1C352D] mb-6">포커스온우드 이야기</h1>
          <p className="text-lg text-gray-600">포커스온우드의 발자취와 소중한 기록들을 담았습니다.</p>
        </div>

        {/* 그리드 영역 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 min-h-[600px]">
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col"
              >
                <div className="relative overflow-hidden rounded-sm mb-5 aspect-[4/3] bg-gray-50">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-[#1C352D]">
                      {item.category}
                    </span>
                    {currentPage === 1 && index < 2 && (
                      <span className="bg-[#1C352D] text-white px-3 py-1 text-xs font-bold">NEW</span>
                    )}
                  </div>
                </div>
                <div className="flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <Calendar size={12} />
                    <span>{item.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1C352D] transition-colors line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4 line-clamp-2">{item.excerpt}</p>
                  <button className="mt-auto flex items-center text-xs font-bold text-[#1C352D] uppercase tracking-widest group-hover:gap-2 transition-all">
                    자세히 보기 <ChevronRight size={14} />
                  </button>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {/* 페이지네이션 번호 (totalPages가 1보다 클 때만 노출) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 ${currentPage === 1 ? "text-gray-200" : "text-gray-400 hover:text-[#1C352D]"}`}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 text-sm font-medium transition-all ${
                    currentPage === i + 1 ? "bg-[#1C352D] text-white" : "text-gray-400 hover:bg-gray-100"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 ${currentPage === totalPages ? "text-gray-200" : "text-gray-400 hover:text-[#1C352D]"}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
