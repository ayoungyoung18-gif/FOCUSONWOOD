import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageWithFallback } from "../components/image/ImageWithFallback";
import { LayoutGrid, Layers, ChevronLeft, ChevronRight } from "lucide-react";

export function WoodTypes() {
  const [viewMode, setViewMode] = useState("stack"); // "stack", "spread", "list"
  const [selectedIndex, setSelectedIndex] = useState(0);

  const woods = [
    {
      name: "호두나무 (Walnut)",
      characteristics: "흔히 '월넛'이라 불리며, 원목 중 가장 고급스럽고 중후한 멋을 지닌 최상급 목재",
      color: "진한 밤색에서 보랏빛이 감도는 초콜릿색",
      uses: "거실 메인 식탁, 서재 책상, 침대 프레임",
      image: "/images/woodwalnut.jpg",
      features: ["습기에 강함", "뒤틀림 적음", "깊어지는 색감"],
    },
    {
      name: "참나무 - 화이트오크 (White Oak)",
      characteristics: "단단한 강도와 차분한 결을 가진 참나무의 일종으로, 밝은 톤 원목의 대명사",
      color: "밝은 베이지에서 옅은 갈색",
      uses: "가족용 식탁, 튼튼한 의자, 고급 수납장",
      image: "/images/whiteoak.jpg",
      features: ["수분에 강함", "매우 단단함", "유행을 타지 않는 결"],
    },
    {
      name: "참나무 - 레드오크 (Red Oak)",
      characteristics: "나뭇결이 시원하고 뚜렷하며, 화이트오크보다 따뜻한 붉은 기운이 감도는 참나무",
      color: "연한 분홍빛이 도는 갈색",
      uses: "침대, 서랍장, 옷장 등 넓은 면적의 가구",
      image: "/images/redoak.jpg",
      features: ["화려한 나뭇결", "우수한 탄성", "합리적인 가격"],
    },
    {
      name: "단풍나무 (Maple)",
      characteristics: "조직이 매우 치밀해 표면이 도자기처럼 매끄러우며 공간을 밝게 만드는 목재",
      color: "우윳빛 크림색",
      uses: "아이방 가구, 주방 도마, 거실 가구",
      image: "/images/maple.jpg",
      features: ["오염에 강함", "밝은 톤", "치밀한 조직"],
    },
    {
      name: "너도밤나무 (Beech)",
      characteristics: "결이 고르고 탄력이 좋아 부드러운 곡선 가공에 최적인 유럽산 목재",
      color: "은은한 살구색 베이지",
      uses: "곡선형 의자, 아동용 가구, 소품",
      image: "/images/beech.jpg",
      features: ["부드러운 촉감", "깨끗한 결", "우수한 탄력"],
    },
  ];

  const handleCardClick = (index: number) => {
    if (viewMode === "stack") setViewMode("spread");
    setSelectedIndex(index);
  };

  const paginate = (direction: number) => {
    const nextIndex = selectedIndex + direction;
    if (nextIndex >= 0 && nextIndex < woods.length) {
      setSelectedIndex(nextIndex);
    }
  };

  return (
    <div className="bg-[#F9F6F3] min-h-screen pb-12 overflow-x-hidden">
      <header className="text-center pt-24 mb-16">
        <div className="flex flex-col items-center mb-10">
          <motion.div animate={{ height: 48 }} className="w-[1px] bg-[#1C352D]/40 mb-6" />
          <span className="text-[#1C352D] text-xs tracking-[0.4em] uppercase block">Materials Archive</span>
        </div>
        <h1 className="text-4xl font-extralight text-[#4A4540] mb-12">나무의 종류</h1>
      </header>

      <div className="max-w-7xl mx-auto px-6">
        {viewMode !== "list" ? (
          <div className="relative flex flex-col lg:flex-row items-center justify-center min-h-[500px] gap-12">
            <motion.div
              layout
              className={`relative h-[500px] flex items-center justify-center transition-all duration-1000 ease-in-out ${
                viewMode === "stack" ? "w-full" : "w-full lg:w-1/2"
              }`}
            >
              <AnimatePresence>
                {viewMode === "stack" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 top-[80%] -translate-y-1/2 flex justify-center z-50"
                  >
                    {/* hover: 설정을 추가하여 마우스를 올리면 색상이 변하게 했습니다 */}
                    <span className="bg-black/40 backdrop-blur-md text-white px-8 py-3 rounded-full text-[16px] font-bold tracking-tight shadow-2xl border border-white/5 transition-all duration-300 cursor-pointer hover:bg-white/50 hover:scale-105 hover:border-[#F9F6F3]/50">
                      클릭해보세요
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence mode="popLayout">
                {woods.map((wood, index) => {
                  const isSelected = selectedIndex === index;
                  const distance = index - selectedIndex;
                  const isVisible = Math.abs(distance) <= 1; // 앞뒤 1개씩 총 3개만 활성화

                  const stackX = index * 12;
                  const stackRotate = index * 3;

                  return (
                    <motion.div
                      key={wood.name}
                      layoutId={`card-${wood.name}`}
                      drag={viewMode === "spread" ? "x" : false}
                      dragConstraints={{ left: 0, right: 0 }}
                      onDragEnd={(e, { offset }) => {
                        const swipeThreshold = 50;
                        if (offset.x < -swipeThreshold) paginate(1);
                        else if (offset.x > swipeThreshold) paginate(-1);
                      }}
                      initial={{ opacity: 0, x: 100 }}
                      animate={{
                        x: viewMode === "stack" ? stackX : isSelected ? 0 : distance * 40 + Math.sign(distance) * 50,
                        y: viewMode === "stack" ? -stackX : isSelected ? -40 : 10,
                        rotate: viewMode === "stack" ? stackRotate : distance * 8,
                        scale: isSelected ? 1 : Math.max(0.5, 1 - Math.abs(distance) * 0.15),
                        opacity:
                          viewMode === "stack" ? (index < 3 ? 1 : 0) : Math.max(0.1, 1 - Math.abs(distance) * 0.4),
                        ilter: isSelected ? "blur(0px)" : `blur(${Math.abs(distance) * 1.5}px)`,
                        zIndex: 20 - Math.abs(distance), // 뒤에 있는 카드가 항상 아래로
                        pointerEvents: isSelected ? "auto" : "none",
                      }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      onClick={() => handleCardClick(index)}
                      className={`absolute w-64 md:w-80 aspect-[3/4] ${
                        viewMode === "spread" ? "cursor-grab active:cursor-grabbing" : "cursor-pointer"
                      }`}
                    >
                      <div
                        className={`relative w-full h-full rounded-sm overflow-hidden shadow-2xl border-[12px] bg-white transition-colors duration-500 ${isSelected ? "border-white" : "border-gray-50"}`}
                      >
                        <ImageWithFallback
                          src={wood.image}
                          alt={wood.name}
                          className="w-full h-full object-cover pointer-events-none"
                        />
                        <div className="absolute top-4 right-4 bg-black/20 backdrop-blur-md px-2 py-1 rounded text-[10px] text-white font-bold">
                          0{index + 1}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
              {/* 화살표 버튼 */}
              <AnimatePresence>
                {viewMode === "spread" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 z-40 pointer-events-none"
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        paginate(-1);
                      }}
                      disabled={selectedIndex === 0}
                      className="p-3 bg-white/80 rounded-full shadow-lg text-[#1C352D] hover:bg-[#1C352D] hover:text-white transition-all cursor-pointer pointer-events-auto disabled:opacity-0"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        paginate(1);
                      }}
                      disabled={selectedIndex === woods.length - 1}
                      className="p-3 bg-white/80 rounded-full shadow-lg text-[#1C352D] hover:bg-[#1C352D] hover:text-white transition-all cursor-pointer pointer-events-auto disabled:opacity-0"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            {/* 설명 텍스트 영역 */}
            <AnimatePresence mode="wait">
              {viewMode === "spread" && (
                <motion.div
                  key={selectedIndex}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="w-full lg:w-1/2 space-y-8 pl-0 lg:pl-12"
                >
                  <h2 className="text-4xl font-light text-[#4A4540]">{woods[selectedIndex].name}</h2>
                  <p className="text-gray-600 font-light text-lg leading-relaxed break-keep">
                    {woods[selectedIndex].characteristics}
                  </p>
                  <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100 text-sm">
                    <div>
                      <span className="font-bold text-[#1C352D] block mb-1 uppercase tracking-widest text-[10px]">
                        Color
                      </span>
                      {woods[selectedIndex].color}
                    </div>
                    <div>
                      <span className="font-bold text-[#1C352D] block mb-1 uppercase tracking-widest text-[10px]">
                        Uses
                      </span>
                      {woods[selectedIndex].uses}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* 리스트 모드 */
          <div className="space-y-32 max-w-4xl mx-auto">
            {woods.map((wood) => (
              <motion.div
                key={wood.name}
                layoutId={`card-${wood.name}`}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                <div className="aspect-[4/3] rounded-sm overflow-hidden shadow-lg">
                  <ImageWithFallback src={wood.image} alt={wood.name} className="w-full h-full object-cover" />
                </div>
                <div className="space-y-4">
                  <h3 className="text-3xl font-light text-[#4A4540]">{wood.name}</h3>
                  <p className="text-gray-600 font-light leading-relaxed">{wood.characteristics}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="flex justify-center mt-8 mb-8">
          <button
            onClick={() => setViewMode(viewMode === "list" ? "spread" : "list")}
            className="inline-flex items-center gap-2 px-8 py-3 border border-[#1C352D] rounded-full text-[#1C352D] text-[16px] font-bold tracking-widest cursor-pointer hover:bg-[#1C352D] hover:text-white transition-all z-30 relative bg-[#F9F6F3] shadow-md active:scale-95"
          >
            {viewMode === "list" ? (
              <>
                <Layers size={18} /> 하나씩 보기
              </>
            ) : (
              <>
                <LayoutGrid size={18} /> 한눈에 보기
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
