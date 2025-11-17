import React, { useState, useEffect } from 'react';
import scholar from '../assets/scholar.png'; 

export default function WorksheetsSection() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const categories = [
    { 
      id: 1, 
      title: 'Math Worksheets', 
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=300&fit=crop',
      gradient: 'linear-gradient(135deg, #a855f7 0%, #ec4899 100%)',
      bgGradient: 'linear-gradient(135deg, #f3e8ff 0%, #fce7f3 100%)',
      emoji: '🔢',
      url: '/math'
    },
    { 
      id: 2, 
      title: 'English Worksheets', 
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop',
      gradient: 'linear-gradient(135deg, #3b82f6 0%, #22d3ee 100%)',
      bgGradient: 'linear-gradient(135deg, #dbeafe 0%, #cffafe 100%)',
      emoji: '📚',
      url: '/english'
    },
    { 
      id: 3, 
      title: 'Science Worksheets', 
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&h=300&fit=crop',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
      bgGradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      emoji: '🔬',
      url: '/science'
    },
    { 
      id: 4, 
      title: 'Art & Crafts', 
      image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&h=300&fit=crop',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ef4444 100%)',
      bgGradient: 'linear-gradient(135deg, #ffedd5 0%, #fee2e2 100%)',
      emoji: '🎨',
      url: '/art'
    },
    { 
      id: 5, 
      title: 'Coloring Pages', 
      image: 'https://images.unsplash.com/photo-1515488764276-beab7607c1e6?w=400&h=300&fit=crop',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)',
      bgGradient: 'linear-gradient(135deg, #fce7f3 0%, #ffe4e6 100%)',
      emoji: '🖍️',
      url: '/coloring'
    },
    { 
      id: 6, 
      title: 'Puzzles & Games', 
      image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&h=300&fit=crop',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
      bgGradient: 'linear-gradient(135deg, #e0e7ff 0%, #f3e8ff 100%)',
      emoji: '🧩',
      url: '/puzzles'
    },
  ];

  const handleNavigation = (url) => {
    console.log('Navigating to:', url);
  };

  return (
    <section id='worksheets-section' style={{
      position: 'relative',
      background: 'linear-gradient(180deg, #1e3a8a 0%, #4c1d95 50%, #1e3a8a 100%)',
      padding: isMobile ? '3rem 1rem' : '4rem 1.5rem',
      overflow: 'hidden'
    }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        {/* Title with decorative elements */}
        <div style={{ textAlign: 'center', marginBottom: isMobile ? '1.5rem' : '2rem', position: 'relative' }}>
          <div style={{
            position: 'absolute',
            top: isMobile ? '-1.5rem' : '-2.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            fontSize: isMobile ? '1.5rem' : '2rem',
            animation: 'bounce 2s ease-in-out infinite'
          }}>
            <img src={scholar} alt="scholar" width={32} height={32} />           
          </div>
          <h2 style={{
            fontSize: isMobile ? '2rem' : '3.5rem',
            fontWeight: 900,
            marginBottom: isMobile ? '0.75rem' : '1rem',
            background: 'linear-gradient(90deg, #67e8f9 0%, #86efac 50%, #67e8f9 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
            animation: 'pulse 2s ease-in-out infinite'
          }}>
            Wowkids Worksheets
          </h2>
        </div>

        {/* Description */}
        <p style={{
          color: '#ffffff',
          textAlign: 'center',
          fontSize: isMobile ? '0.95rem' : '1.125rem',
          maxWidth: '80rem',
          margin: '0 auto',
          marginBottom: isMobile ? '2rem' : '3rem',
          lineHeight: 1.7,
          backgroundColor: 'rgba(255,255,255,0.1)',
          backdropFilter: 'blur(8px)',
          borderRadius: isMobile ? '1.5rem' : '2rem',
          padding: isMobile ? '1.25rem' : '1.5rem',
          border: '2px solid rgba(255,255,255,0.2)'
        }}>
          Wowkids Worksheets for kids is a hub of online printable worksheets for toddlers, preschoolers and even adults. 
          We offer a large variety of online worksheets that come handy, moreover these free worksheets can easily be 
          incorporated in any syllabus and curriculum. More than 100+ worksheets for everyone. These free printable 
          worksheets are easy to access, safe for kids of all ages, and compatible with every device. Try these amazing 
          free printable worksheets for kids and perk up the monotonous learning.
        </p>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '2rem' : '2rem',
          maxWidth: '1400px',
          margin: '0 auto'
        }}>
          {categories.map((category) => (
            <div
              key={category.id}
              onMouseEnter={() => !isMobile && setHoveredCard(category.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{ position: 'relative' }}
            >
              {/* Floating emoji */}
              <div style={{
                position: 'absolute',
                top: isMobile ? '-1rem' : '-1.5rem',
                right: isMobile ? '-0.75rem' : '-1.5rem',
                fontSize: isMobile ? '3rem' : '4rem',
                zIndex: 20,
                transform: hoveredCard === category.id ? 'scale(1.25) rotate(12deg)' : 'scale(1)',
                transition: 'transform 0.3s'
              }}>
                {category.emoji}
              </div>

              {/* Card */}
              <div style={{
                position: 'relative',
                background: category.bgGradient,
                borderRadius: '1.5rem',
                overflow: 'hidden',
                boxShadow: '0 20px 25px -5px rgba(0,0,0,0.2)',
                transform: hoveredCard === category.id ? 'translateY(-1rem)' : 'translateY(0)',
                transition: 'all 0.3s'
              }}>
                {/* Decorative wavy top */}
                <div style={{
                  position: 'relative',
                  height: isMobile ? '24px' : '32px',
                  background: 'linear-gradient(90deg, #fcd34d 0%, #fb923c 50%, #fcd34d 100%)'
                }}>
                  <svg style={{ position: 'absolute', bottom: 0, width: '100%', height: '16px' }} viewBox="0 0 1200 60" preserveAspectRatio="none">
                    <path d="M0,30 Q300,60 600,30 T1200,30 L1200,60 L0,60 Z" fill="white"/>
                  </svg>
                </div>

                {/* Content */}
                <div style={{ padding: isMobile ? '1.25rem' : '1.5rem' }}>
                  {/* Image with fun border */}
                  <div style={{
                    position: 'relative',
                    backgroundColor: '#ffffff',
                    borderRadius: '1rem',
                    padding: '0.5rem',
                    marginBottom: isMobile ? '1rem' : '1.5rem',
                    boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                    border: '4px solid #e9d5ff',
                    overflow: 'hidden',
                    transform: hoveredCard === category.id ? 'scale(1.05) rotate(2deg)' : 'scale(1)',
                    transition: 'transform 0.3s'
                  }}>
                    <div style={{
                      height: isMobile ? '180px' : '192px',
                      borderRadius: '0.75rem',
                      overflow: 'hidden'
                    }}>
                      <img 
                        src={category.image} 
                        alt={category.title}
                        style={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transform: hoveredCard === category.id ? 'scale(1.1)' : 'scale(1)',
                          transition: 'transform 0.5s'
                        }}
                      />
                    </div>
                    {/* Corner decorations */}
                    <div style={{ position: 'absolute', top: '0.25rem', left: '0.25rem', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>🌟</div>
                    <div style={{ position: 'absolute', top: '0.25rem', right: '0.25rem', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>🌟</div>
                    <div style={{ position: 'absolute', bottom: '0.25rem', left: '0.25rem', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>🌟</div>
                    <div style={{ position: 'absolute', bottom: '0.25rem', right: '0.25rem', fontSize: isMobile ? '1.25rem' : '1.5rem' }}>🌟</div>
                  </div>

                  {/* Title Button */}
                  <button 
                    onClick={() => handleNavigation(category.url)}
                    style={{
                      width: '100%',
                      padding: isMobile ? '0.875rem 1.25rem' : '1rem 1.5rem',
                      borderRadius: '9999px',
                      fontWeight: 900,
                      color: '#ffffff',
                      fontSize: isMobile ? '1rem' : '1.25rem',
                      marginBottom: isMobile ? '0.75rem' : '1rem',
                      background: category.gradient,
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      border: '4px solid #ffffff',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      transform: hoveredCard === category.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    {category.title}
                  </button>

                  {/* View Button with arrow */}
                  <button 
                    onClick={() => handleNavigation(category.url)}
                    style={{
                      width: '100%',
                      padding: isMobile ? '0.75rem 1.25rem' : '0.875rem 1.5rem',
                      background: 'linear-gradient(90deg, #fcd34d 0%, #fb923c 50%, #fcd34d 100%)',
                      color: '#ffffff',
                      fontWeight: 700,
                      fontSize: isMobile ? '0.95rem' : '1.125rem',
                      borderRadius: '9999px',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '0.5rem',
                      transform: hoveredCard === category.id ? 'scale(1.05)' : 'scale(1)'
                    }}
                  >
                    <span>View All</span>
                    <span style={{
                      fontSize: '1.5rem',
                      transform: hoveredCard === category.id ? 'translateX(0.5rem)' : 'translateX(0)',
                      transition: 'transform 0.3s'
                    }}>→</span>
                  </button>
                </div>

                {/* Bottom wave decoration */}
                <svg style={{ width: '100%', height: isMobile ? '20px' : '24px' }} viewBox="0 0 1200 60" preserveAspectRatio="none">
                  <path d="M0,30 Q300,0 600,30 T1200,30 L1200,0 L0,0 Z" fill="white" opacity="0.3"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50% { transform: translateX(-50%) translateY(-10px); }
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </section>
  );
}