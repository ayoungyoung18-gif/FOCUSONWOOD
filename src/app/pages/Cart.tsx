import { Link } from 'react-router';
import { Trash2, ShoppingBag } from 'lucide-react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useCart } from '../context/CartContext';

export function Cart() {
  const { items, removeFromCart, updateQuantity, totalPrice, totalItems } = useCart();

  if (items.length === 0) {
    return (
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingBag size={64} className="mx-auto mb-4 text-gray-300" />
          <h2 className="text-2xl mb-4">장바구니가 비어있습니다</h2>
          <p className="text-gray-600 mb-8">소품들을 구경해보세요</p>
          <Link
            to="/shop"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-lg hover:bg-gray-800 transition-colors"
          >
            쇼핑몰 보기
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl mb-8">장바구니</h1>

        <div className="space-y-4 mb-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="flex items-center space-x-4 bg-white p-4 rounded-lg border border-gray-200"
            >
              <div className="w-24 h-24 flex-shrink-0 rounded overflow-hidden">
                <ImageWithFallback
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-grow">
                <h3 className="text-lg mb-1">{item.name}</h3>
                <p className="text-gray-600">{item.price.toLocaleString()}원</p>
              </div>

              <div className="flex items-center space-x-3">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-8 text-center">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="w-8 h-8 border border-gray-300 rounded hover:bg-gray-50"
                >
                  +
                </button>
              </div>

              <div className="text-lg w-24 text-right">
                {(item.price * item.quantity).toLocaleString()}원
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="p-2 text-gray-400 hover:text-red-600 transition-colors"
                aria-label="삭제"
              >
                <Trash2 size={20} />
              </button>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-gray-50 p-6 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">총 상품 개수</span>
            <span>{totalItems}개</span>
          </div>
          <div className="flex justify-between items-center text-xl border-t border-gray-200 pt-4">
            <span>총 결제 금액</span>
            <span className="text-2xl">{totalPrice.toLocaleString()}원</span>
          </div>
        </div>

        <button className="w-full bg-gray-900 text-white py-4 rounded-lg mt-6 hover:bg-gray-800 transition-colors text-lg">
          구매하기
        </button>
      </div>
    </div>
  );
}
