import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PreschoolHomework = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
    const navigate = useNavigate();

  const dropdownOptions = {
    preschool: [
      { label: 'Preschool Tracing', url: '/preschool-tracing' },
      { label: 'English', url: '/preschool-english' },
      { label: 'Math', url: '/preschool-math' },
      { label: 'Science', url: '/preschool-science' },
      { label: 'Homework', url: '/preschool-homework' },
      { label: 'Practice', url: '/preschool-practice' },
    //   { label: 'Activity', url: '#activity' }
    ],
    kindergarten: [
      { label: 'Nursery', url: '/kindergarten-nursery' },
      { label: 'LKG', url: '/kindergarten-lkg' },
      { label: 'UKG', url: '/kindergarten-ukg' }
    ],
    firstGrade: [
      { label: '1st Grade English', url: '#1st-english' },
      { label: '1st Grade Math', url: '#1st-math' },
      { label: '1st Grade Science', url: '#1st-science' },
      { label: '1st Grade Social Studies', url: '#1st-social' }
    ],
    secondGrade: [
      { label: '2nd Grade English', url: '#2nd-english' },
      { label: '2nd Grade Math', url: '#2nd-math' },
      { label: '2nd Grade Science', url: '#2nd-science' },
      { label: '2nd Grade Social Studies', url: '#2nd-social' }
    ],
    blogs: [
      { label: 'Educational Tips', url: '#educational-tips' },
      { label: 'Learning Activities', url: '#learning-activities' },
      { label: 'Parent Resources', url: '#parent-resources' },
      { label: 'Teaching Methods', url: '#teaching-methods' }
    ]
  };

  const homeworkWorksheets = [
    {
      id: 1,
      title: 'Weekly Review',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #ec4899 100%)',
      bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #ffe4e6 100%)',
      url: '#weekly-review'
    },
    {
      id: 2,
      title: 'Letter Practice',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #a78bfa 100%)',
      bgGradient: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
      url: '#letter-practice'
    },
    {
      id: 3,
      title: 'Number Practice',
      image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #22d3ee 100%)',
      bgGradient: 'linear-gradient(135deg, #ecfeff 0%, #dbeafe 100%)',
      url: '#number-practice'
    },
    {
      id: 4,
      title: 'Reading Comprehension',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #2dd4bf 0%, #10b981 50%, #2dd4bf 100%)',
      bgGradient: 'linear-gradient(135deg, #f0fdfa 0%, #d1fae5 100%)',
      url: '#reading-comprehension'
    },
    {
      id: 5,
      title: 'Writing Skills',
      image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)',
      bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #ffedd5 100%)',
      url: '#writing-skills'
    },
    {
      id: 6,
      title: 'Math Problems',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #f472b6 100%)',
      bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
      url: '#math-problems'
    },
    {
      id: 7,
      title: 'Science Questions',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 50%, #fb923c 100%)',
      bgGradient: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
      url: '#science-questions'
    },
    {
      id: 8,
      title: 'Critical Thinking',
      image: 'https://images.unsplash.com/photo-1516414447565-b14be0adf13e?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #34d399 100%)',
      bgGradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      url: '#critical-thinking'
    },
    {
      id: 9,
      title: 'Memory Games',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #60a5fa 100%)',
      bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      url: '#memory-games'
    },
    {
      id: 10,
      title: 'Review & Assessment',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #c084fc 100%)',
      bgGradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
      url: '#review-assessment'
    }
  ];

  const handleNavigation = (url) => {
    window.location.hash = url;
  };

  const NavDropdown = ({ title, options, dropdownKey }) => {
  const isActive = activeDropdown === dropdownKey;
  
  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setActiveDropdown(dropdownKey);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setActiveDropdown(null);
    }, 300);
    setDropdownTimeout(timeout);
  };
  
  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
        <button
          style={{
            padding: '0.5rem 1rem',
            color: isActive ? '#9333ea' : '#374151',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'color 0.3s',
            cursor: 'pointer',
            display: 'block',
            background: 'none',
            border: 'none'
          }}
        >
          {title}
        </button>
        {isActive && (
          <div
            style={{
              position: 'absolute',
              top: '100%',
              left: 0,
              backgroundColor: '#ffffff',
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.2)',
              borderRadius: '0.75rem',
              padding: '0.75rem 0',
              minWidth: '200px',
              zIndex: 100,
              marginTop: '0.5rem',
              border: '2px dashed #e9d5ff'
            }}
          >
            {options.map((option, idx) => (
              <button
                key={idx}
                onClick={() => handleNavigation(option.url)}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '0.75rem 1.5rem',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                  fontWeight: 600,
                  background: 'none',
                  border: 'none',
                  textAlign: 'left',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f3e8ff';
                  e.currentTarget.style.color = '#9333ea';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#374151';
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Header/Navigation */}
      <header style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '90px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/wowkidsworksheet.png" 
                alt="WowKids Worksheets" 
                style={{ height: '140px', width: 'auto', cursor: 'pointer' }}
                onClick={() => handleNavigation('/')}
              />
            </div>

            <nav style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <NavDropdown title="Preschool +" options={dropdownOptions.preschool} dropdownKey="preschool" />
              <NavDropdown title="Kindergarten +" options={dropdownOptions.kindergarten} dropdownKey="kindergarten" />
              <NavDropdown title="1st Grade +" options={dropdownOptions.firstGrade} dropdownKey="firstGrade" />
              <NavDropdown title="2nd Grade +" options={dropdownOptions.secondGrade} dropdownKey="secondGrade" />
              <NavDropdown title="Blogs +" options={dropdownOptions.blogs} dropdownKey="blogs" />
              
              <button style={{ 
                marginLeft: '1rem', 
                width: '50px', 
                height: '50px', 
                background: 'linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)', 
                borderRadius: '50%', 
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontSize: '2rem',
                boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
              }}>
                🔍
              </button>
              <button 
                onClick={() => handleNavigation('#privacy-policy')}
                style={{ 
                  marginLeft: '0.5rem', 
                  padding: '0.75rem 1.75rem', 
                  background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 100%)', 
                  color: '#ffffff',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  border: '3px dashed #ca8a04',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}
              >
                Privacy Policy
              </button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #fef3c7 0%, #fce7f3 40%, #e0e7ff 70%, #dbeafe 100%)', 
        padding: '5rem 1.5rem',
        overflow: 'hidden',
        minHeight: '400px'
      }}>
        <div style={{ position: 'absolute', top: '2.5rem', left: '5rem', fontSize: '4rem' }}>📚</div>
        <div style={{ position: 'absolute', top: '5rem', right: '10rem', fontSize: '3.5rem' }}>✏️</div>
        <div style={{ position: 'absolute', bottom: '5rem', left: '2.5rem', fontSize: '3rem' }}>🎒</div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: '5rem', fontSize: '4rem' }}>📓</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '42rem' }}>
            <h1 style={{ fontSize: '4.5rem', fontWeight: 900, color: '#1f2937', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              Preschool<br />
              <span style={{ 
                background: 'linear-gradient(90deg, #9333ea 0%, #ec4899 50%, #3b82f6 100%)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Homework Worksheets
              </span>
            </h1>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', marginTop: '1rem' }}>
              Comprehensive homework worksheets covering various subjects to reinforce learning at home.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #4c1d95 50%, #1e3a8a 100%)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '3rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '2rem',
            background: 'linear-gradient(90deg, #67e8f9 0%, #86efac 50%, #67e8f9 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            Homework Worksheets Collection
          </h2>

          <p style={{ color: '#ffffff', textAlign: 'center', fontSize: '1.125rem', maxWidth: '80rem', margin: '0 auto 4rem', lineHeight: 1.7 }}>
            Our preschool homework worksheets provide a well-rounded review of essential skills. These worksheets cover reading, writing, math, and critical thinking activities designed for home practice. Each worksheet helps reinforce classroom learning and builds confidence in young learners.
          </p>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
            {homeworkWorksheets.map((worksheet) => (
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

      {/* Footer */}
      <section style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #312e81 100%)', padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#ffffff', borderRadius: '1rem', padding: '1.25rem 1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <img 
                src="wowkidsworksheet.png" 
                alt="WowKids Worksheets" 
                style={{ height: '140px', width: 'auto' }}
              />
            </div>
          </div>

          <p style={{ color: '#ffffff', fontSize: '1.125rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Online worksheets for kids - free worksheets, worksheets for adults, worksheets for kids, worksheets for girls, 
            worksheets for boys, worksheets for parents, worksheets for teachers and much more.
          </p>

          <p style={{ color: '#67e8f9', fontSize: '1.125rem', marginBottom: '2rem' }}>
            Contact Us: <span style={{ fontWeight: 600 }}>support@wowkidsworksheet.com</span>
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
            {[
              { icon: '🐦', gradient: 'linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)', url: 'https://twitter.com' },
              { icon: '📘', gradient: 'linear-gradient(135deg, #2563eb 0%, #1e40af 100%)', url: 'https://facebook.com' },
              { icon: '📷', gradient: 'linear-gradient(135deg, #ec4899 0%, #9333ea 100%)', url: 'https://instagram.com' },
              { icon: '▶️', gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', url: 'https://youtube.com' },
              { icon: '📌', gradient: 'linear-gradient(135deg, #dc2626 0%, #b91c1c 100%)', url: 'https://pinterest.com' }
            ].map((social, idx) => (
              <button
                key={idx}
                onClick={() => window.open(social.url, '_blank')}
                style={{ 
                  width: '56px', 
                  height: '56px', 
                  borderRadius: '50%',
                  background: social.gradient,
                  color: '#ffffff',
                  fontSize: '1.5rem',
                  border: 'none',
                  cursor: 'pointer',
                  boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'transform 0.3s'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {social.icon}
              </button>
            ))}
          </div>

          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.875rem' }}>
            © Copyright 2025 <span style={{ fontWeight: 600, color: '#ffffff' }}>WowKids Worksheet</span> - All Rights Reserved
          </p>
        </div>
      </section>
    </div>
  );
};

export default PreschoolHomework;