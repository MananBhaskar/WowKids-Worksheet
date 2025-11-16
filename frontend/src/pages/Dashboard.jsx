// src/pages/Dashboard.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'; // Adjust path as needed
import KidsHeroSection from '../components/KidsHeroSection';
import KidsFooter from '../components/Footer';
import WorksheetsSection from '../components/WorksheetSections.jsx';

const Dashboard = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      title: 'Kindergarten',
      image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #ec4899 0%, #f43f5e 50%, #ec4899 100%)',
      bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #ffe4e6 100%)',
      url: '/kindergarten'
    },
    {
      id: 2,
      title: 'Kindergarten Coloring',
      image: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #a78bfa 0%, #8b5cf6 50%, #a78bfa 100%)',
      bgGradient: 'linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)',
      url: '/kindergarten-coloring'
    },
    {
      id: 3,
      title: 'Kindergarten English',
      image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #22d3ee 0%, #3b82f6 50%, #22d3ee 100%)',
      bgGradient: 'linear-gradient(135deg, #ecfeff 0%, #dbeafe 100%)',
      url: '/kindergarten-english'
    },
    {
      id: 4,
      title: 'Kindergarten Science',
      image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #2dd4bf 0%, #10b981 50%, #2dd4bf 100%)',
      bgGradient: 'linear-gradient(135deg, #f0fdfa 0%, #d1fae5 100%)',
      url: '/kindergarten-science'
    },
    {
      id: 5,
      title: 'Kindergarten Math',
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #fbbf24 100%)',
      bgGradient: 'linear-gradient(135deg, #fffbeb 0%, #ffedd5 100%)',
      url: '/kindergarten-math'
    },
    {
      id: 6,
      title: 'Preschool Worksheets',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #f472b6 0%, #ec4899 50%, #f472b6 100%)',
      bgGradient: 'linear-gradient(135deg, #fdf2f8 0%, #fce7f3 100%)',
      url: '/preschool-worksheets'
    },
    {
      id: 7,
      title: '1st Grade Reading',
      image: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #fb923c 0%, #f59e0b 50%, #fb923c 100%)',
      bgGradient: 'linear-gradient(135deg, #fff7ed 0%, #ffedd5 100%)',
      url: '/1st-grade-reading'
    },
    {
      id: 8,
      title: '2nd Grade Math',
      image: 'https://images.unsplash.com/photo-1596496050755-c923e73e42e1?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #34d399 0%, #10b981 50%, #34d399 100%)',
      bgGradient: 'linear-gradient(135deg, #ecfdf5 0%, #d1fae5 100%)',
      url: '/2nd-grade-math'
    },
    {
      id: 9,
      title: 'Alphabet Learning',
      image: 'https://images.unsplash.com/photo-1455849318743-b2233052fcff?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 50%, #60a5fa 100%)',
      bgGradient: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)',
      url: '/alphabet-learning'
    },
    {
      id: 10,
      title: 'Number Practice',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=300&h=200&fit=crop',
      gradient: 'linear-gradient(135deg, #c084fc 0%, #a855f7 50%, #c084fc 100%)',
      bgGradient: 'linear-gradient(135deg, #faf5ff 0%, #f3e8ff 100%)',
      url: '/number-practice'
    }
  ];

  const handleNavigation = (url) => {
    console.log('Navigating to:', url); // Debug log
    navigate(url);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#ffffff' }}>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <KidsHeroSection/>

      {/* Main Content Section */}
    <WorksheetsSection/>

    <KidsFooter/>
    </div>
  );
};

export default Dashboard;