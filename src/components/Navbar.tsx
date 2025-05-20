import React, { useState } from 'react';
import { Menu, X, ShoppingCart, ChevronDown } from 'lucide-react';
import { Link } from './ui/Link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-gray-900 to-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-bold text-xl">DevilMarket</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link href="#home">Home</Link>
              
              {/* Products Dropdown */}
              <div className="relative">
                <button 
                  className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex items-center"
                  onClick={toggleProducts}
                >
                  Products <ChevronDown className="ml-1 w-4 h-4" />
                </button>
                
                {isProductsOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gray-800 ring-1 ring-black ring-opacity-5 py-1">
                    <Link href="#devil-fruits" dropdown>Devil Fruits</Link>
                    <Link href="#bloxfruit" dropdown>Bloxfruit Accounts</Link>
                    <Link href="#gamepass" dropdown>Gamepass</Link>
                    <Link href="#robux" dropdown>Robux</Link>
                  </div>
                )}
              </div>
              
              <Link href="#discord">Discord</Link>
              <Link href="#testimonials">Reviews</Link>
              <Link href="#contact">Contact</Link>
            </div>
          </div>

          {/* Cart Icon */}
          <div className="flex items-center">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-2 rounded-full mr-2">
              <ShoppingCart className="h-5 w-5" />
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {isOpen ? (
                  <X className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <Menu className="block h-6 w-6" aria-hidden="true" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="#home" mobile>Home</Link>
            <Link href="#devil-fruits" mobile>Devil Fruits</Link>
            <Link href="#bloxfruit" mobile>Bloxfruit Accounts</Link>
            <Link href="#gamepass" mobile>Gamepass</Link>
            <Link href="#robux" mobile>Robux</Link>
            <Link href="#discord" mobile>Discord</Link>
            <Link href="#testimonials" mobile>Reviews</Link>
            <Link href="#contact" mobile>Contact</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;