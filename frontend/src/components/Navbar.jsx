import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleDropdown = (menu) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const menuItems = {
    preschool: [
      { name: 'Preschool Tracing', path: '/preschool-tracing' },
      { name: 'English', path: '/preschool-english' },
      { name: 'Math', path: '/preschool-math' },
      { name: 'Science', path: '/preschool-science' },
      { name: 'Homework', path: '/preschool-homework' },
      { name: 'Practice', path: '/preschool-practice' },
      // { name: 'Activity', path: '/preschool-activity' }
    ],
    kindergarten: [
      { name: 'Nursery', path: '/kindergarten-nursery' },
      { name: 'LKG', path: '/kindergarten-lkg' },
      { name: 'UKG', path: '/kindergarten-ukg' }
    ],
    firstGrade: [
      { name: '1st Grade English', path: '/1st-grade-english' },
      { name: '1st Grade Math', path: '/1st-grade-math' },
      { name: '1st Grade Science', path: '/1st-grade-science' },
      { name: '1st Grade Social Studies', path: '/1st-grade-social-studies' }
    ],
    secondGrade: [
      { name: '2nd Grade English', path: '/2nd-grade-english' },
      { name: '2nd Grade Math', path: '/2nd-grade-math' },
      { name: '2nd Grade Science', path: '/2nd-grade-science' },
      { name: '2nd Grade Social Studies', path: '/2nd-grade-social-studies' }
    ],
    blogs: [
      { name: 'Educational Tips', path: '/blog-educational-tips' },
      { name: 'Learning Activities', path: '/blog-learning-activities' },
      { name: 'Parent Resources', path: '/blog-parent-resources' },
      { name: 'Teaching Methods', path: '/blog-teaching-methods' }
    ]
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img 
              src="/wowkidsworksheet.png" 
              alt="WowKids Worksheets" 
              className="h-[140px] w-auto cursor-pointer" 
            />
          </Link>
          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="lg:hidden text-3xl text-gray-800 focus:outline-none"
          >
            ☰
          </button>
          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-6">
            {/* Preschool Dropdown */}
            <li className="relative group">
              <button className="px-4 py-2 bg-yellow-400 text-gray-800 font-semibold rounded-lg hover:bg-yellow-500 transition-colors flex items-center gap-1">
                Preschool +
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-2 border-dashed border-purple-300">
                <div className="py-2">
                  {menuItems.preschool.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold border-l-4 border-transparent hover:border-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* Kindergarten Dropdown */}
            <li className="relative group">
              <button className="px-4 py-2 text-gray-800 font-semibold hover:text-red-500 transition-colors">
                Kindergarten +
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-2 border-dashed border-purple-300">
                <div className="py-2">
                  {menuItems.kindergarten.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold border-l-4 border-transparent hover:border-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* 1st Grade Dropdown */}
            <li className="relative group">
              <button className="px-4 py-2 text-gray-800 font-semibold hover:text-red-500 transition-colors">
                1st Grade +
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-2 border-dashed border-purple-300">
                <div className="py-2">
                  {menuItems.firstGrade.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold border-l-4 border-transparent hover:border-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* 2nd Grade Dropdown */}
            <li className="relative group">
              <button className="px-4 py-2 text-gray-800 font-semibold hover:text-red-500 transition-colors">
                2nd Grade +
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-2 border-dashed border-purple-300">
                <div className="py-2">
                  {menuItems.secondGrade.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold border-l-4 border-transparent hover:border-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* Blogs Dropdown */}
            <li className="relative group">
              <button className="px-4 py-2 text-gray-800 font-semibold hover:text-red-500 transition-colors">
                Blogs +
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border-2 border-dashed border-purple-300">
                <div className="py-2">
                  {menuItems.blogs.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-6 py-3 text-gray-800 hover:bg-purple-50 hover:text-purple-600 transition-colors font-semibold border-l-4 border-transparent hover:border-purple-600"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
          </ul>
          {/* Actions */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white hover:from-blue-500 hover:to-cyan-500 hover:scale-110 transition-all text-2xl">
              🔍
            </button>
            <Link
              to="/privacy-policy"
              className="px-6 py-3 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full border-4 border-dashed border-amber-600 hover:from-amber-500 hover:to-orange-600 hover:scale-105 transition-all whitespace-nowrap shadow-lg"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            mobileMenuOpen ? 'max-h-[800px] pb-4' : 'max-h-0'
          }`}
        >
          <ul className="flex flex-col gap-2 pt-4 border-t border-gray-200">
            {/* Preschool Mobile Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('preschool')}
                className="w-full text-left px-4 py-3 bg-yellow-400 text-gray-800 font-semibold rounded-lg hover:bg-yellow-500 transition-colors"
              >
                Preschool +
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'preschool' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="bg-purple-50 rounded-lg p-2 border-2 border-dashed border-purple-300">
                  {menuItems.preschool.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* Kindergarten Mobile Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('kindergarten')}
                className="w-full text-left px-4 py-3 text-gray-800 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              >
                Kindergarten +
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'kindergarten' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="bg-purple-50 rounded-lg p-2 border-2 border-dashed border-purple-300">
                  {menuItems.kindergarten.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* 1st Grade Mobile Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('firstGrade')}
                className="w-full text-left px-4 py-3 text-gray-800 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              >
                1st Grade +
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'firstGrade' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="bg-purple-50 rounded-lg p-2 border-2 border-dashed border-purple-300">
                  {menuItems.firstGrade.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* 2nd Grade Mobile Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('secondGrade')}
                className="w-full text-left px-4 py-3 text-gray-800 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              >
                2nd Grade +
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'secondGrade' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="bg-purple-50 rounded-lg p-2 border-2 border-dashed border-purple-300">
                  {menuItems.secondGrade.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            {/* Blogs Mobile Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown('blogs')}
                className="w-full text-left px-4 py-3 text-gray-800 font-semibold hover:bg-gray-100 rounded-lg transition-colors"
              >
                Blogs +
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  activeDropdown === 'blogs' ? 'max-h-96 mt-2' : 'max-h-0'
                }`}
              >
                <div className="bg-purple-50 rounded-lg p-2 border-2 border-dashed border-purple-300">
                  {menuItems.blogs.map((item, index) => (
                    <Link
                      key={index}
                      to={item.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-purple-100 hover:text-purple-600 rounded transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </li>
            <li className="flex gap-3 pt-2">
              <button className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full flex items-center justify-center text-white text-xl">
                🔍
              </button>
              <Link
                to="/privacy-policy"
                className="flex-1 px-5 py-2 bg-gradient-to-r from-amber-400 to-orange-500 text-white font-bold rounded-full text-center border-4 border-dashed border-amber-600"
                onClick={() => setMobileMenuOpen(false)}
              >
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;