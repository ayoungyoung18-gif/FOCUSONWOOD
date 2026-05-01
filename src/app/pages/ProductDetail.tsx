import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Heart, Share2, ShoppingCart, Check, ArrowLeft, Minus, Plus } from "lucide-react";
import { useCart } from "../context/CartContext";
import bodegi2 from "../../assets/images/accbodegi2.jpg";
import bodegi1 from "../../assets/images/accbodegi1.jpg";
import bodegi3 from "../../assets/images/accbodegi3.jpg";
import bodegi4 from "../../assets/images/accbodegi4.jpg";
import bodegi5 from "../../assets/images/accbodegi5.jpg";

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  const product = {
    id: Number(id),
    name: "보드기 (나무 로봇 키링)",
    price: 50000,
    category: "Object / Accessory",
    material: "월넛, 오크, 메이플",
    size: "40 x 25 x 20 (mm)",
    images: [
      bodegi2, // 첫 번째 메인 이미지
      bodegi1,
      bodegi3,
      bodegi4,
      bodegi5,
    ],
    description:
      "정교한 목공 기술로 탄생한 포커스온우드의 마스코트입니다. 일상 속에서 나만의 따뜻한 나무 친구를 만나보세요.",
  };

  const [mainImage, setMainImage] = useState(product.images[0]);

  const handleAddToCart = () => {
    addToCart({ ...product, image: mainImage, quantity });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="h-screen overflow-hidden bg-[#FDFDFD] flex flex-col pt-20 font-sans">
      <div className="flex-1 max-w-[1400px] mx-auto px-8 w-full flex flex-col justify-center pb-10">
        {/* 상단 네비게이션 */}
        <div className="flex justify-between items-center mb-6">
          <Link
            to="/shop"
            className="group flex items-center gap-2 text-gray-400 hover:text-black transition-colors cursor-pointer"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-medium tracking-tight uppercase">전체보기</span>
          </Link>
          <div className="flex gap-1">
            <button
              onClick={() => setIsWishlist(!isWishlist)}
              className="p-2 cursor-pointer transition-transform active:scale-125"
            >
              <Heart
                size={22}
                className={`transition-all duration-300 ${
                  isWishlist ? "fill-red-500 text-red-500 scale-110" : "text-gray-300 hover:text-gray-400"
                }`}
              />
            </button>
            <button className="p-2 cursor-pointer text-gray-300 hover:text-black transition-colors">
              <Share2 size={18} />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-20 items-center">
          {/* 이미지 갤러리 */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="aspect-[4/4.5] max-h-[62vh] rounded-[40px] overflow-hidden bg-[#F5F5F5] shadow-[0_10px_30px_rgba(0,0,0,0.02)]">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex gap-3 justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-14 h-16 rounded-xl overflow-hidden transition-all cursor-pointer border-2 ${
                    mainImage === img ? "border-[#3E3A36] scale-105" : "border-transparent opacity-40 hover:opacity-100"
                  }`}
                >
                  <img src={img} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* 제품 정보 섹션 */}
          <div className="lg:col-span-5 flex flex-col h-full py-2">
            <div className="mb-6">
              <span className="text-[#C8A97E] font-bold text-[10px] tracking-[0.2em] uppercase mb-2 block">
                Premium Woodcraft
              </span>
              <h1 className="text-4xl font-bold text-[#3E3A36] mb-3 tracking-tight">{product.name}</h1>
              <div className="flex items-baseline gap-1 text-[#3E3A36]">
                <span className="text-3xl font-bold tracking-tighter">{product.price.toLocaleString()}</span>
                <span className="text-base font-medium opacity-30">원</span>
              </div>
            </div>

            <div className="space-y-4 py-6 border-y border-gray-100 mb-6">
              <div className="flex items-center text-[13px]">
                <span className="w-24 text-gray-400 font-medium uppercase tracking-tighter">재료</span>
                <span className="text-[#3E3A36] font-semibold">{product.material}</span>
              </div>
              <div className="flex items-center text-[13px]">
                <span className="w-24 text-gray-400 font-medium uppercase tracking-tighter">크기</span>
                <span className="text-[#3E3A36] font-semibold">{product.size}</span>
              </div>
              <p className="text-[15px] leading-relaxed text-gray-500 font-light pt-4">{product.description}</p>
            </div>

            {/* 수량 및 버튼 액션 */}
            <div className="space-y-3 mt-auto">
              <div className="flex items-center justify-between px-6 py-4 bg-[#F9F9F9] rounded-2xl">
                <span className="text-[16px] font-bold text-gray-400 uppercase tracking-widest">수량</span>
                <div className="flex items-center gap-6">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="cursor-pointer text-gray-300 hover:text-black transition-colors"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="text-base font-bold text-[#3E3A36] w-4 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="cursor-pointer text-gray-300 hover:text-black transition-colors"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-[20px] font-bold text-[16px] tracking-tight transition-all cursor-pointer ${
                    added ? "bg-[#3E3A36] text-white" : "bg-[#1C352D] text-[#F9F6F3] hover:bg-[#2A4A3F]"
                  }`}
                >
                  {added ? "장바구니에 담겼습니다" : "장바구니"}
                </button>
                <button className="w-full py-4 rounded-[20px] font-bold text-[16px] tracking-tight border border-gray-200 text-[#3E3A36] hover:bg-gray-50 transition-all cursor-pointer">
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
