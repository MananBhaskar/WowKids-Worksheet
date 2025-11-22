import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

const KindergartenUKG = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownOptions = {
    preschool: [
      { label: 'Preschool Tracing', url: '/preschool-tracing' },
      { label: 'English', url: '/preschool-english' },
      { label: 'Math', url: '/preschool-math' },
      { label: 'Science', url: '/preschool-science' },
      { label: 'Homework', url: '/preschool-homework' },
      { label: 'Practice', url: '/preschool-practice' }
    ],
    kindergarten: [
      { label: 'Nursery', url: '/kindergarten-nursery' },
      { label: 'LKG', url: '/kindergarten-lkg' },
      { label: 'UKG', url: '/kindergarten-ukg' }
    ],
    firstGrade: [
      { label: '1st Grade English', url: '/1st-grade-english' },
      { label: '1st Grade Math', url: '/1st-grade-math' },
      { label: '1st Grade Science', url: '/1st-grade-science' },
      { label: '1st Grade Social Studies', url: '/1st-grade-social-studies' }
    ],
    secondGrade: [
      { label: '2nd Grade English', url: '/2nd-grade-english' },
      { label: '2nd Grade Math', url: '/2nd-grade-math' },
      { label: '2nd Grade Science', url: '/2nd-grade-science' },
      { label: '2nd Grade Social Studies', url: '/2nd-grade-social-studies' }
    ],
    blogs: [
      { label: 'Educational Tips', url: '/blog-educational-tips' },
      { label: 'Learning Activities', url: '/blog-learning-activities' },
      { label: 'Parent Resources', url: '/blog-parent-resources' },
      { label: 'Teaching Methods', url: '/blog-teaching-methods' }
    ]
  };

  const ukgWorksheets = [
    {
      id: 1,
      title: 'Three Letter Words',
      image: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #10b981 0%, #059669 50%, #10b981 100%)',
      bgGradient: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 100%)',
      url: '/worksheet/ukg-three-letter'
    },
    {
      id: 2,
      title: 'Four Letter Words',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 50%, #6366f1 100%)',
      bgGradient: 'linear-gradient(135deg, #e0e7ff 0%, #c7d2fe 100%)',
      url: '/worksheet/ukg-four-letter'
    },
    {
      id: 3,
      title: 'Subtraction',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 50%, #f59e0b 100%)',
      bgGradient: 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)',
      url: '/worksheet/ukg-subtraction'
    },
    {
      id: 4,
      title: 'Counting 1-50',
      image: 'https://images.unsplash.com/photo-1612538498456-e861df91e4ca?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #ef4444 0%, #dc2626 50%, #ef4444 100%)',
      bgGradient: 'linear-gradient(135deg, #fee2e2 0%, #fecaca 100%)',
      url: '/worksheet/ukg-counting-50'
    },
    {
      id: 5,
      title: 'Sentence Making',
      image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 50%, #8b5cf6 100%)',
      bgGradient: 'linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)',
      url: '/worksheet/ukg-sentences'
    },
    {
      id: 6,
      title: 'Missing Numbers',
      image: 'https://images.unsplash.com/photo-1596496050755-c923e73e42e1?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #14b8a6 0%, #0d9488 50%, #14b8a6 100%)',
      bgGradient: 'linear-gradient(135deg, #ccfbf1 0%, #99f6e4 100%)',
      url: '/worksheet/ukg-missing-numbers'
    },
    {
      id: 7,
      title: 'Simple Phonics',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #db2777 50%, #ec4899 100%)',
      bgGradient: 'linear-gradient(135deg, #fce7f3 0%, #fbcfe8 100%)',
      url: '/worksheet/ukg-phonics'
    },
    {
      id: 8,
      title: 'Greater Than Less Than',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 50%, #06b6d4 100%)',
      bgGradient: 'linear-gradient(135deg, #cffafe 0%, #a5f3fc 100%)',
      url: '/worksheet/ukg-comparison'
    },
    {
      id: 9,
      title: 'Time Telling',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #f97316 0%, #ea580c 50%, #f97316 100%)',
      bgGradient: 'linear-gradient(135deg, #ffedd5 0%, #fed7aa 100%)',
      url: '/worksheet/ukg-time'
    },
    {
      id: 10,
      title: 'Seasons',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #84cc16 0%, #65a30d 50%, #84cc16 100%)',
      bgGradient: 'linear-gradient(135deg, #ecfccb 0%, #d9f99d 100%)',
      url: '/worksheet/ukg-seasons'
    }
  ];

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
        <a
          href="#"
          style={{
            padding: '0.5rem 1rem',
            color: isActive ? '#9333ea' : '#374151',
            fontWeight: 600,
            textDecoration: 'none',
            transition: 'color 0.3s',
            cursor: 'pointer',
            display: 'block'
          }}
        >
          {title}
        </a>
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
              <a
                key={idx}
                href={option.url}
                style={{
                  display: 'block',
                  padding: '0.75rem 1.5rem',
                  color: '#374151',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'all 0.2s',
                  fontWeight: 600
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
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  const MobileNavItem = ({ title, options }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <div style={{ borderBottom: '1px solid #e5e7eb' }}>
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            width: '100%',
            padding: '1rem',
            textAlign: 'left',
            fontWeight: 600,
            color: '#374151',
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '1rem'
          }}
        >
          {title}
          <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.3s' }}>▼</span>
        </button>
        {isOpen && (
          <div style={{ backgroundColor: '#f9fafb', padding: '0.5rem 0' }}>
            {options.map((option, idx) => (
              <a
                key={idx}
                href={option.url}
                style={{
                  display: 'block',
                  padding: '0.75rem 1.5rem',
                  color: '#6b7280',
                  textDecoration: 'none',
                  fontSize: '0.95rem'
                }}
              >
                {option.label}
              </a>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
    <Navbar />
      {/* Header/Navigation */}
      {/* <header style={{ backgroundColor: '#ffffff', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 50 }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '70px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <img 
                src="/wowkidsworksheet.png" 
                alt="WowKids Worksheets" 
                style={{ height: window.innerWidth <= 768 ? '80px' : '140px', width: 'auto', cursor: 'pointer' }}
              />
            </div>

            {/* Desktop Navigation 
            <nav style={{ display: window.innerWidth <= 1024 ? 'none' : 'flex', alignItems: 'center', gap: '0.5rem' }}>
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

            {/* Mobile Menu Button 
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: window.innerWidth <= 1024 ? 'flex' : 'none',
                flexDirection: 'column',
                gap: '4px',
                padding: '0.5rem',
                backgroundColor: 'transparent',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              <div style={{ width: '24px', height: '3px', backgroundColor: '#374151', borderRadius: '2px', transition: 'all 0.3s' }}></div>
              <div style={{ width: '24px', height: '3px', backgroundColor: '#374151', borderRadius: '2px', transition: 'all 0.3s' }}></div>
              <div style={{ width: '24px', height: '3px', backgroundColor: '#374151', borderRadius: '2px', transition: 'all 0.3s' }}></div>
            </button>
          </div>

          {/* Mobile Menu 
          {mobileMenuOpen && (
            <div style={{
              display: window.innerWidth <= 1024 ? 'block' : 'none',
              backgroundColor: '#ffffff',
              borderTop: '1px solid #e5e7eb',
              paddingBottom: '1rem'
            }}>
              <MobileNavItem title="Preschool +" options={dropdownOptions.preschool} />
              <MobileNavItem title="Kindergarten +" options={dropdownOptions.kindergarten} />
              <MobileNavItem title="1st Grade +" options={dropdownOptions.firstGrade} />
              <MobileNavItem title="2nd Grade +" options={dropdownOptions.secondGrade} />
              <MobileNavItem title="Blogs +" options={dropdownOptions.blogs} />
              
              <div style={{ padding: '1rem', display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <button style={{ 
                  flex: '1',
                  minWidth: '120px',
                  padding: '0.75rem 1rem', 
                  background: 'linear-gradient(135deg, #60a5fa 0%, #22d3ee 100%)', 
                  color: '#ffffff',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  border: 'none',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}>
                  🔍 Search
                </button>
                <button style={{ 
                  flex: '1',
                  minWidth: '120px',
                  padding: '0.75rem 1rem', 
                  background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 100%)', 
                  color: '#ffffff',
                  borderRadius: '9999px',
                  fontWeight: 700,
                  border: '3px dashed #ca8a04',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  boxShadow: '0 4px 6px -1px rgba(0,0,0,0.1)'
                }}>
                  Privacy Policy
                </button>
              </div>
            </div>
          )}
        </div>
      </header> */}

      {/* Hero Section */}
      <section style={{ 
        position: 'relative', 
        background: 'linear-gradient(135deg, #d1fae5 0%, #a7f3d0 40%, #fde68a 70%, #fef3c7 100%)', 
        padding: window.innerWidth <= 768 ? '3rem 1rem' : '5rem 1.5rem',
        overflow: 'hidden',
        minHeight: window.innerWidth <= 768 ? '300px' : '400px'
      }}>
        <div style={{ position: 'absolute', top: '2.5rem', left: window.innerWidth <= 768 ? '1rem' : '5rem', fontSize: window.innerWidth <= 768 ? '2.5rem' : '4rem' }}>🎓</div>
        <div style={{ position: 'absolute', top: '5rem', right: window.innerWidth <= 768 ? '1rem' : '10rem', fontSize: window.innerWidth <= 768 ? '2rem' : '3.5rem' }}>📖</div>
        <div style={{ position: 'absolute', bottom: '5rem', left: window.innerWidth <= 768 ? '0.5rem' : '2.5rem', fontSize: window.innerWidth <= 768 ? '2rem' : '3rem' }}>💡</div>
        <div style={{ position: 'absolute', bottom: '2.5rem', right: window.innerWidth <= 768 ? '1rem' : '5rem', fontSize: window.innerWidth <= 768 ? '2.5rem' : '4rem' }}>🏆</div>

        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
          <div style={{ maxWidth: '42rem' }}>
            <h1 style={{ fontSize: window.innerWidth <= 768 ? '2.5rem' : window.innerWidth <= 1024 ? '3.5rem' : '4.5rem', fontWeight: 900, color: '#1f2937', marginBottom: '1.5rem', lineHeight: 1.1 }}>
              UKG<br />
              <span style={{ 
                background: 'linear-gradient(90deg, #10b981 0%, #059669 50%, #f59e0b 100%)', 
                WebkitBackgroundClip: 'text', 
                backgroundClip: 'text',
                color: 'transparent'
              }}>
                Worksheets
              </span>
            </h1>
            <p style={{ fontSize: window.innerWidth <= 768 ? '1rem' : '1.25rem', color: '#6b7280', marginTop: '1rem' }}>
              Advanced Upper Kindergarten worksheets to prepare children for Grade 1. Perfect for building strong academic foundations for ages 4-5 years.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section style={{ background: 'linear-gradient(180deg, #10b981 0%, #059669 50%, #10b981 100%)', padding: window.innerWidth <= 768 ? '2rem 1rem' : '4rem 1.5rem' }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: window.innerWidth <= 768 ? '2rem' : window.innerWidth <= 1024 ? '2.5rem' : '3rem', 
            fontWeight: 'bold', 
            textAlign: 'center', 
            marginBottom: '2rem',
            background: 'linear-gradient(90deg, #fef3c7 0%, #fde68a 50%, #fef3c7 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent'
          }}>
            UKG Learning Resources
          </h2>

          <p style={{ color: '#ffffff', textAlign: 'center', fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem', maxWidth: '80rem', margin: '0 auto 4rem', lineHeight: 1.7, padding: '0 1rem' }}>
            Our Upper Kindergarten worksheets focus on advanced literacy, numeracy, and critical thinking skills. These comprehensive 
            worksheets help children master reading, writing complete sentences, basic math operations, and time concepts. 
            Designed specifically for 4-5 year olds preparing for primary school.
          </p>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth <= 640 ? '1fr' : window.innerWidth <= 1024 ? 'repeat(2, 1fr)' : 'repeat(auto-fit, minmax(260px, 1fr))', gap: window.innerWidth <= 768 ? '1.5rem' : '2.5rem', maxWidth: '1400px', margin: '0 auto' }}>
            {ukgWorksheets.map((worksheet) => (
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
                      style={{ 
                        width: '100%', 
                        padding: '0.875rem 1.5rem', 
                        borderRadius: '9999px',
                        fontWeight: 'bold',
                        color: '#ffffff',
                        fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
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
                      style={{ 
                        width: '100%', 
                        padding: '0.875rem 1.5rem', 
                        background: 'linear-gradient(90deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem',
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

      <WhatsAppButton 
        phoneNumber="919876543210" 
        message="Hi! I'm interested in your worksheets for kids."
      />

      <Footer/>

      {/* Footer */}
      {/* <section style={{ background: 'linear-gradient(180deg, #1e3a8a 0%, #312e81 100%)', padding: window.innerWidth <= 768 ? '2rem 1rem' : '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ marginBottom: '2rem' }}>
            <div style={{ display: 'inline-block', backgroundColor: '#ffffff', borderRadius: '1rem', padding: window.innerWidth <= 768 ? '0.75rem 1rem' : '1.25rem 1.5rem', boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1)' }}>
              <img 
                src="wowkidsworksheet.png" 
                alt="WowKids Worksheets" 
                style={{ height: window.innerWidth <= 768 ? '80px' : '140px', width: 'auto' }}
              />
            </div>
          </div>

          <p style={{ color: '#ffffff', fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            Online worksheets for kids - free worksheets, worksheets for adults, worksheets for kids, worksheets for girls, 
            worksheets for boys, worksheets for parents, worksheets for teachers and much more.
          </p>

          <p style={{ color: '#67e8f9', fontSize: window.innerWidth <= 768 ? '1rem' : '1.125rem', marginBottom: '2rem', wordBreak: 'break-word' }}>
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
                  width: window.innerWidth <= 768 ? '48px' : '56px', 
                  height: window.innerWidth <= 768 ? '48px' : '56px', 
                  borderRadius: '50%',
                  background: social.gradient,
                  color: '#ffffff',
                  fontSize: window.innerWidth <= 768 ? '1.25rem' : '1.5rem',
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

          <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: window.innerWidth <= 768 ? '0.8rem' : '0.875rem', padding: '0 1rem' }}>
            © Copyright 2025 <span style={{ fontWeight: 600, color: '#ffffff' }}>WowKids Worksheet</span> - All Rights Reserved
          </p>
        </div>
      </section> */}
    </div>
  );
};

export default KindergartenUKG;