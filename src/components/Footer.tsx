import React from 'react';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-gray-400" id="contact">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">DevilMarket</h3>
            <p className="mb-4">Premium gaming products and services for Roblox, Bloxfruit, and Discord enthusiasts.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Products</a></li>
              <li><a href="#discord" className="hover:text-white transition-colors">Discord</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Products</h3>
            <ul className="space-y-2">
              <li><a href="#devil-fruits" className="hover:text-white transition-colors">Devil Fruits</a></li>
              <li><a href="#bloxfruit" className="hover:text-white transition-colors">Bloxfruit Accounts</a></li>
              <li><a href="#gamepass" className="hover:text-white transition-colors">Gamepass</a></li>
              <li><a href="#robux" className="hover:text-white transition-colors">Robux</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord Bot</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Discord SelfBot</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-indigo-500" />
                <span>Virtual World, Gaming District</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-indigo-500" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-indigo-500" />
                <span>contact@devilmarket.com</span>
              </li>
              <li>
                <a 
                  href="https://discord.gg/cGCPqERHKU" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-block px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg transition-colors mt-2"
                >
                  Join Our Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      {/* Bottom Footer */}
      <div className="border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
          <p>&copy; {new Date().getFullYear()} DevilMarket. All rights reserved.</p>
          <p className="mt-2 md:mt-0 flex items-center">
            Made with <Heart className="h-4 w-4 text-red-500 mx-1" /> for gamers
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;