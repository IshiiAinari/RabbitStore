import React from 'react';
import { MessageSquare, Users, Bot, ExternalLink } from 'lucide-react';

const Discord: React.FC = () => {
  return (
    <section id="discord" className="py-16 relative overflow-hidden">
      {/* Background with animated particles */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 to-gray-900"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-white opacity-30 animate-float-particles"
            style={{ 
              width: `${Math.random() * 6 + 2}px`, 
              height: `${Math.random() * 6 + 2}px`,
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Discord Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our <span className="text-indigo-400">Discord</span> Community
            </h2>
            <p className="text-gray-300 mb-8">
              Connect with other gamers, get exclusive deals, and stay updated with the latest Devil Fruits and Bloxfruit content!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {/* Discord Features */}
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-start">
                <div className="bg-indigo-500/20 p-2 rounded-lg mr-4">
                  <MessageSquare className="text-indigo-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Community Chat</h3>
                  <p className="text-gray-400 text-sm">Connect with like-minded gamers</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-start">
                <div className="bg-purple-500/20 p-2 rounded-lg mr-4">
                  <Users className="text-purple-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Exclusive Deals</h3>
                  <p className="text-gray-400 text-sm">Get special offers and discounts</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-start">
                <div className="bg-blue-500/20 p-2 rounded-lg mr-4">
                  <Bot className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">Discord Bot</h3>
                  <p className="text-gray-400 text-sm">Powerful gaming assistance</p>
                </div>
              </div>
              
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 flex items-start">
                <div className="bg-pink-500/20 p-2 rounded-lg mr-4">
                  <ExternalLink className="text-pink-400 h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-white font-semibold">SelfBot Support</h3>
                  <p className="text-gray-400 text-sm">Advanced Discord automation</p>
                </div>
              </div>
            </div>
            
            <a 
              href="https://discord.gg/cGCPqERHKU" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-block px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-transform transform hover:scale-105"
            >
              Join Our Discord
            </a>
          </div>
          
          {/* Discord Server Preview */}
          <div className="md:w-1/2 mt-10 md:mt-0">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
              {/* Server Header */}
              <div className="bg-gray-900 p-4 border-b border-gray-700">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center mr-3">
                    <span className="text-white font-bold">DM</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">DevilMarket</h3>
                    <p className="text-green-500 text-xs">Online</p>
                  </div>
                </div>
              </div>
              
              {/* Server Content */}
              <div className="p-4">
                <div className="flex flex-col space-y-4">
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <p className="text-white"><span className="font-semibold text-indigo-400">System:</span> Welcome to DevilMarket Discord Server!</p>
                  </div>
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <p className="text-white"><span className="font-semibold text-purple-400">Mod:</span> Check out our latest Devil Fruit collection!</p>
                  </div>
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <p className="text-white"><span className="font-semibold text-blue-400">Bot:</span> Use !shop to browse available items</p>
                  </div>
                  <div className="bg-gray-700/50 p-3 rounded-lg">
                    <p className="text-white"><span className="font-semibold text-green-400">User:</span> The Bloxfruit accounts are amazing!</p>
                  </div>
                </div>
              </div>
              
              {/* Server Footer */}
              <div className="bg-gray-900 p-4 border-t border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">3,742 Members Online</span>
                  <span className="text-gray-400 text-sm">Join Now →</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Discord;