import React from 'react';

export default function KidsHeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-amber-100 via-pink-100 via-indigo-100 to-blue-100 py-20 px-6 overflow-hidden min-h-[600px]">
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
        .text-shadow-fun { text-shadow: 4px 4px 0px rgba(255,255,255,0.8), 6px 6px 0px rgba(0,0,0,0.1); }
        .text-shadow-soft { text-shadow: 2px 2px 0px rgba(255,255,255,0.8); }
      `}</style>

      {/* Animated decorative elements */}
      <div className="absolute top-10 left-20 text-8xl animate-bounce drop-shadow-lg">⭐</div>
      <div className="absolute top-20 right-40 text-8xl animate-float drop-shadow-lg">🌈</div>
      <div className="absolute top-32 right-32 text-6xl animate-float-delay drop-shadow-lg">☁️</div>
      <div className="absolute bottom-20 left-10 text-7xl animate-float-delay-2 drop-shadow-lg">☁️</div>
      <div className="absolute bottom-32 right-20 text-9xl animate-wiggle drop-shadow-lg">🥑</div>
      <div className="absolute bottom-10 right-10 text-9xl animate-wiggle-delay drop-shadow-lg">🐊</div>
      <div className="absolute top-40 right-60 text-8xl animate-bounce-delay drop-shadow-lg">⭐</div>
      <div className="absolute top-60 right-140 text-7xl animate-bounce-delay-2 drop-shadow-lg">⭐</div>
      <div className="absolute top-48 left-60 text-7xl animate-spin-slow drop-shadow-lg">🎨</div>
      <div className="absolute bottom-40 right-110 text-6xl animate-bounce-delay-3 drop-shadow-lg">🎈</div>
      <div className="absolute top-72 right-80 text-7xl animate-float-delay-3 drop-shadow-lg">🦋</div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-7xl font-black text-gray-800 mb-6 leading-tight tracking-tight text-shadow-fun">
            Online<br />
            <span className="bg-gradient-to-l from-purple-800 via-pink-700 to-blue-800 bg-clip-text text-transparent inline-block animate-shimmer">
              Worksheets For
            </span><br />
            <span className="inline-block animate-wiggle-fast">
              Kids 🎉
            </span>
          </h1>
          
          <p className="text-2xl text-gray-600 mb-8 font-semibold text-shadow-soft">
            Fun learning activities for curious minds!
          </p>

          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white text-2xl font-bold py-4 px-10 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 animate-pulse">
            Start Learning! 🚀
          </button>
        </div>
      </div>
    </section>
  );
}