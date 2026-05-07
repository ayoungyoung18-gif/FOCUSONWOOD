import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TreePine, Award, Heart, Users, Calendar, ChevronRight, ChevronLeft } from "lucide-react";
import { ImageWithFallback } from "../components/image/ImageWithFallback";
import { newsData } from "../../data/newsData";
import { Volume2, VolumeX, Play, Pause } from "lucide-react"; // 아이콘 라이브러리 사용 시

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
  // 컴포넌트 함수 시작 부분
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) videoRef.current.pause();
      else videoRef.current.play();
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };
  return (
    <div className="bg-[#F9F6F3]">
      {" "}
      {/* 전체 바탕색 통일 */}
      {/* 1. Header: 브랜드 아이덴티티를 보여주는 슬라이드 애니메이션 */}
      <header className="text-center mb-12 pt-24 bg-[#F9F6F3]">
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
              Philosophy
            </motion.span>
          </div>
        </div>

        <div className="overflow-hidden mb-8">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="text-4xl md:text-5xl font-extralight text-[#4A4540] tracking-tight"
          >
            포커스온우드의 철학
          </motion.h1>
        </div>
      </header>
      {/* 2. Story Section: 짙은 베이지 배경으로 시선 집중 */}
      <section className="py-24 bg-[#DED8D1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
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

              <p>각각의 나무가 지닌 고유한 결과 색감을 살리면서,</p>
              <p>현대적인 디자인과 전통적인 기법을 조화롭게 결합합니다.</p>
              <p> 빠르게 만들어내는 것보다 천천히, 정성스럽게 완성하는 것을 중요하게 생각합니다.</p>
              <p>우리가 만드는 가구는 단순한 제품이 아닙니다.</p>
              <p>오랜 시간 함께할 가족 같은 존재이며, 공간에 따뜻함을 더하는 예술 작품입니다.</p>
            </div>
            <div className="text-xl text-[#4A4540] space-y-6 pt-2">
              <p>손에 닿는 모든 면이 자연스러운 가구</p>
              <p className="font-medium text-[#4A4540] text-xl">
                당신의 소중한 일상이 더욱 풍요로워지는 경험을 약속합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* 3. Video Section: 제작 과정을 보여주는 영상 콘텐츠 */}
      <section className="py-24 bg-[#F9F6F3]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative group overflow-hidden rounded-sm shadow-xl aspect-video bg-black">
            <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover">
              <source src="/videos/philosophy.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors pointer-events-none" />

            <div className="absolute bottom-6 left-6 z-20 flex gap-3">
              <button
                onClick={togglePlay}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/30 text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                {isPlaying ? (
                  <Pause size={18} fill="currentColor" />
                ) : (
                  <Play size={18} fill="currentColor" className="ml-0.5" />
                )}
              </button>
              <button
                onClick={toggleMute}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/30 text-white backdrop-blur-md hover:bg-white/20 transition-all"
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
          <p className="mt-6 text-center text-[#1C352D] font-light text-xs tracking-widest uppercase opacity-60">
            The Spirit of Craftsmanship
          </p>
        </div>
      </section>
      {/* 4. Values Section: 핵심 가치 4가지 */}
      <section className="py-24 bg-white">
        {" "}
        {/* 구분을 위해 배경을 흰색으로 변경 */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-light text-[#4A4540]">포커스온우드의 가치</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-[#F9F6F3] p-10 rounded-sm text-center transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-[#1C352D] text-white rounded-full mb-6">
                  <value.icon size={24} />
                </div>
                <h3 className="text-lg font-medium mb-4 text-[#4A4540]">{value.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed break-keep">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* 5. Vision Section: 마지막 마무리 메시지 */}
      <section className="py-32 bg-[#DED8D1]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-light mb-12 text-[#4A4540]">포커스온우드의 비전</h2>
            <p className="text-lg text-gray-700 leading-loose break-keep font-light">
              포커스온우드는 단순히 가구를 만드는 것을 넘어, <br />
              <strong>나무가 가진 본연의 온기와 생명력</strong>을 당신의 삶에 전하고자 합니다. <br />
              우리가 정성껏 깎고 다듬은 나무가 누군가의 소중한 일상에서 함께 호흡하며, <br />
              <strong>시간이 흐를수록 깊어지는 나무의 가치</strong>를 경험하시길 바랍니다.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
