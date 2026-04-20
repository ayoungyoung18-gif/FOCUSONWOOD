import { useState, useEffect } from "react";
import { Link } from "react-router";
import { ArrowRight, Hammer, Heart, Leaf, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

// 슬라이드에 사용할 이미지들
import mainImage from "@/assets/images/homepagemain.png";
import accessories from "@/assets/images/accessories.jpg";
import furnituremaking from "@/assets/images/furnituremaking.png";

export function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // 슬라이드 이미지 배열
  const slides = [mainImage, accessories, furnituremaking];

  // 5초마다 슬라이드 자동 변경 로직
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const features = [
    {
      icon: Leaf,
      title: "완성도의 기준",
      description: "타협하지 않는 디테일, 그것이 우리가 정의하는 진정한 완성도입니다.",
    },
    {
      icon: Hammer,
      title: "맞춤 제작",
      description: "공간과 취향에 맞춰 하나씩 맟춤제작하여 완성합니다",
    },
    {
      icon: Heart,
      title: "공간에 맞춘 정교한 마무리",
      description: "제작자가 현장을 직접 확인하고, 가구의 수평과 배치를 공간에 맞춰 완벽하게 세팅합니다.",
    },
  ];

  const categories = [
    {
      title: "소품",
      description: "일상을 채우는 작은 오브제",
      link: "/shop",
      image: accessories,
      icon: ShoppingBag,
    },
    {
      title: "맞춤 가구",
      description: "공간에 맞춘 제작 가구",
      link: "/custom-order",
      image: furnituremaking,
      icon: Hammer,
    },
  ];

  return (
    <div className="bg-[#F1EDE8]">
      {/* 1. Hero Section: 자동 슬라이더 적용 */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <ImageWithFallback
                src={slides[currentSlide]}
                alt={`포커스온우드 메인 슬라이드 ${currentSlide + 1}`}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          {/* 사진 위 글자가 잘 보이게 하는 오버레이 (딥그린 35% 농도) */}
          <div className="absolute inset-0 bg-[#1A2F28]/35 z-1" />
        </div>

        {/* 텍스트 컨텐츠 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-[#F1EDE8] px-4"
        >
          <h1 className="text-3xl md:text-5xl mb-4 tracking-tight font-light leading-tight">
            특별한 당신을 위한 프리미엄 라이프스타일 공간의 시작
          </h1>
          <p className="text-xl md:text-xl mb-7 text-[#F1EDE8]/80 max-w-2xl mx-auto">
            포커스온우드는 단순한 가구를 만드는 것이 아니라,
            <br />
            오래 사용할수록 가치가 더해지는 가구를 만듭니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/shop"
              // 배경: 딥그린(#1A2F28), 호버: 세이지그린(#8A9A78)
              className="inline-flex items-center justify-center space-x-2 bg-[#1A2F28] text-[#F1EDE8] px-8 py-3 rounded-full hover:bg-[#8A9A78] hover:text-[#1A2F28] transition-all font-bold cursor-pointer shadow-lg"
            >
              <span>소품 보기</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/custom-order"
              className="inline-flex items-center justify-center space-x-2 border-2 border-[#F1EDE8] text-[#F1EDE8] px-8 py-3 rounded-full hover:bg-[#F1EDE8] hover:text-[#1A2F28] transition-all font-medium cursor-pointer"
            >
              <span>맞춤가구 제작문의</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </motion.div>

        {/* 슬라이드 인디케이터 (하단 점 표시) */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                currentSlide === index ? "bg-[#F1EDE8] w-8" : "bg-[#F1EDE8]/40 w-2"
              }`}
              aria-label={`${index + 1}번 슬라이드로 이동`}
            />
          ))}
        </div>
      </section>

      {/* 2. Features Section: 딥그린 배경 */}
      <section className="py-24 bg-[#1A2F28] text-[#F1EDE8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                {/* 아이콘 박스: 세이지그린 포인트 적용 */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#8A9A78] text-[#1A2F28] rounded-full mb-6">
                  <feature.icon size={28} />
                </div>
                <h3 className="text-xl mb-3 font-medium">{feature.title}</h3>
                <p className="text-[#F1EDE8]/70 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Main Categories Section - 깊이감 있는 미디엄 오트(#DED8D1) 배경 */}
      <section className="py-24 bg-[#DED8D1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 섹션 헤더 */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl mb-6 text-[#1A2F28] font-light tracking-tight">서비스</h2>
              <div className="w-12 h-px bg-[#1A2F28]/30 mx-auto mb-6" /> {/* 정갈한 구분선 추가 */}
              <p className="text-lg md:text-xl text-[#1A2F28]/70 max-w-2xl mx-auto leading-relaxed">
                작은 소품부터 공간을 채우는 맞춤 가구까지,
                <br />
                포커스온우드의 정성을 담아 제작합니다.
              </p>
            </motion.div>
          </div>

          {/* 서비스 카드 그리드 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
              >
                <Link
                  to={category.link}
                  className="group block relative overflow-hidden rounded-2xl aspect-[4/3] cursor-pointer shadow-lg"
                >
                  {/* 이미지 영역 */}
                  <ImageWithFallback
                    src={category.image}
                    alt={category.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />

                  {/* 딥그린 그라데이션 오버레이: 배경이 어두워진 만큼 더 깊이감 있게 조절 */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A2F28]/90 via-[#1A2F28]/30 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

                  {/* 카드 텍스트 컨텐츠 */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-[#F1EDE8]">
                    <div className="flex items-center space-x-4 mb-4">
                      {/* 세이지 그린(#8A9A78) 아이콘 포인트 */}
                      <category.icon size={28} className="text-[#8A9A78] transition-transform group-hover:scale-110" />
                      <h3 className="text-2xl md:text-3xl font-light tracking-wide">{category.title}</h3>
                    </div>

                    <p className="text-[#F1EDE8]/70 text-base md:text-lg mb-6 font-light leading-relaxed">
                      {category.description}
                    </p>

                    {/* 탐색 버튼 스타일 */}
                    <div className="inline-flex items-center space-x-3 text-sm tracking-[0.2em] uppercase border-b border-[#F1EDE8]/40 pb-2 transition-all group-hover:border-[#8A9A78] group-hover:text-[#8A9A78]">
                      <span>Explore</span>
                      <ArrowRight size={18} className="transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA Section: 세이지그린 배경 적용 */}
      <section className="py-24 bg-[#8A9A78] text-[#1A2F28]">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 font-serif">포커스온우드의 이야기</h2>
          <p className="text-xl mb-10 opacity-80">시간이 흐를수록 깊어지는 원목의 가치를 전합니다.</p>
          <Link
            to="/brand/story"
            className="inline-flex items-center space-x-2 bg-[#1A2F28] text-[#F1EDE8] px-10 py-4 rounded-full hover:bg-opacity-90 transition-all cursor-pointer shadow-md"
          >
            <span>브랜드 스토리 보기</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}
