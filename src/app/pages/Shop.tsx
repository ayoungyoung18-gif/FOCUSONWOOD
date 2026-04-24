import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // motion/react 대신 framer-motion 추천
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../context/CartContext";
import { ShoppingCart, ChevronLeft, ChevronRight } from "lucide-react";

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
      price: 45000,
      image: "/images/accessories.jpg",
      material: "월넛/오크/메이플",
    },
    {
      id: 2,
      name: "노트북거치대",
      category: "desk",
      price: 32000,
      image: "/images/acclaptopstand4.jpg",
      material: "월넛",
    },
    { id: 3, name: "탁상시계", category: "desk", price: 68000, image: "/images/accTableclock2.jpg", material: "월넛" },
    {
      id: 4,
      name: "곰돌이소품트레이",
      category: "desk",
      price: 18000,
      image: "/images/accDisplaystand1.jpg",
      material: "월넛",
    },
    { id: 5, name: "냄비받침", category: "kitchen", price: 24000, image: "/images/accTrivet1.jpg", material: "월넛" },
    { id: 6, name: "펜홀더A", category: "desk", price: 15000, image: "/images/accPenholder1.jpg", material: "월넛" },
    {
      id: 7,
      name: "명함꽂이펜홀더",
      category: "desk",
      price: 15000,
      image: "/images/accPenholderw.jpg",
      material: "월넛",
    },
    { id: 8, name: "펜홀더B", category: "desk", price: 15000, image: "/images/accPenholderB1.jpg", material: "월넛" },
    {
      id: 9,
      name: "손목시계거치대",
      category: "desk",
      price: 15000,
      image: "/images/accWatchholder2.jpg",
      material: "월넛",
    },
    {
      id: 10,
      name: "옷걸이",
      category: "decor",
      price: 15000,
      image: "/images/closetrack.jpg",
      material: "월넛",
    },
    {
      id: 11,
      name: "낮은 2단 서랍장",
      category: "decor",
      price: 15000,
      image: "/images/designsidetable.png",
      material: "월넛",
    },
    {
      id: 12,
      name: "시그니처 와인장",
      category: "decor",
      price: 15000,
      image: "/images/signaturewine cabinet.png",
      material: "월넛",
    },
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
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4 font-bold text-[#1C352D]">소품</h1>
          <p className="text-xl text-gray-600">일상을 더욱 특별하게 만드는 원목 소품들</p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleCategoryChange(category.id)}
              className={`px-6 py-2 rounded-full transition-all ${
                activeCategory === category.id
                  ? "bg-[#1C352D] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.label}
            </button>
          ))}
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
                  className="w-full flex items-center justify-center space-x-2 bg-[#1C352D] text-white py-3 rounded-lg hover:bg-opacity-90 transition-colors"
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
              className="p-2 text-gray-400 disabled:opacity-20"
            >
              <ChevronLeft />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 rounded-full ${currentPage === i + 1 ? "bg-[#1C352D] text-white" : "text-gray-400 hover:bg-gray-100"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="p-2 text-gray-400 disabled:opacity-20"
            >
              <ChevronRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
