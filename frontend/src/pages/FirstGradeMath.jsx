import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const FirstGradeMath = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const mathWorksheets = [
    {
      id: 1,
      title: 'Addition Facts',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #ec4899 100%)',
      bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #ffe4e6 100%)',
      url: '#addition-facts'
    },
    {
      id: 2,
      title: 'Subtraction Practice',
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #a78bfa 100%)',
      bgGradient: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
      url: '#subtraction'
    },
    {
      id: 3,
      title: 'Counting to 100',
      image: 'https://images.unsplash.com/photo-1632571401005-458e9d244591?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #22d3ee 100%)',
      bgGradient: 'linear-gradient(135deg, #ecfeff 0%, #dbeafe 100%)',
      url: '#counting-100'
    },
    {
      id: 4,
      title: 'Place Value',
      image: 'https://images.unsplash.com/photo-1611696695459-b28e2d418832?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #2dd4bf 0%, #10b981 50%, #2dd4bf 100%)',
      bgGradient: 'linear-gradient(135deg, #f0fdfa 0%, #d1fae5 100%)',
      url: '#place-value'
    },
    {
      id: 5,
      title: 'Number Patterns',
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)',
      bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #ffedd5 100%)',
      url: '#number-patterns'
    },
    {
      id: 6,
      title: 'Shapes & Geometry',
      image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #f472b6 100%)',
      bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
      url: '#shapes-geometry'
    },
    {
      id: 7,
      title: 'Measurement',
      image: 'https://images.unsplash.com/photo-1554224311-beee4f2eb72c?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 50%, #fb923c 100%)',
      bgGradient: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
      url: '#measurement'
    },
    {
      id: 8,
      title: 'Time & Clock',
      image: 'https://images.unsplash.com/photo-1501139083538-0139583c060f?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #34d399 100%)',
      bgGradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      url: '#time-clock'
    },
    {
      id: 9,
      title: 'Money & Coins',
      image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #60a5fa 100%)',
      bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      url: '#money-coins'
    },
    {
      id: 10,
      title: 'Word Problems',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #c084fc 100%)',
      bgGradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
      url: '#word-problems'
    }
  ];

  const handleNavigation = (url) => {
    window.location.href = url;
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>

    <Navbar/>
      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 40%, #e0e7ff 70%, #dbeafe 100%)', 
        padding: isMobile ? '3rem 1rem' : '5rem 1.5rem',
        overflow: 'hidden',
        minHeight: isMobile ? '300px' : '400px'
      }}>
        <div style={{ position: 'absolute', top: isMobile ? '1rem' : '2.5rem', left: isMobile ? '1rem' : '5rem', fontSize: isMobile ? '2.5rem' : '4rem' }}>🔢</div>
        <div style={{ position: 'absolute', top: isMobile ? '2rem' : '5rem', right: isMobile ? '1rem' : '10rem', fontSize: isMobile ? '2rem' : '3.5rem' }}>➕</div>
        <div style={{ position: 'absolute', bottom: isMobile ? '2rem' : '5rem', left: isMobile ? '1rem' : '2.5rem', fontSize: isMobile ? '2rem' : '3rem' }}>📐</div>
        <div style={{ position: 'absolute', bottom: isMobile ? '1rem' : '2.5rem', right: isMobile ? '1rem' : '5rem', fontSize: isMobile ? '2.5rem' : '4rem' }}>🎯</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '42rem' }}>
            <h1 style={{ fontSize: isMobile ? '2.5rem' : '4.5rem', fontWeight: 900, color: '#1f2937', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              1st Grade<br />
              <span style={{ 
                background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #3b82f6 100%)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Math Worksheets
              </span>
            </h1>
            <p style={{ fontSize: isMobile ? '1rem' : '1.25rem', color: '#6b7280', marginTop: '1rem' }}>
              Fun and engaging math worksheets covering addition, subtraction, counting, shapes, and more to build strong mathematical foundations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #4c1d95 50%, #1e3a8a 100%)', padding: isMobile ? '2rem 1rem' : '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: isMobile ? '2rem' : '3rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '2rem',
            background: 'linear-gradient(90deg, #67e8f9 0%, #86efac 50%, #67e8f9 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Math Worksheets Collection
          </h2>

          <p style={{ color: '#ffffff', textAlign: 'center', fontSize: isMobile ? '1rem' : '1.125rem', maxWidth: '80rem', margin: '0 auto 4rem', lineHeight: 1.7, padding: isMobile ? '0 1rem' : '0' }}>
            Our 1st grade math worksheets help students master fundamental mathematical concepts. From basic addition and subtraction to understanding place value and geometry, these activities make learning math enjoyable and effective. Each worksheet is carefully designed to support first-grade math curriculum standards.
          </p>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: isMobile ? '1.5rem' : '2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
            {mathWorksheets.map((worksheet) => (
              <div
                key={worksheet.id}
                onMouseEnter={() => setHoveredCard(worksheet.id)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{ position: 'relative' }}
              >
                <div style={{ 
                  position: 'relative', 
                  borderRadius: '1.5rem 1.5rem 0 0', 
                  overflow: 'hidden',
                  transform: hoveredCard === worksheet.id ? 'translateY(-8px)' : 'translateY(0)',
                  transition: 'transform 0.3s'
                }}>
                  <div style={{ position: 'relative', height: '32px', background: 'linear-gradient(90deg, #fcd34d 0%, #fb923c 50%, #fcd34d 100%)' }}>
                    <svg style={{ position: 'absolute', bottom: 0, width: '100%', height: '16px' }} viewBox="0 0 1200 60" preserveAspectRatio="none">
                      <path d="M0,30 Q300,60 600,30 T1200,30 L1200,60 L0,60 Z" fill="white"/>
                    </svg>
                  </div>

                  <div style={{ background: worksheet.bgGradient, padding: '1.5rem' }}>
                    <div style={{ 
                      backgroundColor: '#ffffff', 
                      borderRadius: '1rem', 
                      padding: '1rem', 
                      marginBottom: '1.5rem',
                      boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                      border: '4px solid #e9d5ff',
                      overflow: 'hidden',
                      height: '180px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transform: hoveredCard === worksheet.id ? 'scale(1.05)' : 'scale(1)',
                      transition: 'transform 0.3s'
                    }}>
                      <img 
                        src={worksheet.image} 
                        alt={worksheet.title}
                        style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '0.5rem' }}
                      />
                    </div>

                    <button 
                      onClick={() => handleNavigation(worksheet.url)}
                      style={{ 
                        width: '100%', 
                        padding: '0.875rem 1.5rem', 
                        borderRadius: '9999px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        fontSize: '1.125rem',
                        background: worksheet.gradient,
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        transform: hoveredCard === worksheet.id ? 'scale(1.05)' : 'scale(1)',
                        transition: 'all 0.3s'
                      }}
                    >
                      {worksheet.title}
                    </button>
                  </div>

                  <div style={{ position: 'relative', marginTop: '-1rem' }}>
                    <button 
                      onClick={() => handleNavigation(worksheet.url)}
                      style={{ 
                        width: '100%', 
                        padding: '0.875rem 1.5rem', 
                        background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: '1.125rem',
                        borderRadius: '0 0 1.5rem 1.5rem',
                        border: 'none',
                        cursor: 'pointer',
                        boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                        transition: 'transform 0.3s'
                      }}
                    >
                      View
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    <Footer/>

    </div>
  );
};

export default FirstGradeMath;