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
  const news = [
    {
      id: 1,
      title: "2019국제기능올림픽선수협회 금메달 수상",
      date: "2019.08.06",
      category: "소식",
      excerpt:
        "국제기능올림픽선수협회 주관 기능경기대회에서 당당히 금메달을 수상하며, 포커스온우드만이 보유한 세계적 수준의 정교한 목공 기술력을 입증했습니다.타협하지 않는 장인정신과 압도적인 기술 완성도를 바탕으로, 단순한 가구를 넘어 국가가 인정한 최고 수준의 가치를 모든 제품에 담아내고 있습니다.",
      image: "/images/award20192.png",
    },
    {
      id: 2,
      title: "메이크업 박스 및 스툴 만들기 수업 진행",
      date: "2019.10.12",
      category: "소식",
      excerpt:
        "단순한 가구 제작을 넘어 실생활에 품격을 더하는 소품을 직접 완성하며, 원목이 주는 일상의 즐거움과 성취감을 함께 나누었습니다.",
      image: "/images/teaching1.png",
    },
    {
      id: 3,
      title: "2019 공예트렌트 페어 브랜드관 참가",
      date: "2019.12.13",
      category: "전시",
      excerpt:
        "메이플의 밝은 색감과 월넛의 깊은 무게감이 조화를 이루는 포커스온우드의 시그니처 데스크 라인업을 공예트렌드페어 브랜드관에서 공개했습니다.두 수종의 극명한 색상 대비를 정교한 결구법으로 풀어내어, 목재 본연의 아름다움을 극대화한 독보적인 조형미로 큰 주목을 받았습니다.",
      image: "/images/signaturetableandchair.png",
    },
    {
      id: 4,
      title: "경기가구창작스튜디오 작품 출품",
      date: "2020.07.30",
      category: "소식",
      excerpt:
        "원목의 따뜻함에 위트를 더한 '토끼 로봇 스피커' — 정교한 목공 기술로 탄생한 세상에 없던 감성 IT 소품입니다.",
      image: "/images/WS2020.png",
    },
    {
      id: 5,
      title: "언론이 주목한 포커스온우드: '2022 공예트렌드페어'",
      date: "2022.12.08",
      category: "전시",
      excerpt:
        "'2022 공예트렌드페어'에서 독창적인 목공예 가구로 언론의 주목을 받으며 브랜드의 가치를 입증했습니다.원목 본연의 미학을 담은 정교한 수작업 가구를 선보여 대중과 전문가들의 큰 호평을 이끌어냈습니다.",
      image: "/images/Fair2022.png",
    },
    {
      id: 6,
      title: "한국국제가구 및 인테리어산업대전(KOFURN) 참가",
      date: "2023.08.23",
      category: "전시",
      excerpt:
        "대한민국 대표 가구 전시회 KOFURN 2023에 참여하여, 포커스온우드만의 감각적인 디자인과 정교한 커스텀 기술력을 선보였습니다.",
      image: "/images/Fair2023.png",
    },

    {
      id: 7,
      title: "[공방 체험] 영북중학교 학생들과 함께한 원목 도마 제작 원데이 클래스",
      date: "2023.12.23",
      category: "소식",
      excerpt:
        "영복중학교 학생 20명이 공방에 직접 방문하여 목수의 작업 환경을 경험하고, 전문 장비를 활용해 세상에 하나뿐인 나만의 원목 도마를 완성했습니다.",
      image: "/images/middleschool.png",
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
              포커스온우드 이야기
            </motion.h1>
          </div>

          {/* 3. 설명문: 부드러운 페이드 인 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto break-keep opacity-80">
              포커스온우드의 발자취와 소중한 기록들을 담았습니다
            </p>
          </motion.div>
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
