import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, Award, Heart, Users, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { newsData } from "../../data/newsData";

export function BrandStory() {
  // 1. 페이지네이션을 위한 상태와 변수 정의
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const values = [
    {
      icon: Award,
      title: "완성도의 기준",
      description: "타협하지 않는 디테일, 그것이 우리가 정의하는 진정한 완성도입니다.",
    },
    {
      icon: TreePine,
      title: "흐름을 읽는 감각",
      description: "변화하는 디자인을 이해하고 공간에 맞게 풀어냅니다",
    },
    {
      icon: Heart,
      title: "현장에서 설계되는 맞춤",
      description: "제작자가 현장을 직접 확인하고, 가구의 수평과 배치를 공간에 맞춰 완벽하게 세팅합니다.",
    },
    {
      icon: Users,
      title: "고객과의 소통",
      description: "고객의 삶과 공간을 이해하고 함께 만들어갑니다",
    },
  ];

  // 2. 공유 데이터를 최신순으로 정렬 및 페이지 절삭
  const sortedNews = [...newsData].sort((a, b) => b.id - a.id);
  const totalPages = Math.ceil(sortedNews.length / itemsPerPage);
  const currentItems = sortedNews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      {/* Hero Section */}
      {/* Hero Section: 비디오 배경 적용 */}
      <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center">
        {/* 비디오 레이어 */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay={false} // 소리가 나려면 자동재생 대신 사용자가 틀게 하는 것이 안전함
            controls // 사용자가 볼륨 조절 및 재생을 할 수 있게 바(bar) 노출
            loop
            playsInline
            className="w-full h-full object-contain bg-black" // 비디오 전체 비율이 다 나오도록 contain 설정
          >
            {/* 홈 화면과 같은 영상 혹은 다른 브랜드 영상 경로 */}
            <source src="/videos/philosophy.mp4" type="video/mp4" />
            브라우저가 비디오를 지원하지 않습니다.
          </video>
          {/* 어두운 그라데이션 오버레이: 글자를 더 선명하게 만듦 */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/30" />
        </div>

        {/* 중앙 텍스트 콘텐츠
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white px-4"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-light tracking-tight">소중한 일상을 채우는 깊이</h1>
          <p className="text-lg md:text-xl text-gray-200 font-light max-w-2xl mx-auto break-keep">
            시간이 흐를수록 나무의 가치가 깊어지는 가구를 만듭니다.
          </p>
        </motion.div> */}

        {/* 스크롤 유도 아이콘 (선택 사항) */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50"
        >
          <div className="w-[1px] h-12 bg-gradient-to-b from-white to-transparent mx-auto" />
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-[#DED8D1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-normal tracking-wide text-[#4A4540]">포커스온우드의 철학</h2>
          </motion.div>

          <div className="text-center mb-20 italic text-[#4A4540]/80 font-light leading-loose text-lg">
            <p>공간에는 각자의 이야기가 있습니다.</p>
            <p>시간이 지나도 변하지 않는 디자인이 머무는 공간,</p>
            <p>그 안에서 우리의 일상은 더욱 즐거워집니다.</p>
          </div>

          <div className="space-y-16 text-base md:text-lg text-gray-700 leading-relaxed text-center break-keep">
            <div className="space-y-6">
              <p>포커스온우드는 목수가 직접 나무를 고르고 그 결을 살려 공간의 흐름을 빚어냅니다.</p>
              <p>보이지 않는 곳까지 정교하게 연결하고, 마지막 순간까지 섬세하게 다듬습니다.</p>
              <p>이러한 과정은 단순한 제작을 넘어 일상의 풍경을 만드는 일입니다.</p>
            </div>
            <div className="space-y-6 pt-8">
              <p>손에 닿는 모든 면이 자연스러운 가구,</p>
              <p className="font-medium text-[#4A4540] text-xl">
                당신의 소중한 일상이 더욱 풍요로워지는 경험을 약속합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#F9F6F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1C352D] mb-4">포커스온우드의 가치</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-8 rounded-sm text-center shadow-sm"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1C352D] text-white rounded-full mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-[#DED8D1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl md:text-4xl mb-10 font-normal text-[#4A4540]">포커스온우드의 비전</h2>
            <p className="text-lg text-gray-700 leading-relaxed break-keep">
              포커스온우드는 단순히 가구를 만드는 것을 넘어, <strong>나무가 가진 본연의 온기와 생명력</strong>을 당신의
              삶에 전하고자 합니다. 우리가 정성껏 깎고 다듬은 나무가 누군가의 소중한 일상에서 함께 호흡하며,{" "}
              <strong>시간이 흐를수록 깊어지는 나무의 가치</strong>를 경험하시길 바랍니다.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
