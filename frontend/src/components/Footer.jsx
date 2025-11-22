import React, { useState, useEffect } from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    { 
      icon: Instagram, 
      gradient: 'linear-gradient(135deg, #f9ce34, #ee2a7b, #6228d7)',
      url: 'https://instagram.com/wowkidsworksheets', 
      name: 'Instagram' 
    },
    { 
      icon: Facebook, 
      gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)',
      url: 'https://facebook.com/wowkidsworksheets', 
      name: 'Facebook' 
    },
    { 
      icon: Twitter, 
      gradient: 'linear-gradient(135deg, #60a5fa 0%, #1DA1F2 100%)',
      url: 'https://twitter.com/wowkidsworksheets', 
      name: 'Twitter' 
    }
  ];

  return (
    <footer style={{
      background: 'linear-gradient(180deg, #1e3a8a 0%, #312e81 100%)',
      padding: isMobile ? '3rem 1.5rem' : '4rem 1.5rem'
    }}>
      <div style={{
        maxWidth: '80rem',
        margin: '0 auto',
        textAlign: 'center'
      }}>
        {/* Logo */}
        <div style={{ marginBottom: isMobile ? '1.5rem' : '2rem' }}>
          <div style={{
            display: 'inline-block',
            backgroundColor: '#ffffff',
            borderRadius: isMobile ? '1rem' : '1.5rem',
            padding: isMobile ? '1rem 1.25rem' : '1.25rem 1.5rem',
            boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)'
          }}>
            <img 
              src="wowkidsworksheet.png" 
              alt="WowKids Worksheets" 
              style={{
                height: isMobile ? '100px' : '140px',
                width: 'auto'
              }}
            />
          </div>
        </div>

        {/* Description */}
        <p style={{
          color: '#ffffff',
          fontSize: isMobile ? '0.95rem' : '1.125rem',
          lineHeight: 1.7,
          marginBottom: isMobile ? '1.5rem' : '2rem',
          maxWidth: '64rem',
          margin: '0 auto',
          padding: isMobile ? '0 0.5rem' : '0'
        }}>
          Online worksheets for kids - free worksheets, worksheets for adults, worksheets for kids, worksheets for girls, 
          worksheets for boys, worksheets for parents, worksheets for teachers and much more. Online worksheets for kids 
          is a site that offers a wide range of printable worksheets for children of all ages, moreover these worksheets 
          are free of all charges and available online. These online worksheets serve as a helping aid for parents and 
          teachers who look for new and fun ways to teach kids. These online worksheets work best on any android and iOS 
          device including iPhones, iPads and other gadgets.
        </p>

        {/* Contact */}
        <p style={{
          color: '#67e8f9',
          fontSize: isMobile ? '1rem' : '1.125rem',
          marginBottom: isMobile ? '1.5rem' : '2rem',
          padding: isMobile ? '0 1rem' : '0',
          wordBreak: 'break-word'
        }}>
          Contact Us: <span style={{ fontWeight: 600 }}>support@wowkidsworksheets.com</span>
        </p>

        {/* Social Icons */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: isMobile ? '1rem' : '1.5rem',
          marginBottom: isMobile ? '2rem' : '3rem',
          flexWrap: 'wrap',
          padding: isMobile ? '0 1rem' : '0'
        }}>
          {socialLinks.map((social, idx) => (
            <a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              style={{
                width: isMobile ? '56px' : '64px',
                height: isMobile ? '56px' : '64px',
                borderRadius: '50%',
                background: social.gradient,
                color: '#ffffff',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'transform 0.3s, box-shadow 0.3s',
                textDecoration: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.1)';
                e.currentTarget.style.boxShadow = '0 20px 25px -5px rgba(0,0,0,0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(0,0,0,0.1)';
              }}
            >
              <social.icon size={isMobile ? 28 : 32} strokeWidth={2} />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p style={{
          color: 'rgba(255,255,255,0.7)',
          fontSize: isMobile ? '0.8rem' : '0.875rem',
          padding: isMobile ? '0 1rem' : '0'
        }}>
          © Copyright 2025 <span style={{ fontWeight: 600, color: '#ffffff' }}>WowKids Worksheets</span> - All Rights Reserved
        </p>
      </div>
    </footer>
  );
}