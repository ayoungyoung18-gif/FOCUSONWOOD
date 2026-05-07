import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Hammer, Heart, Leaf, ShoppingBag, Calendar, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "../components/image/ImageWithFallback";
import { newsData } from "../../data/newsData";

// 1. 이미지 에셋 Import
import mainSlide1 from "../../assets/images/mainslide1.png";
import mainAcc from "../../assets/images/mainaccessories.jpg";
import closetRack from "../../assets/images/closetrack.jpg";
import lowTable from "../../assets/images/lowtable.jpg";
import drawer2 from "../../assets/images/drawer2.jpg";
import sigTable from "../../assets/images/signaturetableandchair.png";

const SLIDE_IMAGES = [mainSlide1, mainAcc, closetRack, lowTable, drawer2];

const FEATURES = [
  {
    icon: Leaf,
    title: "완성도의 기준",
    description: "타협하지 않는 디테일, 우리가 정의하는 진정한 완성도입니다.",
  },
  {
    icon: Hammer,
    title: "맞춤 제작",
    description: "공간과 취향에 맞춰 하나씩 정성을 다해 완성합니다.",
  },
  {
    icon: Heart,
    title: "정교한 마무리",
    description: "제작자가 직접 현장을 확인하고 공간에 맞춰 완벽하게 세팅합니다.",
  },
];

