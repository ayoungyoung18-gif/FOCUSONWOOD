import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, ChevronLeft, ChevronRight, Check, X } from "lucide-react";
// 🟢 데이터 파일 경로가 맞는지 꼭 확인하세요!
import { products, categories } from "../../data/products";

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false);
  const itemsPerPage = 6;

  useEffect(() => {
    setActiveCategory(categoryParam);
    setCurrentPage(1);
  }, [categoryParam]);

  const handleCategoryClick = (id: string) => {
    setSearchParams({ category: id });
  };

  const handleQuickAdd = (item: any) => {
    // 🟢 데이터 구조에 맞춰 images[0]을 thumbnail로 사용
    addToCart({ ...item, image: item.images[0], quantity: 1 });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500);
  };

  // 🟢 필터 로직 점검: 데이터의 'categoryId' 속성과 비교합니다.
  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.categoryId === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="pt-24 md:pt-40 pb-20 bg-white min-h-screen font-sans relative">
      {/* 장바구니 팝업 (모바일 대응: 하단 배치) */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 50, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-50 flex items-center gap-3 bg-[#1C352D] text-white px-5 py-4 rounded-2xl shadow-2xl min-w-[90%] md:min-w-[320px]"
          >
            <Check size={18} className="text-[#B38B5D]" strokeWidth={3} />
            <span className="text-[13px] font-bold flex-1">장바구니에 담았습니다.</span>
            <Link to="/cart" className="text-[11px] text-[#B38B5D] font-bold border-b border-[#B38B5D]">
              VIEW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1300px] mx-auto px-6 md:px-8 w-full">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-24">
          <div className="flex flex-col items-center mb-6 md:mb-10">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 60 }}
              className="w-[1px] bg-[#1C352D]/20 mb-8 hidden md:block"
            />
            <span className="text-[#1C352D] text-[10px] md:text-[11px] tracking-[0.5em] font-bold uppercase">
              Works Archive
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-light text-[#3E3A36] mb-4 md:mb-6 tracking-tight">일상의 소품</h1>
          <p className="text-sm md:text-lg text-gray-500 font-light italic opacity-80 px-4">
            나무의 결과 시간이 닿은 도구들
          </p>
        </div>

        {/* Filter Section: 모바일 가로 스크롤 대응 */}
        <div className="flex justify-start md:justify-center mb-12 md:mb-20 overflow-x-auto no-scrollbar border-b border-gray-100">
          <div className="flex gap-8 md:gap-20 px-4 md:px-0 relative whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative py-4 md:py-6 text-[15px] md:text-[16px] tracking-[0.1em] cursor-pointer transition-all ${
                  activeCategory === category.id ? "text-[#1C352D] font-extrabold" : "text-gray-400 font-semibold"
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryLine"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1C352D]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section: 모바일 1열, PC 3열 */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-24 mb-16 md:mb-24"
        >
          <AnimatePresence mode="popLayout">
            {currentItems.length > 0 ? (
              currentItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                >
                  <Link to={`/shop/${item.id}`} className="group block">
                    <div className="aspect-square rounded-[30px] md:rounded-[40px] overflow-hidden bg-[#FBFBFB] mb-6 md:mb-8 relative border border-gray-100 shadow-sm">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          handleQuickAdd(item);
                        }}
                        className="absolute bottom-5 right-5 md:bottom-8 md:right-8 bg-white p-4 md:p-5 rounded-full shadow-xl md:opacity-0 md:translate-y-3 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300 hover:bg-[#1C352D] hover:text-white"
                      >
                        <ShoppingCart size={20} className="md:w-6 md:h-6" />
                      </button>
                    </div>
                    <div className="space-y-3 px-2">
                      <h3 className="text-xl md:text-2xl font-bold text-[#3E3A36] tracking-tight">{item.name}</h3>
                      <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                        <p className="text-lg md:text-xl font-bold text-[#1C352D]">{item.price.toLocaleString()}원</p>
                        <span
                          className="text-[11px] md:text-[12px] font-bold px-3 py-1 rounded-full"
                          style={{ color: "#B38B5D", backgroundColor: "#F8F5F2" }}
                        >
                          {item.material}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            ) : (
              <div className="col-span-full py-20 text-center text-gray-400">해당 카테고리에 상품이 없습니다.</div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Pagination (모바일 최적화) */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-4 md:gap-6 mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-2 md:p-3 border border-gray-100 rounded-full disabled:opacity-20 cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full text-sm font-bold transition-all ${currentPage === i + 1 ? "bg-[#1C352D] text-white shadow-md" : "text-gray-400"}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((p) => p + 1)}
              className="p-2 md:p-3 border border-gray-100 rounded-full disabled:opacity-20 cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
