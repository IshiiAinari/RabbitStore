import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FeaturedProducts from './components/FeaturedProducts';
import Products from './components/Products';
import Discord from './components/Discord';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Products />
      <Discord />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;