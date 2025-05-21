import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
}

const formatPrice = (price: number) => {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price);
};

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-purple-500/20 hover:translate-y-[-5px] animate-slide-in">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-48 object-cover transform transition-transform duration-700 hover:scale-110"
        />
        {product.discount > 0 && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-md text-xs font-bold animate-pulse">
            {product.discount}% OFF
          </div>
        )}
      </div>
      
      {/* Product Content */}
      <div className="p-4">
        {/* Category Badge */}
        <div className="inline-block bg-indigo-900/50 text-indigo-300 text-xs font-semibold px-2 py-1 rounded-full mb-2 animate-glow">
          {product.categoryName}
        </div>
        
        {/* Product Name */}
        <h3 className="text-white font-semibold text-lg mb-1 hover:text-indigo-400 transition-colors">
          {product.name}
        </h3>
        
        {/* Product Rating */}
        <div className="flex items-center mb-2">
          {[...Array(5)].map((_, i) => (
            <Star 
              key={i} 
              className={`w-4 h-4 transition-colors duration-300 ${
                i < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'
              }`} 
            />
          ))}
          <span className="text-gray-400 text-xs ml-1">({product.reviews})</span>
        </div>
        
        {/* Product Description */}
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{product.description}</p>
        
        {/* Price and Add to Cart */}
        <div className="flex justify-between items-center">
          <div>
            {product.discount > 0 && (
              <span className="text-gray-500 text-sm line-through mr-2">
                {formatPrice(product.originalPrice)}
              </span>
            )}
            <span className="text-white font-bold">{formatPrice(product.price)}</span>
          </div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full transition-all duration-300 transform hover:scale-110 hover:rotate-12">
            <ShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;