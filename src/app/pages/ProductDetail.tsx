import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Share2, ShoppingCart, Check, ArrowLeft, Minus, Plus, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../../data/products";

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const product = products.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = useState("");

  useEffect(() => {
    if (product) setMainImage(product.images[0]);
  }, [product]);

  if (!product) return <div className="pt-40 text-center">상품 정보를 찾을 수 없습니다.</div>;

  const handleAddToCart = () => {
    addToCart({ ...product, image: mainImage, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    /* h-screen을 제거하고 min-h-screen을 사용하여 모바일에서 내용이 길어져도 다 보이게 합니다 */
    <div className="min-h-screen bg-[#FDFDFD] pt-20 md:pt-28 pb-10 font-sans text-[#3E3A36]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* 상단 네비게이션: 모바일에서 크기 축소 */}
        <div className="flex justify-between items-center mb-6 md:mb-10">
          <div className="flex items-center gap-3 md:gap-5">
            <Link to="/shop" className="group flex items-center gap-1.5 text-gray-400 hover:text-black transition-all">
              <ArrowLeft size={16} />
              <span className="text-[12px] md:text-[13px] font-medium tracking-wider uppercase">전체보기</span>
            </Link>
            <span className="w-[1px] h-3 bg-gray-200"></span>
            <Link to={`/shop?category=${product.categoryId}`} className="flex items-center gap-1">
              <span className="text-[13px] md:text-[14px] font-bold text-gray-900">{product.categoryLabel}</span>
            </Link>
          </div>
          <div className="flex gap-1">
            <button onClick={() => setIsWishlist(!isWishlist)} className="p-2 cursor-pointer">
              <Heart size={20} className={isWishlist ? "fill-red-500 text-red-500" : "text-gray-300"} />
            </button>
            <button className="p-2 text-gray-300">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* 왼쪽: 이미지 섹션 - 모바일에서 높이 제한을 강화하여 아래 글자가 보이게 함 */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="aspect-square md:aspect-[4/4.5] w-full max-h-[40vh] md:max-h-[60vh] rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#F5F5F5] border border-gray-50 shadow-sm">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {/* 썸네일 리스트 */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-14 h-14 md:w-16 md:h-20 rounded-xl flex-shrink-0 overflow-hidden border-2 transition-all ${
                    mainImage === img ? "border-[#3E3A36]" : "border-transparent opacity-50"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* 오른쪽: 정보 섹션 - 여기서부터가 가격, 재료 등입니다 */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="mb-6 md:mb-10">
              <span className="text-[#C8A97E] font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">
                Premium Woodcraft
              </span>
              <h1 className="text-2xl md:text-4xl font-bold text-[#3E3A36] mb-3 md:mb-5 tracking-tight">
                {product.name}
              </h1>
              <div className="flex items-baseline gap-1">
                <span className="text-2xl md:text-4xl font-bold text-[#3E3A36]">{product.price.toLocaleString()}</span>
                <span className="text-sm md:text-lg font-medium text-gray-400 ml-1">원</span>
              </div>
            </div>

            {/* 재료 및 크기 정보: 가독성 강화 */}
            <div className="space-y-4 py-6 border-y border-gray-100 mb-6 md:mb-10">
              <div className="flex items-center text-[13px] md:text-[14px]">
                <span className="w-16 md:w-24 text-gray-400 font-medium">재료</span>
                <span className="font-semibold text-[#3E3A36]">{product.material}</span>
              </div>
              <div className="flex items-center text-[13px] md:text-[14px]">
                <span className="w-16 md:w-24 text-gray-400 font-medium">크기</span>
                <span className="font-semibold text-[#3E3A36]">{product.size}</span>
              </div>
              <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-500 font-light pt-4 border-t border-gray-50 mt-4">
                {product.description}
              </p>
            </div>

            {/* 수량 및 구매 버튼 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-6 py-3.5 bg-[#F9F9F9] rounded-2xl">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Qty</span>
                <div className="flex items-center gap-6">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1">
                    <Minus size={16} />
                  </button>
                  <span className="text-base font-bold w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-full font-bold text-[15px] md:text-[17px] transition-all cursor-pointer ${
                    added ? "bg-[#3E3A36] text-white" : "bg-[#1C352D] text-[#F9F6F3]"
                  }`}
                >
                  {added ? "장바구니에 담겼습니다" : "장바구니 담기"}
                </button>
                <button className="w-full py-4 rounded-full font-bold text-[15px] md:text-[17px] border border-gray-200 text-[#3E3A36] hover:bg-gray-50 transition-all">
                  바로 구매하기
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
