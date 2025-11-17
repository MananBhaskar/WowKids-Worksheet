import React, { useState, useEffect } from 'react';

export default function KidsHeroSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const scrollToWorksheets = () => {
    const worksheetsSection = document.getElementById('worksheets-section');
    if (worksheetsSection) {
      worksheetsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section style={{
      position: 'relative',
      background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 40%, #e0e7ff 70%, #dbeafe 100%)',
      padding: isMobile ? '3rem 1.5rem' : '5rem 1.5rem',
      overflow: 'hidden',
      minHeight: isMobile ? '400px' : '600px'
    }}>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        @keyframes wiggle {
          0%, 100% { transform: rotate(-5deg); }
          50% { transform: rotate(5deg); }
        }
        @keyframes shimmer {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.8; }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delay { animation: float 4s ease-in-out infinite 0.5s; }
        .animate-float-delay-2 { animation: float 3.5s ease-in-out infinite 1s; }
        .animate-float-delay-3 { animation: float 3.2s ease-in-out infinite 2s; }
        .animate-wiggle { animation: wiggle 2.5s ease-in-out infinite; }
        .animate-wiggle-delay { animation: wiggle 3s ease-in-out infinite 0.5s; }
        .animate-wiggle-fast { animation: wiggle 1s ease-in-out infinite; }
        .animate-bounce-delay { animation: bounce 2.5s ease-in-out infinite 0.3s; }
        .animate-bounce-delay-2 { animation: bounce 2.2s ease-in-out infinite 0.7s; }
        .animate-bounce-delay-3 { animation: bounce 2.8s ease-in-out infinite 1.5s; }
        .animate-spin-slow { animation: spin 8s linear infinite; }
        .animate-shimmer { animation: shimmer 3s ease-in-out infinite; }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>

      {/* Desktop Animated decorative elements */}
      {!isMobile && (
        <>
          <div style={{ position: 'absolute', top: '2.5rem', left: '5rem', fontSize: '5rem', animation: 'bounce 2s ease-in-out infinite', filter: 'drop-shadow(0 10px 8px rgba(0,0,0,0.1))' }}>⭐</div>
          <div style={{ position: 'absolute', top: '5rem', right: '10rem', fontSize: '5rem' }} className="animate-float">🌈</div>
          <div style={{ position: 'absolute', top: '8rem', right: '8rem', fontSize: '3.75rem' }} className="animate-float-delay">☁️</div>
          <div style={{ position: 'absolute', bottom: '5rem', left: '2.5rem', fontSize: '4.375rem' }} className="animate-float-delay-2">☁️</div>
          <div style={{ position: 'absolute', bottom: '8rem', right: '5rem', fontSize: '5.625rem' }} className="animate-wiggle">🥑</div>
          <div style={{ position: 'absolute', bottom: '2.5rem', right: '2.5rem', fontSize: '5.625rem' }} className="animate-wiggle-delay">🐊</div>
          <div style={{ position: 'absolute', top: '10rem', right: '15rem', fontSize: '5rem' }} className="animate-bounce-delay">⭐</div>
          <div style={{ position: 'absolute', top: '15rem', left: '8rem', fontSize: '4.375rem' }} className="animate-bounce-delay-2">⭐</div>
          <div style={{ position: 'absolute', top: '12rem', left: '15rem', fontSize: '4.375rem' }} className="animate-spin-slow">🎨</div>
          <div style={{ position: 'absolute', bottom: '10rem', right: '27.5rem', fontSize: '3.75rem' }} className="animate-bounce-delay-3">🎈</div>
          <div style={{ position: 'absolute', top: '18rem', right: '20rem', fontSize: '4.375rem' }} className="animate-float-delay-3">🦋</div>
        </>
      )}

      {/* Mobile Animated decorative elements - fewer and smaller */}
      {isMobile && (
        <>
          <div style={{ position: 'absolute', top: '1rem', left: '1rem', fontSize: '2.5rem', animation: 'bounce 2s ease-in-out infinite', filter: 'drop-shadow(0 4px 3px rgba(0,0,0,0.1))' }}>⭐</div>
          <div style={{ position: 'absolute', top: '2rem', right: '1rem', fontSize: '2.5rem' }} className="animate-float">🌈</div>
          <div style={{ position: 'absolute', top: '5rem', right: '0.5rem', fontSize: '2rem' }} className="animate-float-delay">☁️</div>
          <div style={{ position: 'absolute', bottom: '5rem', right: '1rem', fontSize: '3rem' }} className="animate-wiggle">🥑</div>
        </>
      )}

      {/* Main content */}
      <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: isMobile ? '100%' : '56rem' }}>
          <h1 style={{
            fontSize: isMobile ? '2.5rem' : '4.5rem',
            fontWeight: 900,
            color: '#1f2937',
            marginBottom: isMobile ? '1rem' : '1.5rem',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
            textShadow: isMobile 
              ? '2px 2px 0px rgba(255,255,255,0.8), 3px 3px 0px rgba(0,0,0,0.1)' 
              : '4px 4px 0px rgba(255,255,255,0.8), 6px 6px 0px rgba(0,0,0,0.1)'
          }}>
            Online<br />
            <span style={{
              background: 'linear-gradient(90deg, #6b21a8 0%, #db2777 50%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }} className="animate-shimmer">
              Worksheets For
            </span><br />
            <span style={{ display: 'inline-block' }} className="animate-wiggle-fast">
              Kids 🎉
            </span>
          </h1>
          
          <p style={{
            fontSize: isMobile ? '1.125rem' : '1.5rem',
            color: '#4b5563',
            marginBottom: isMobile ? '1.5rem' : '2rem',
            fontWeight: 600,
            textShadow: '2px 2px 0px rgba(255,255,255,0.8)'
          }}>
            Fun learning activities for curious minds!
          </p>

          <button 
            onClick={scrollToWorksheets}
            style={{
              background: 'linear-gradient(90deg, #a855f7 0%, #ec4899 50%, #3b82f6 100%)',
              color: '#ffffff',
              fontSize: isMobile ? '1.25rem' : '1.5rem',
              fontWeight: 700,
              padding: isMobile ? '0.875rem 2rem' : '1rem 2.5rem',
              borderRadius: '9999px',
              boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s',
              animation: 'shimmer 2s ease-in-out infinite'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
            }}
          >
            Start Learning! 🚀
          </button>
        </div>
      </div>
    </section>
  );
}