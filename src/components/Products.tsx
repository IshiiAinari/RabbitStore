import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { productData } from '../data/productData';

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'devil-fruits', name: 'Devil Fruits' },
    { id: 'bloxfruit', name: 'Bloxfruit Accounts' },
    { id: 'gamepass', name: 'Gamepass' },
    { id: 'robux', name: 'Robux' }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? productData 
    : productData.filter(product => product.category === activeCategory);
  
  return (
    <section className="py-16 bg-gray-900" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Premium Products</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Browse our extensive collection of premium gaming items and services
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-indigo-600 text-white'
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;