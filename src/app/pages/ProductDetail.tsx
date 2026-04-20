import { useParams, Link } from 'react-router';
import { ArrowLeft, ShoppingCart, Check } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useCart } from '../context/CartContext';

export function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const { addToCart } = useCart();

  // Mock product data - in real app, this would fetch from API
  const product = {
    id: Number(id),
    name: '원목 도마 (대)',
    price: 45000,
    material: '참나무',
    size: '40cm x 25cm x 2cm',
    image: 'https://images.unsplash.com/photo-1768039049578-8b3d5cc4e8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjdXR0aW5nJTIwYm9hcmQlMjBraXRjaGVuJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzc2MzAyMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description:
      '고급 참나무로 제작한 도마입니다. 항균 효과가 뛰어나며 내구성이 좋아 오래 사용하실 수 있습니다. 자연스러운 나무결이 주방을 더욱 따뜻하게 만들어줍니다.',
    features: [
      '100% 천연 참나무 원목',
      '친환경 오일 마감',
      '항균 효과',
      '손잡이 홈 디자인',
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
        <Link
          to="/shop"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft size={20} />
          <span>쇼핑몰로 돌아가기</span>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="aspect-square rounded-lg overflow-hidden">
            <ImageWithFallback
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
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

            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

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
              className={`w-full flex items-center justify-center space-x-2 py-4 rounded-lg transition-colors ${
                added
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-900 text-white hover:bg-gray-800'
              }`}
            >
              {added ? (
                <>
                  <Check size={20} />
                  <span>장바구니에 담았습니다</span>
                </>
              ) : (
                <>
                  <ShoppingCart size={20} />
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
