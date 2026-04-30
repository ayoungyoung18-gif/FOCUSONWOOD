import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // motion/react 대신 framer-motion 추천
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../context/CartContext";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";
import imgBodegi from "../../assets/images/accbodegi1.jpg";
import imgDisplayStand from "../../assets/images/accDisplaystand1.jpg";
import imgAccessories from "../../assets/images/accessories.jpg";
import imgLaptopStand from "../../assets/images/acclaptopstand4.jpg";
import imgTableClock from "../../assets/images/accTableclock2.jpg";
import imgTrivet from "../../assets/images/accTrivet1.jpg";
import imgPenholder1 from "../../assets/images/accPenholder1.jpg";
import imgPenholderW from "../../assets/images/accPenholderw.jpg";
import imgPenholderB from "../../assets/images/accPenholderB1.jpg";
import imgWatchHolder from "../../assets/images/accWatchholder2.jpg";
import imgClosetRack from "../../assets/images/closetrack.jpg";
import imgSideTable from "../../assets/images/designsidetable.png";
import imgWineCabinet from "../../assets/images/signaturewine cabinet.png";
export function Shop() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1); // 1. 페이지 상태 추가
  const itemsPerPage = 6; // 2. 한 페이지에 보여줄 개수
  const { addToCart } = useCart();

  const categories = [
    { id: "all", label: "전체" },
    { id: "kitchen", label: "주방용품" },
    { id: "desk", label: "데스크 소품" },
    { id: "decor", label: "인테리어" },
  ];
  const products = [
    {
      id: 1,
      name: "보드기(나무로봇키링)",
      category: "desk",
      price: 50000,
      image: imgBodegi,
      material: "월넛/오크/메이플",
    },
    { id: 2, name: "노트북거치대", category: "desk", price: 35000, image: imgLaptopStand, material: "월넛" },
    { id: 3, name: "탁상시계", category: "desk", price: 75000, image: imgTableClock, material: "월넛" },
    { id: 4, name: "곰돌이소품트레이", category: "desk", price: 13000, image: imgDisplayStand, material: "월넛" },
    { id: 5, name: "냄비받침", category: "kitchen", price: 26000, image: imgTrivet, material: "월넛" },
    { id: 6, name: "펜홀더A", category: "desk", price: 17000, image: imgPenholder1, material: "월넛" },
    { id: 7, name: "명함꽂이펜홀더", category: "desk", price: 30000, image: imgPenholderW, material: "월넛" },
    { id: 8, name: "펜홀더B", category: "desk", price: 15000, image: imgPenholderB, material: "월넛" },
    { id: 9, name: "손목시계거치대", category: "desk", price: 25000, image: imgWatchHolder, material: "월넛" },
    { id: 10, name: "옷걸이", category: "decor", price: 220000, image: imgClosetRack, material: "월넛" },
    { id: 11, name: "낮은 2단 서랍장", category: "decor", price: 500000, image: imgSideTable, material: "월넛" },
    { id: 12, name: "시그니처 와인장", category: "decor", price: 1320000, image: imgWineCabinet, material: "월넛" },
  ];

  // 3. 필터링 로직 (카테고리 변경 시 1페이지로 리셋)
  const filteredProducts = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

  // 4. 페이지네이션 데이터 계산
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    setCurrentPage(1); // 카테고리 바꿀 때 페이지 초기화
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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

          {/* 2. 제목: 슬라이드 업 효과 */}
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.33, 1, 0.68, 1] }}
              className="text-4xl md:text-5xl font-extralight text-[#4A4540] tracking-tight"
            >
              소품
            </motion.h1>
          </div>

          {/* 3. 설명문: 부드러운 페이드 인 */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <p className="text-base md:text-lg text-gray-500 font-light leading-relaxed max-w-2xl mx-auto break-keep opacity-80">
              일상을 더욱 특별하게 만드는 원목 소품들
            </p>
          </motion.div>
        </div>
        {/* Category Filter */}
        <div className="flex justify-center mb-20">
          <div className="flex flex-wrap justify-center gap-x-8 md:gap-x-12 border-b border-gray-100 w-full max-w-4xl px-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`relative py-5 text-sm md:text-base tracking-[0.2em] cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id ? "text-[#1C352D] font-bold" : "text-gray-400 hover:text-[#4A4540]"
                }`}
              >
                {/* 카테고리 이름 */}
                <span className="relative z-10">{category.label}</span>

                {/* 활성화 상태일 때 밑줄 (쌍용건설 스타일의 매끄러운 이동 효과) */}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1C352D] z-20"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[800px]">
          <AnimatePresence mode="wait">
            {currentItems.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="group"
              >
                <Link to={`/shop/${product.id}`}>
                  <div className="relative overflow-hidden rounded-lg mb-4 aspect-square bg-gray-50">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      loading="lazy" // 5. 지연 로딩 추가
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <h3 className="text-lg font-bold mb-1">{product.name}</h3>
                  <p className="text-sm text-gray-500 mb-2">{product.material}</p>
                  <p className="text-xl font-bold text-[#1C352D] mb-3">{product.price.toLocaleString()}원</p>
                </Link>
                <button
                  onClick={() => addToCart({ ...product, quantity: 1 })}
                  className="w-full flex items-center justify-center space-x-2 bg-[#1C352D] text-white py-3 rounded-lg cursor-pointer hover:bg-opacity-90 transition-colors"
                >
                  <ShoppingCart size={18} />
                  <span>장바구니 담기</span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* 6. 페이지네이션 버튼 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 mt-16">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="p-2 cursor-pointer text-gray-400 disabled:opacity-20"
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full cursor-pointer ${currentPage === i + 1 ? "bg-[#1C352D] text-white" : "text-gray-400 hover:bg-gray-100"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 cursor-pointer text-gray-400 disabled:opacity-20"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
