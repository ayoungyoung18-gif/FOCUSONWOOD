import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ChevronRight, ChevronLeft } from "lucide-react";

import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import award2019 from "@/assets/images/award20192.png";
import teaching1 from "@/assets/images/teaching1.png";
import siganatureTC from "@/assets/images/signaturetableandchair.png";
import WS2020 from "@/assets/images/WS2020.png";
import Fair2023 from "@/assets/images/Fair2023.png";
import Fair2022 from "@/assets/images/Fair2022.png";

export function BrandNews() {
  const news = [
    {
      id: 1,
      title: "2019국제기능올림픽선수협회 금메달 수상",
      date: "2019.08.06",
      category: "소식",
      excerpt: "2019 국제기능올림픽선수협회에서 주관한 기능 경기 대회에서 목공 부문 금메달을 수상하였습니다.",
      image: award2019,
    },
    {
      id: 2,
      title: "메이크업 박스 및 스툴 만들기 수업 진행 ",
      date: "2019.10.12",
      category: "소식",
      excerpt: "킨텍스 '2019 K-뷰티박람회'에서 4일간 일반인을 대상으로 가구 DIY 체험 수업을 진행하였습니다",
      image: teaching1,
    },
    {
      id: 3,
      title: "2019 공예트렌트 페어 브랜드관 참가",
      date: "2019.12.13",
      category: "전시",
      excerpt:
        "삼성동 코엑스(COEX)에서 열린 '2019 공예트렌드페어'에 참가하여 포커스온우드만의 가구와 목공예 제품을 선보였습니다.",
      image: siganatureTC,
    },
    {
      id: 4,
      title: "경기가구창작스튜디오 작품 출품 ",
      date: "2020.07.30",
      category: "소식",
      excerpt: "경기가구창작스튜디오 전시를 위해 제작한 우드 스피커와 4인용 테이블 세트를 출품하였습니다.",
      image: WS2020,
    },
    {
      id: 5,
      title: "언론이 주목한 포커스온우드: '2022 공예트렌드페어'",
      date: "2022.12.08",
      category: "전시",
      excerpt: "한스경제 보도를 통해 포커스온우드만의 독창적인 가구 제작 철학이 소개되었습니다.",
      image: Fair2022,
    },
    {
      id: 6,
      title: "한국국제가구 및 인테리어산업대전(KOFURN) 참가",
      date: "2023.08.23",
      category: "전시",
      excerpt: "호두나무(월넛) 조각들을 정교하게 이어 붙여 나무 본연의 색과 결을 기하학적 패턴으로 구현했습니다.",
      image: Fair2023,
    },

    {
      id: 7,
      title: "한국국제가구 및 인테리어산업대전(KOFURN) 참가",
      date: "2023.08.23",
      category: "전시",
      excerpt: "호두나무(월넛) 조각들을 정교하게 이어 붙여 나무 본연의 색과 결을 기하학적 패턴으로 구현했습니다.",
      image: Fair2023,
    },
  ];

  // --- 페이지네이션 로직 ---
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6; // 한 페이지에 보여줄 게시글 수 (3단 그리드 기준 2줄)

  const sortedNews = [...news].reverse(); // 최신순 정렬
  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);

  // 현재 페이지에 보여줄 데이터 추출
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = sortedNews.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" }); // 페이지 이동 시 부드럽게 상단으로
  };

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 페이지 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-[#1C352D] mb-6">브랜드 이야기</h1>
          <p className="text-lg text-gray-600">포커스온우드의 발자취와 소중한 기록들을 담았습니다.</p>
        </div>

        {/* 뉴스 그리드 (3단) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          <AnimatePresence mode="wait">
            {currentItems.map((item, index) => (
              <motion.article
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group flex flex-col"
              >
                {/* 이미지 영역 */}
                <div className="relative overflow-hidden rounded-sm mb-5 aspect-[4/3] bg-gray-50">
                  <ImageWithFallback
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold tracking-wider text-[#1C352D]">
                      {item.category}
                    </span>
                    {/* 최신순 정렬 시 상단 2개에만 NEW 배지 (1페이지에서만 노출) */}
                    {currentPage === 1 && index < 2 && (
                      <span className="bg-[#1C352D] text-white px-3 py-1 text-xs font-bold tracking-wider">NEW</span>
                    )}
                  </div>
                </div>

                {/* 텍스트 영역 */}
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

        {/* 페이지네이션 번호 영역 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-20">
            <button
              onClick={() => paginate(currentPage - 1)}
              disabled={currentPage === 1}
              className={`p-2 transition-colors ${currentPage === 1 ? "text-gray-200" : "text-gray-400 hover:text-[#1C352D]"}`}
            >
              <ChevronLeft size={24} />
            </button>

            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => paginate(i + 1)}
                  className={`w-10 h-10 text-sm font-medium transition-all rounded-sm ${
                    currentPage === i + 1
                      ? "bg-[#1C352D] text-white"
                      : "text-gray-400 hover:bg-gray-50 hover:text-gray-600"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            <button
              onClick={() => paginate(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`p-2 transition-colors ${currentPage === totalPages ? "text-gray-200" : "text-gray-400 hover:text-[#1C352D]"}`}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
