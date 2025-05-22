import React from 'react';
import { ArrowRight, Clock } from 'lucide-react';
import { featuredProducts } from '../data/productData';

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="animate-slide-in">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Nổi bật</h2>
            <p className="text-gray-400">Các sản phẩm có lượt mua nhiều nhất</p>
          </div>
          <a href="#products" className="mt-4 md:mt-0 flex items-center text-indigo-400 hover:text-indigo-300 transition-all duration-300 transform hover:translate-x-2">
            Xem tất cả <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
        
        {/* Featured Products */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProducts.map((product, index) => (
            <div 
              key={product.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-indigo-500/50 transition-all duration-500 animate-slide-in"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-48 object-cover transform transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-white font-bold text-xl">{product.name}</h3>
                </div>
              </div>
              
              {/* Product Content */}
              <div className="p-4">
                <p className="text-gray-300 mb-4">{product.description}</p>
                
                {/* Price and timer */}
                <div className="flex justify-between items-center mb-4">
                  <div>
                    <span className="text-gray-400 text-sm line-through">
                      {formatPrice(product.originalPrice)}
                    </span>
                    <span className="text-white font-bold text-xl ml-2">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <div className="flex items-center text-yellow-500 text-sm animate-pulse">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>Có hạn</span>
                  </div>
                </div>
                
                <button className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-glow">
                  <a href="https://discord.gg/WffnP4sQ4K" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     className="flex items-center justify-center"
                  >
                    Tham gia ngay
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;