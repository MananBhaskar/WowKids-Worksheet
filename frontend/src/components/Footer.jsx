import React from 'react';

export default function KidsFooter() {
  const socialLinks = [
    { icon: '🐦', gradient: 'from-blue-400 to-cyan-400', url: 'https://twitter.com', name: 'Twitter' },
    { icon: '📘', gradient: 'from-blue-600 to-blue-800', url: 'https://facebook.com', name: 'Facebook' },
    { icon: '📷', gradient: 'from-pink-500 to-purple-600', url: 'https://instagram.com', name: 'Instagram' },
    { icon: '▶️', gradient: 'from-red-500 to-red-600', url: 'https://youtube.com', name: 'YouTube' },
    { icon: '📌', gradient: 'from-red-600 to-red-800', url: 'https://pinterest.com', name: 'Pinterest' }
  ];

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-indigo-900 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Logo */}
        <div className="mb-8">
          <div className="inline-block bg-white rounded-2xl p-5 shadow-2xl">
            <img 
              src="wowkidsworksheet.png" 
              alt="WowKids Worksheets" 
              className="h-36 w-auto"
            />
          </div>
        </div>

        {/* Description */}
        <p className="text-white text-lg leading-relaxed mb-8 max-w-4xl mx-auto">
          Online worksheets for kids - free worksheets, worksheets for adults, worksheets for kids, worksheets for girls, 
          worksheets for boys, worksheets for parents, worksheets for teachers and much more. Online worksheets for kids 
          is a site that offers a wide range of printable worksheets for children of all ages, moreover these worksheets 
          are free of all charges and available online. These online worksheets serve as a helping aid for parents and 
          teachers who look for new and fun ways to teach kids. These online worksheets work best on any android and iOS 
          device including iPhones, iPads and other gadgets.
        </p>

        {/* Contact */}
        <p className="text-cyan-300 text-lg mb-8">
          Contact Us: <span className="font-semibold">support@wowkidsworksheet.com</span>
        </p>

        {/* Social Icons */}
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
          {socialLinks.map((social, idx) => (
            <button
              key={idx}
              onClick={() => window.open(social.url, '_blank')}
              aria-label={social.name}
              className={`w-14 h-14 rounded-full bg-gradient-to-br ${social.gradient} text-white text-2xl border-none cursor-pointer shadow-lg flex items-center justify-center transition-transform duration-300 hover:scale-110 hover:shadow-2xl`}
            >
              {social.icon}
            </button>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-white/70 text-sm">
          © Copyright 2025 <span className="font-semibold text-white">WowKids Worksheet</span> - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}