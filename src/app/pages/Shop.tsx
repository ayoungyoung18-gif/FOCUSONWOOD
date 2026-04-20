import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { useCart } from '../context/CartContext';
import { ShoppingCart } from 'lucide-react';

export function Shop() {
  const [activeCategory, setActiveCategory] = useState('all');
  const { addToCart } = useCart();

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'kitchen', label: '주방용품' },
    { id: 'desk', label: '데스크 소품' },
    { id: 'decor', label: '인테리어' },
  ];

  const products = [
    {
      id: 1,
      name: '원목 도마 (대)',
      category: 'kitchen',
      price: 45000,
      image: 'https://images.unsplash.com/photo-1768039049578-8b3d5cc4e8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjdXR0aW5nJTIwYm9hcmQlMjBraXRjaGVuJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzc2MzAyMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '참나무',
    },
    {
      id: 2,
      name: '우드 트레이',
      category: 'desk',
      price: 32000,
      image: 'https://images.unsplash.com/photo-1656075992106-310ff318a512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHdvb2RlbiUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzYzMDIwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '월넛',
    },
    {
      id: 3,
      name: '원목 선반',
      category: 'decor',
      price: 68000,
      image: 'https://images.unsplash.com/photo-1760888331042-e9f4a447fb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzYzMDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '애쉬',
    },
    {
      id: 4,
      name: '나무 수저 세트',
      category: 'kitchen',
      price: 18000,
      image: 'https://images.unsplash.com/photo-1768039049578-8b3d5cc4e8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBjdXR0aW5nJTIwYm9hcmQlMjBraXRjaGVuJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzc2MzAyMDMwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '티크',
    },
    {
      id: 5,
      name: '펜홀더',
      category: 'desk',
      price: 24000,
      image: 'https://images.unsplash.com/photo-1656075992106-310ff318a512?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kbWFkZSUyMHdvb2RlbiUyMHByb2R1Y3RzJTIwZGlzcGxheXxlbnwxfHx8fDE3NzYzMDIwMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '참나무',
    },
    {
      id: 6,
      name: '벽걸이 후크',
      category: 'decor',
      price: 15000,
      image: 'https://images.unsplash.com/photo-1760888331042-e9f4a447fb2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b29kZW4lMjBob21lJTIwZGVjb3IlMjBhY2Nlc3Nvcmllc3xlbnwxfHx8fDE3NzYzMDE1NTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      material: '월넛',
    },
  ];

  const filteredProducts =
    activeCategory === 'all'
      ? products
      : products.filter((product) => product.category === activeCategory);

  const handleAddToCart = (product: typeof products[0]) => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
    });
  };

  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl mb-4">소품 쇼핑몰</h1>
          <p className="text-xl text-gray-600">
            일상을 더욱 특별하게 만드는 원목 소품들
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="group"
            >
              <Link to={`/shop/${product.id}`}>
                <div className="relative overflow-hidden rounded-lg mb-4 aspect-square">
                  <ImageWithFallback
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <h3 className="text-lg mb-1">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.material}</p>
                <p className="text-xl mb-3">{product.price.toLocaleString()}원</p>
              </Link>
              <button
                onClick={() => handleAddToCart(product)}
                className="w-full flex items-center justify-center space-x-2 bg-gray-900 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                <ShoppingCart size={18} />
                <span>장바구니 담기</span>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
