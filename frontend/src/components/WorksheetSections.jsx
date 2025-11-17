import React, { useState } from 'react';
import scholar from '../assets/scholar.png';

export default function WorksheetsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const categories = [
    { 
      id: 1, 
      title: 'Math Worksheets', 
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-100 to-pink-100',
      emoji: '🔢',
      url: '/math'
    },
    { 
      id: 2, 
      title: 'English Worksheets', 
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-100 to-cyan-100',
      emoji: '📚',
      url: '/english'
    },
    { 
      id: 3, 
      title: 'Science Worksheets', 
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
      bgGradient: 'from-green-100 to-emerald-100',
      emoji: '🔬',
      url: '/science'
    },
    { 
      id: 4, 
      title: 'Art & Crafts', 
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
      gradient: 'from-orange-500 to-red-500',
      bgGradient: 'from-orange-100 to-red-100',
      emoji: '🎨',
      url: '/art'
    },
    { 
      id: 5, 
      title: 'Coloring Pages', 
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=300&fit=crop',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-100 to-rose-100',
      emoji: '🖍️',
      url: '/coloring'
    },
    { 
      id: 6, 
      title: 'Puzzles & Games', 
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-100 to-purple-100',
      emoji: '🧩',
      url: '/puzzles'
    },
  ];

  const handleNavigation = (url) => {
    console.log('Navigating to:', url);
  };

  return (
    <section className="relative bg-gradient-to-b from-blue-900 via-purple-900 to-blue-900 py-16 px-6 overflow-hidden">


      <div className="max-w-7xl mx-auto relative z-10">
        {/* Title with decorative elements */}
        <div className="text-center mb-8 relative">
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 text-2xl animate-bounce"><img src={scholar} alt="scholar" className="w-14 h-14"/></div>
          <h2 className="text-5xl md:text-6xl font-black mb-4 bg-gradient-to-r from-cyan-300 via-green-300 to-cyan-300 bg-clip-text text-transparent animate-pulse">
            Wowkids Worksheets
          </h2>

        </div>

        {/* Description */}
        <p className="text-white text-center text-lg max-w-5xl mx-auto mb-12 leading-relaxed bg-white/10 backdrop-blur-sm rounded-3xl p-6 border-2 border-white/20">
          Wowkids Worksheets for kids is a hub of online printable worksheets for toddlers, preschoolers and even adults. 
          We offer a large variety of online worksheets that come handy, moreover these free worksheets can easily be 
          incorporated in any syllabus and curriculum. More than 100+ worksheets for everyone. These free printable 
          worksheets are easy to access, safe for kids of all ages, and compatible with every device. Try these amazing 
          free printable worksheets for kids and perk up the monotonous learning.
        </p>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative"
            >
              {/* Floating emoji */}
              <div className={`absolute -top-6 -right-6 text-6xl z-20 transition-transform duration-300 ${hoveredCard === category.id ? 'scale-125 rotate-12' : 'scale-100'}`}>
                {category.emoji}
              </div>

              {/* Card */}
              <div className={`relative bg-gradient-to-br ${category.bgGradient} rounded-3xl overflow-hidden shadow-2xl transition-all duration-300 ${hoveredCard === category.id ? 'transform -translate-y-4 shadow-3xl' : ''}`}>
                {/* Decorative wavy top */}
                <div className="relative h-8 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400">
                  <svg className="absolute bottom-0 w-full h-4" viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M0,30 Q300,60 600,30 T1200,30 L1200,60 L0,60 Z" fill="white"/>
                  </svg>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Image with fun border */}
                  <div className={`relative bg-white rounded-2xl p-2 mb-6 shadow-lg border-4 border-purple-300 overflow-hidden transition-transform duration-300 ${hoveredCard === category.id ? 'scale-105 rotate-2' : ''}`}>
                    <div className="h-48 rounded-xl overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    {/* Corner decorations */}
                    <div className="absolute top-0 left-0 text-2xl">🌟</div>
                    <div className="absolute top-0 right-0 text-2xl">🌟</div>
                    <div className="absolute bottom-0 left-0 text-2xl">🌟</div>
                    <div className="absolute bottom-0 right-0 text-2xl">🌟</div>
                  </div>

                  {/* Title Button */}
                  <button 
                    onClick={() => handleNavigation(category.url)}
                    className={`w-full py-4 px-6 rounded-full font-black text-white text-xl mb-4 bg-gradient-to-r ${category.gradient} shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 transform border-4 border-white`}
                  >
                    {category.title}
                  </button>

                  {/* View Button with arrow */}
                  <button 
                    onClick={() => handleNavigation(category.url)}
                    className="w-full py-3 px-6 bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-400 text-white font-bold text-lg rounded-full shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2 group"
                  >
                    <span>View All</span>
                    <span className="text-2xl group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </button>
                </div>

                {/* Bottom wave decoration */}
                <svg className="w-full h-6" viewBox="0 0 1200 60" preserveAspectRatio="none">
                  <path d="M0,30 Q300,0 600,30 T1200,30 L1200,0 L0,0 Z" fill="white" opacity="0.3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}