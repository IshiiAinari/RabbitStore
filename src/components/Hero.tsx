import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background with animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900 to-gray-900 opacity-80"></div>
      
      {/* Floating elements in background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="animate-float absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-purple-500 opacity-20 blur-xl"></div>
        <div className="animate-float-delayed absolute bottom-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-20 blur-xl"></div>
        <div className="animate-float-slow absolute top-1/2 right-1/3 w-20 h-20 rounded-full bg-indigo-500 opacity-20 blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Trải nghiệm tuyệt vời tại <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500">Vườn Thỏ</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Chuyên cung cấp các tài khoản game và các dịch vụ premium giá rẻ!
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-medium rounded-lg transition-transform transform hover:scale-105 flex items-center justify-center">
                Mua Ngay <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-purple-500 text-white font-medium rounded-lg hover:bg-purple-500/20 transition-colors">
              <a href="https://discord.gg/cGCPqERHKU" 
                 target="_blank" 
                 rel="noopener noreferrer"
                >
              Tham Gia Discord
              </a>       
              </button>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full opacity-20 animate-pulse blur-xl"></div>
              <img 
                src="https://images.pexels.com/photos/7915477/pexels-photo-7915477.jpeg" 
                alt="Gaming Merchandise" 
                className="absolute inset-0 w-full h-full object-cover rounded-xl z-10"
              />
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-pink-600 to-purple-600 rounded-lg px-4 py-2 z-20 shadow-xl">
                <span className="text-white font-bold">Có hạn!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;