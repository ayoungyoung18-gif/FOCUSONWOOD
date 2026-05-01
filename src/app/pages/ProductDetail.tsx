import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Share2, ShoppingCart, Check, ArrowLeft, Minus, Plus, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../../data/products"; // 🟢 공통 데이터 임포트

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  // 🟢 URL ID에 맞는 상품 데이터 찾기
  const product = products.find((p) => p.id === Number(id));

  // 🟢 초기 이미지 설정
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) return <div className="pt-40 text-center">상품 정보를 찾을 수 없습니다.</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, image: mainImage, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="h-screen overflow-hidden bg-[#FDFDFD] flex flex-col pt-24 font-sans text-[#3E3A36]">
      <div className="flex-1 max-w-[1400px] mx-auto px-8 w-full flex flex-col justify-center pb-12">
        {/* 상단 네비게이션 */}
        <div className="flex justify-between items-center mb-10">
          <div className="flex items-center gap-5">
            <Link
              to="/shop"
              className="group flex items-center gap-2 text-gray-400 hover:text-black transition-all cursor-pointer"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-[13px] font-medium tracking-wider uppercase">전체보기</span>
            </Link>
            <span className="w-[1px] h-3 bg-gray-200"></span>
            <Link to={`/shop?category=${product.categoryId}`} className="group flex items-center gap-1 cursor-pointer">
              <span className="text-[14px] font-bold text-gray-900 tracking-tight group-hover:text-[#1C352D]">
                {product.categoryLabel}
              </span>
              <ChevronRight size={14} className="text-gray-300" />
            </Link>
          </div>
          <div className="flex gap-1">
            <button
              onClick={() => setIsWishlist(!isWishlist)}
              className="p-2 cursor-pointer transition-transform active:scale-125"
            >
              <Heart
                size={22}
                className={`transition-all duration-300 ${isWishlist ? "fill-red-500 text-red-500 scale-110" : "text-gray-300 hover:text-gray-500"}`}
              />
            </button>
            <button className="p-2 cursor-pointer text-gray-300 hover:text-gray-500">
              <Share2 size={20} />
            </button>
          </div>
        </div>

        {/* 제품 그리드 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="aspect-[4/4.5] max-h-[60vh] rounded-[40px] overflow-hidden bg-[#F5F5F5] shadow-[0_10px_40px_rgba(0,0,0,0.02)] border border-gray-50">
              <img
                src={mainImage}
                alt={product.name}
                className="w-full h-full object-cover transition-opacity duration-500"
              />
            </div>
            <div className="flex gap-4 justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-14 h-18 rounded-xl overflow-hidden transition-all cursor-pointer border-2 ${mainImage === img ? "border-[#3E3A36] scale-105" : "border-transparent opacity-40 hover:opacity-100"}`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col h-full py-4">
            <div className="mb-10">
              <span className="text-[#C8A97E] font-bold text-[11px] tracking-[0.2em] uppercase mb-3 block">
                Premium Woodcraft
              </span>
              <h1 className="text-4xl font-bold text-[#3E3A36] mb-5 tracking-tight leading-tight">{product.name}</h1>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tighter text-[#3E3A36]">
                  {product.price.toLocaleString()}
                </span>
                <span className="text-lg font-medium text-gray-300 ml-1">원</span>
              </div>
            </div>

            <div className="space-y-5 py-8 border-y border-gray-100 mb-10">
              <div className="flex items-center text-[14px]">
                <span className="w-24 text-gray-400 font-medium">재료</span>
                <span className="text-[#3E3A36] font-semibold">{product.material}</span>
              </div>
              <div className="flex items-center text-[14px]">
                <span className="w-24 text-gray-400 font-medium">크기</span>
                <span className="text-[#3E3A36] font-semibold">{product.size}</span>
              </div>
              <p className="text-[16px] leading-relaxed text-gray-500 font-light pt-6">{product.description}</p>
            </div>

            <div className="space-y-4 mt-auto">
              <div className="flex items-center justify-between px-8 py-5 bg-[#F9F9F9] rounded-2xl">
                <span className="text-[12px] font-bold text-gray-400 uppercase tracking-widest">수량</span>
                <div className="flex items-center gap-8">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="cursor-pointer text-gray-300 hover:text-black"
                  >
                    <Minus size={18} />
                  </button>
                  <span className="text-lg font-bold text-[#3E3A36] w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="cursor-pointer text-gray-300 hover:text-black"
                  >
                    <Plus size={18} />
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-5 rounded-[24px] font-bold text-[17px] transition-all cursor-pointer shadow-sm ${added ? "bg-[#3E3A36] text-white" : "bg-[#1C352D] text-[#F9F6F3] hover:bg-[#2A4A3F]"}`}
                >
                  {added ? (
                    <span className="flex items-center justify-center gap-2">
                      <Check size={20} /> 담기 완료
                    </span>
                  ) : (
                    "장바구니 담기"
                  )}
                </button>
                <button className="w-full py-5 rounded-[24px] font-bold text-[17px] border border-gray-200 text-[#3E3A36] hover:bg-gray-50 transition-all cursor-pointer">
                  구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
