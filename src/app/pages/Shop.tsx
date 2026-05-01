import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useSearchParams, Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { ShoppingCart, ChevronLeft, ChevronRight, Check, X } from "lucide-react";
import { products, categories } from "../../data/products";

export function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const { addToCart } = useCart();

  const categoryParam = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(categoryParam);
  const [currentPage, setCurrentPage] = useState(1);
  const [showToast, setShowToast] = useState(false); // 토스트 상태
  const itemsPerPage = 6;

  useEffect(() => {
    setActiveCategory(categoryParam);
    setCurrentPage(1);
  }, [categoryParam]);

  const handleCategoryClick = (id: string) => {
    setSearchParams({ category: id });
  };

  // 장바구니 담기 및 팝업 실행
  const handleQuickAdd = (item: any) => {
    addToCart({ ...item, image: item.images[0], quantity: 1 });
    setShowToast(true);
    setTimeout(() => setShowToast(false), 2500); // 2.5초 후 자동 종료
  };

  const filteredProducts =
    activeCategory === "all" ? products : products.filter((p) => p.categoryId === activeCategory);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentItems = filteredProducts.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  return (
    <div className="pt-40 pb-32 bg-white min-h-screen font-sans relative">
      {/* 🟢 세련된 장바구니 토스트 알림 */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 20, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-12 left-1/2 z-50 flex items-center gap-4 bg-[#1C352D] text-white px-6 py-4 rounded-2xl shadow-2xl min-w-[320px]"
          >
            <div className="bg-[#B38B5D] p-1 rounded-full">
              <Check size={14} className="text-white" strokeWidth={3} />
            </div>
            <div className="flex-1">
              <p className="text-[13px] font-bold">장바구니에 상품을 담았습니다.</p>
            </div>
            <Link
              to="/cart"
              className="text-[12px] text-[#B38B5D] font-bold border-b border-[#B38B5D] pb-0.5 ml-2 hover:text-white hover:border-white transition-colors"
            >
              VIEW CART
            </Link>
            <button onClick={() => setShowToast(false)} className="ml-2 text-white/30 hover:text-white cursor-pointer">
              <X size={16} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-[1300px] mx-auto px-8 w-full">
        {/* Header 섹션: 텍스트 크기 강화 */}
        <div className="text-center mb-24">
          <div className="flex flex-col items-center mb-10">
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: 60 }}
              transition={{ duration: 0.8 }}
              className="w-[1px] bg-[#1C352D]/20 mb-8"
            />
            <span className="text-[#1C352D] text-xs tracking-[0.6em] font-bold uppercase opacity-60">
              Works Archive
            </span>
          </div>
          <h1 className="text-5xl font-light text-[#3E3A36] mb-6 tracking-tight">일상의 도구</h1>
          <p className="text-lg text-gray-400 font-light tracking-tight">포커스온우드가 제안하는 원목 오브제</p>
        </div>

        {/* 카테고리 필터: 텍스트 및 간격 확대 */}
        <div className="flex justify-center mb-20">
          <div className="flex gap-12 md:gap-20 border-b border-gray-100 w-full max-w-4xl justify-center relative">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryClick(category.id)}
                className={`relative py-6 text-[15px] tracking-[0.2em] cursor-pointer transition-all duration-300 ${
                  activeCategory === category.id ? "text-[#1C352D] font-bold" : "text-gray-300 hover:text-gray-900"
                }`}
              >
                {category.label}
                {activeCategory === category.id && (
                  <motion.div
                    layoutId="activeCategoryLine"
                    className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#1C352D]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Grid Section */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24 mb-24">
          <AnimatePresence mode="popLayout">
            {currentItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
              >
                <Link to={`/shop/${item.id}`} className="group block">
                  <div className="aspect-square rounded-[40px] overflow-hidden bg-[#FBFBFB] mb-8 relative border border-gray-100 shadow-sm transition-all hover:shadow-md">
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />

                    {/* 🟢 작고 세련된 장바구니 버튼: 호버 시 색상 변화 */}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleQuickAdd(item);
                      }}
                      className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm p-3.5 rounded-full shadow-lg opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-[#1C352D] hover:text-white cursor-pointer group/cart"
                    >
                      {/* 아이콘 크기 축소 (size: 18) */}
                      <ShoppingCart size={18} className="transition-transform group-hover/cart:scale-110" />
                    </button>
                  </div>

                  {/* 상품 정보 (기존 샌드 브라운 컬러 유지) */}
                  <div className="space-y-3 px-2">
                    <h3 className="text-2xl font-bold text-[#3E3A36] tracking-tight group-hover:text-[#1C352D] transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex justify-between items-center border-t border-gray-50 pt-4">
                      <div className="flex items-baseline gap-1 text-[#1C352D]">
                        <span className="text-xl font-bold">{item.price.toLocaleString()}</span>
                        <span className="text-sm font-medium">원</span>
                      </div>
                      <span
                        className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter"
                        style={{ color: "#B38B5D", backgroundColor: "#F8F5F2" }}
                      >
                        {item.material}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        {/* Pagination: 모바일에서 버튼 크기 및 간격 최적화 */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 md:gap-6 mt-6 md:mt-10">
            <button
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
              className="p-2 md:p-3 border border-gray-100 rounded-full disabled:opacity-20 cursor-pointer"
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6 text-gray-600" />
            </button>
            <div className="flex gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i + 1}
                  onClick={() => setCurrentPage(i + 1)}
                  className={`w-10 h-10 md:w-12 md:h-12 rounded-full text-sm md:text-[15px] font-bold transition-all cursor-pointer ${
                    currentPage === i + 1 ? "bg-[#1C352D] text-white shadow-md" : "text-gray-400 hover:text-black"
                  }`}
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
              <ChevronRight size={20} className="md:w-6 md:h-6 text-gray-600" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
