import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; // 🟢 useNavigate 추가
import { Heart, Share2, ArrowLeft, Minus, Plus, ChevronRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import { products } from "../../data/products";

export function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate(); // 🟢 페이지 이동 기능을 선언합니다.

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [isWishlist, setIsWishlist] = useState(false);

  // URL 파라미터로 넘어온 ID와 일치하는 상품 데이터를 찾습니다.
  const product = products.find((p) => p.id === Number(id));
  const [mainImage, setMainImage] = useState("");

  // 상품 데이터를 찾으면 첫 번째 이미지를 메인 이미지로 설정합니다.
  useEffect(() => {
    if (product && product.images && product.images.length > 0) {
      setMainImage(product.images[0]);
    }
  }, [product]);

  if (!product) {
    return <div className="pt-40 text-center text-gray-500">상품 정보를 찾을 수 없습니다.</div>;
  }

  // [장바구니 담기] 처리 함수
  const handleAddToCart = () => {
    // CartContext 규격에 맞게 상품 객체를 조립하여 전달합니다.
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: mainImage,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  // 🟢 [바로 구매하기] 처리 함수
  const handleDirectPurchase = () => {
    // 1. 현재 상세 페이지에서 선택한 옵션 그대로 장바구니에 데이터를 먼저 밀어 넣습니다.
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: mainImage,
    });
    // 2. 주입과 동시에 토스페이먼츠 결제 기능이 들어있는 주문서 페이지(/checkout)로 유저를 즉시 이동시킵니다.
    navigate("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#FDFDFD] pt-20 md:pt-28 pb-10 font-sans text-[#3E3A36]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* 1. 상단 네비게이션 바 */}
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

        {/* 2. 메인 스펙 (이미지 Grid 및 정보 상세화면) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">
          {/* 왼쪽 열: 이미지 갤러리 섹션 */}
          <div className="lg:col-span-7 flex flex-col gap-4">
            <div className="aspect-square md:aspect-[4/4.5] w-full max-h-[40vh] md:max-h-[60vh] rounded-[24px] md:rounded-[40px] overflow-hidden bg-[#F5F5F5] border border-gray-50 shadow-sm">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>

            {/* 하단 썸네일 리스트 */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar justify-start md:justify-center">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setMainImage(img)}
                  className={`w-14 h-14 md:w-16 md:h-20 rounded-xl flex-shrink-0 overflow-hidden border-2 transition-all cursor-pointer ${
                    mainImage === img ? "border-[#3E3A36]" : "border-transparent opacity-50"
                  }`}
                >
                  <img src={img} alt={`썸네일-${index}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* 오른쪽 열: 상품 디테일 정보 고지 및 구매 제어창 */}
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

            {/* 재료 및 크기 정보 영역 */}
            <div className="space-y-4 py-6 border-y border-gray-100 mb-6 md:mb-10">
              <div className="flex items-center text-[13px] md:text-[14px]">
                <span className="w-16 md:w-24 text-gray-400 font-medium">재료</span>
                <span className="font-semibold text-[#3E3A36]">{product.material}</span>
              </div>
              <div className="flex items-center text-[13px] md:text-[14px]">
                <span className="w-16 md:w-24 text-gray-400 font-medium">크기</span>
                <span className="font-semibold text-[#3E3A36]">{product.size}</span>
              </div>
              <p className="text-[14px] md:text-[16px] leading-relaxed text-gray-500 font-light pt-4 border-t border-gray-50 mt-4 whitespace-pre-line">
                {product.description}
              </p>
            </div>

            {/* 수량 카운터 및 최종 제출 버튼 트리 세팅 */}
            <div className="space-y-4">
              <div className="flex items-center justify-between px-6 py-3.5 bg-[#F9F9F9] rounded-2xl">
                <span className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Qty</span>
                <div className="flex items-center gap-6">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="p-1 cursor-pointer">
                    <Minus size={16} />
                  </button>
                  <span className="text-base font-bold w-4 text-center">{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)} className="p-1 cursor-pointer">
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* 액션 버튼 그룹 */}
              <div className="flex flex-col gap-2">
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 rounded-full font-bold text-[15px] md:text-[17px] transition-all cursor-pointer ${
                    added ? "bg-[#3E3A36] text-white" : "bg-[#1C352D] text-[#F9F6F3]"
                  }`}
                >
                  {added ? "장바구니에 담겼습니다" : "장바구니 담기"}
                </button>

                {/* 🟢 [바로 구매하기] 버튼에 실시간 결제 핸들러 함수를 정밀 바인딩합니다. */}
                <button
                  onClick={handleDirectPurchase}
                  className="w-full py-4 rounded-full font-bold text-[15px] md:text-[17px] border border-gray-200 text-[#3E3A36] hover:bg-gray-50 transition-all cursor-pointer flex items-center justify-center"
                >
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