const CATEGORIES = [
  {
    title: "소품 컬렉션",
    description: "일상을 채우는 정갈한 나무 오브제",
    link: "/shop",
    image: mainAcc,
    icon: ShoppingBag,
  },
  {
    title: "맞춤 가구 제작",
    description: "공간의 가치를 담아 설계하고 제작합니다.",
    link: "/custom-order",
    image: sigTable,
    icon: Hammer,
  },
];

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const SLIDE_DURATION = 5000;

  // 슬라이드 및 스크롤 로직
  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 100 / (SLIDE_DURATION / 10)));
    }, 10);

    const slideTimer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDE_IMAGES.length);
      setProgress(0);
    }, SLIDE_DURATION);

    const handleScroll = () => {
      if (window.scrollY > 400) setShowTopBtn(true);
      else setShowTopBtn(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(progressTimer);
      clearInterval(slideTimer);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [currentSlide]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSlideChange = (idx: number) => {
    setCurrentSlide(idx);
    setProgress(0);
  };

  const latestNews = [...newsData].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()).slice(0, 3);

  return (
    <div className="bg-[#F1EDE8] relative">
      {/* 🟢 위로 올라가기 버튼 (오른쪽 하단 고정) */}
      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            // 배경을 밝은 화이트 오트(#F1EDE8)로 바꾸고 테두리를 브랜드 컬러로 강조했습니다.
            className="fixed bottom-32 right-10 z-[9999] w-12 h-12 bg-[#F1EDE8] text-[#1A2F28] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#1A2F28]/10 hover:bg-[#1A2F28] hover:text-white transition-all duration-300 group"
            aria-label="위로 올라가기"
          >
            <ChevronUp size={22} className="group-hover:-translate-y-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* 1. Hero Section 수정 부분 */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              // 드래그 기능 추가
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={(e, { offset, velocity }) => {
                const swipeThreshold = 50; // 넘기기 위한 최소 거리
                if (offset.x < -swipeThreshold) {
                  // 왼쪽으로 쓸었을 때 다음 슬라이드
                  handleSlideChange((currentSlide + 1) % SLIDE_IMAGES.length);
                } else if (offset.x > swipeThreshold) {
                  // 오른쪽으로 쓸었을 때 이전 슬라이드
                  handleSlideChange((currentSlide - 1 + SLIDE_IMAGES.length) % SLIDE_IMAGES.length);
                }
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="absolute inset-0 cursor-grab active:cursor-grabbing" // 마우스 사용자를 위한 커서 추가
            >
              <ImageWithFallback
                src={SLIDE_IMAGES[currentSlide]}
                alt="포커스온우드 메인 슬라이드"
                className="w-full h-full object-cover pointer-events-none" // 이미지 드래그 방해 금지
              />
            </motion.div>
          </AnimatePresence>
          <div className="absolute inset-0 bg-[#1A2F28]/40 z-10 pointer-events-none" />
        </div>

        <div className="relative z-20 text-center px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <span className="text-[#F1EDE8] text-xs tracking-[0.3em] font-bold mb-4 block">포커스온우드</span>
            <h1 className="text-[#F1EDE8] text-3xl md:text-5xl font-bold mb-6 tracking-tight leading-tight">
              특별한 당신을 위한
              <br />
              프리미엄 라이프스타일 공간의 시작
            </h1>
            <p className="text-[#F1EDE8]/80 text-base md:text-lg font-medium mb-8 leading-relaxed break-keep">
              포커스온우드는 단순한 가구를 만드는 것이 아니라,
              <br />
              오래 사용할수록 가치가 더해지는 가구를 만듭니다.
            </p>
            <Link
              to="/projects"
              className="inline-block border border-[#F1EDE8] text-[#F1EDE8] px-8 py-3 text-sm font-bold tracking-wider hover:bg-[#F1EDE8] hover:text-[#1A2F28] transition-all duration-500"
            >
              작업 기록 보기
            </Link>
          </motion.div>
        </div>

        {/* 진행 바 */}
        <div className="absolute bottom-0 left-0 w-full z-30">
          <div className="flex w-full border-t border-[#F1EDE8]/10">
            {SLIDE_IMAGES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => handleSlideChange(idx)}
                className="flex-1 relative py-6 text-[#F1EDE8] transition-all group cursor-pointer"
              >
                <span
                  className={`text-[10px] font-bold transition-opacity duration-300 ${currentSlide === idx ? "opacity-100" : "opacity-30"}`}
                >
                  0{idx + 1}
                </span>
                <div className="absolute bottom-0 left-0 w-full h-[3px] bg-[#F1EDE8]/10">
                  {currentSlide === idx && (
                    <motion.div className="h-full bg-[#F1EDE8]" style={{ width: `${progress}%` }} />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Features Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-16">
          {FEATURES.map((feature, idx) => (
            <div key={idx} className="text-center group">
              <feature.icon
                size={36}
                className="mx-auto mb-6 text-[#1A2F28]/40 group-hover:text-[#D4A373] transition-colors"
              />
              <h3 className="text-2xl font-bold mb-4 text-[#1A2F28]">{feature.title}</h3>
              <p className="text-base text-gray-500 leading-relaxed break-keep font-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Categories Section */}
      <section className="py-24 bg-[#DED8D1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-4xl md:text-5xl mb-6 text-[#1A2F28] font-bold tracking-tight">브랜드 컬렉션</h2>
              <div className="w-12 h-1 bg-[#1A2F28]/30 mx-auto mb-6" />
              <p className="text-xl text-[#1A2F28]/80 max-w-2xl mx-auto leading-relaxed font-bold">
                정교한 디테일과 기능적 오브제의 조화,
                <br />
                포커스온우드의 진심을 담아 공간을 완성합니다.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {CATEGORIES.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Link
                  to={category.link}
                  className="group block relative overflow-hidden rounded-2xl aspect-[4/3] shadow-lg"
                >
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* 그라데이션 오버레이 농도 살짝 조절 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F28]/80 via-[#1A2F28]/20 to-transparent" />

                  {/* 텍스트 영역 여백 조절 (p-8 md:p-10) */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-[#F1EDE8]">
                    <div className="flex items-center space-x-3 mb-3">
                      {" "}
                      {/* 간격 축소 */}
                      <category.icon size={24} className="text-[#D4A373]" /> {/* 아이콘 크기 축소 */}
                      {/* 제목 크기 하향 (text-xl md:text-2xl) */}
                      <h3 className="text-xl md:text-2xl font-bold tracking-tight">{category.title}</h3>
                    </div>

                    {/* 설명글 크기 및 줄간격 조절 (text-sm md:text-base) */}
                    <p className="text-[#F1EDE8]/70 text-sm md:text-base mb-6 font-medium leading-relaxed max-w-[90%]">
                      {category.description}
                    </p>

                    {/* 버튼 영역 텍스트 크기 조절 (text-xs md:text-sm) */}
                    <div className="inline-flex items-center space-x-2 text-xs md:text-sm font-bold tracking-widest border-b border-[#F1EDE8]/30 pb-1 group-hover:text-[#D4A373] group-hover:border-[#D4A373] transition-all">
                      <span>컬렉션 보기</span>
                      <ArrowRight size={16} />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. News Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-end mb-12 border-b border-gray-100 pb-8">
            <div>
              <h2 className="text-4xl font-bold text-[#1A2F28] mb-3">새로운 소식</h2>
              <p className="text-xl text-gray-400 font-bold">포커스온우드의 브랜드 이야기를 전해드립니다.</p>
            </div>
            <Link
              to="/brand/news"
              className="text-sm font-bold text-[#1A2F28] hover:text-[#D4A373] flex items-center gap-2"
            >
              전체 소식 보기 <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {latestNews.map((item) => (
              <Link key={item.id} to={`/brand/news/${item.id}`} className="group block">
                <div className="mb-6 overflow-hidden rounded-xl aspect-[16/10] shadow-sm">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center gap-3 text-[11px] text-[#D4A373] font-bold mb-3 uppercase tracking-wider">
                  <Calendar size={12} /> {item.date}
                </div>
                <h3 className="text-lg md:text-xl font-bold text-[#1A2F28] group-hover:text-[#D4A373] transition-colors mb-3 line-clamp-2 h-[3.5rem] leading-snug">
                  {item.title}
                </h3>
                <div className="mt-4 flex items-center gap-1 text-[11px] font-bold text-[#1A2F28]/40 group-hover:text-[#D4A373] transition-all uppercase tracking-widest">
                  자세히 보기 <ArrowRight size={12} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
