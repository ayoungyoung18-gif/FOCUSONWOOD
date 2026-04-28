import { useParams, Link } from "react-router";
import { ArrowLeft, ShoppingCart, Check } from "lucide-react";
import { useState } from "react";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { useCart } from "../context/CartContext";

export function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  // Mock product data - in real app, this would fetch from API
  const product = {
    id: Number(id),
    name: "보드기(나무로봇키링)",
    price: 50000,
    material: "월넛 / 오크 / 메이플 (천연 원목)",
    size: "약 40mm x 25mm x 20mm (수작업 특성상 미세 차이 발생)",
    image: "/images/accessories.jpg",
    description:
      "포커스온우드의 마스코트 '보드기'는 정밀한 목공 기술과 위트 있는 디자인이 결합된 핸드메이드 로봇 키링입니다. 각기 다른 수종의 나무를 섬세하게 결합하여 제작되었으며, 시간이 흐를수록 손때가 묻어 깊어지는 원목 특유의 질감을 일상 속에서 즐기실 수 있습니다. 가방이나 차 키에 감성을 더해주는 특별한 오브제가 되어줄 것입니다.",
    features: [
      "취향에 따라 선택 가능한 프리미엄 원목 (월넛/메이플/오크)",
      "장인의 정교한 조립으로 완성된 입체적인 로봇 디자인",
      "친환경 천연 오일 마감으로 인체에 무해하며 부드러운 촉감",
      "내구성이 뛰어난 프리미엄 황동 키링 고리 사용",
    ],
  };

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link to="/shop" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8">
          <ArrowLeft size={20} />
          <span>쇼핑몰로 돌아가기</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <ImageWithFallback src={product.image} alt={product.name} className="w-full h-full object-cover" />
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-4xl mb-4">{product.name}</h1>
            <p className="text-3xl mb-6">{product.price.toLocaleString()}원</p>

            <div className="border-t border-b border-gray-200 py-6 mb-6 space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">소재</span>
                <span>{product.material}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">사이즈</span>
                <span>{product.size}</span>
              </div>
            </div>

            <p className="text-gray-700 leading-relaxed mb-6">{product.description}</p>

            <div className="mb-8">
              <h3 className="text-lg mb-3">제품 특징</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check size={18} className="text-green-600" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm mb-2">수량</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-gray-300 rounded hover:bg-gray-50"
                >
                  -
                </button>
                <span className="text-lg w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-gray-300 rounded hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              style={{ cursor: "pointer" }} // 🟢 강제로 손가락 커서 적용
              className={`w-full flex items-center justify-center space-x-2 py-4 rounded-lg transition-all duration-300 cursor-pointe ${
                added ? "bg-[#3E3A36] text-[#F9F6F3] shadow-inner" : "bg-[#1C352D] text-[#F9F6F3] hover:bg-[#2A4A3F]"
              }`}
            >
              {added ? (
                <>
                  <Check size={18} />
                  <span>장바구니에 담았습니다</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  <span>장바구니 담기</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
