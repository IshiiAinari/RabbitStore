import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Bloxfruit Player',
    content: 'The Devil Fruits I purchased were amazing! Fast delivery and excellent customer service. Would definitely buy from here again!',
    avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5
  },
  {
    id: 2,
    name: 'Samantha Lee',
    role: 'Roblox Enthusiast',
    content: 'Great selection of Bloxfruit accounts at reasonable prices. The Discord community is also very helpful and friendly.',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 4
  },
  {
    id: 3,
    name: 'Michael Chen',
    role: 'Discord User',
    content: 'The Discord Bot service is fantastic! Reliable uptime and excellent features. Support team is responsive and helpful.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5
  },
  {
    id: 4,
    name: 'Jessica Williams',
    role: 'Game Developer',
    content: 'Best place to get Robux and Gamepass! Prices are competitive and the process is smooth. Highly recommended!',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map(testimonial => (
            <div 
              key={testimonial.id}
              className="bg-gray-800/70 backdrop-blur-sm rounded-xl p-6 shadow-xl transition-transform hover:scale-105"
            >
              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i}
                    className={`w-4 h-4 ${i < testimonial.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`}
                  />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>

              {/* Customer Info */}
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="text-white font-medium">{testimonial.name}</h4>
                  <p className="text-indigo-400 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to experience it yourself?
          </h3>
          <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-medium rounded-lg transition-transform transform hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;