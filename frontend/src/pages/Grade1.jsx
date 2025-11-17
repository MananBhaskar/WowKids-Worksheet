// pages/Grade1Page.jsx - Tailwind CSS Version
import React from 'react';
import { Link } from 'react-router-dom';

const Grade1 = () => {
  const worksheetCategories = [
    {
      id: 1,
      title: 'Reading Comprehension',
      color: 'bg-indigo-600',
      image: '/images/grade1-reading.png',
      link: '/grade1/reading'
    },
    {
      id: 2,
      title: 'Writing Skills',
      color: 'bg-teal-600',
      image: '/images/grade1-writing.png',
      link: '/grade1/writing'
    },
    {
      id: 3,
      title: 'Math Problems',
      color: 'bg-blue-500',
      image: '/images/grade1-math.png',
      link: '/grade1/math'
    },
    {
      id: 4,
      title: 'Science Exploration',
      color: 'bg-green-500',
      image: '/images/grade1-science.png',
      link: '/grade1/science'
    },
    {
      id: 5,
      title: 'Grammar Practice',
      color: 'bg-purple-500',
      image: '/images/grade1-grammar.png',
      link: '/grade1/grammar'
    },
    {
      id: 6,
      title: 'Spelling Words',
      color: 'bg-pink-600',
      image: '/images/grade1-spelling.png',
      link: '/grade1/spelling'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-200 px-6 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex items-center text-sm">
          <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">
            Home
          </Link>
          <span className="mx-3 text-gray-500">›</span>
          <span className="text-gray-700">1st Grade</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center text-gray-800 mb-8">
            <span className="text-red-500">F</span>ree Printable 1st Grade Worksheets
          </h1>
          <p className="text-base md:text-lg leading-relaxed text-gray-600 text-justify max-w-5xl mx-auto">
            Discover our extensive collection of 1st grade worksheets designed to help young learners master essential skills. From reading comprehension to math problems, our worksheets provide engaging activities that support classroom learning and homework practice. Perfect for first grade teachers and parents committed to their child's academic success.
          </p>
        </div>
      </section>

      {/* Worksheets Grid */}
      <section className="py-12 md:py-16 px-6 md:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {worksheetCategories.map((category) => (
            <div
              key={category.id}
              className="bg-white rounded-3xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Card Header */}
              <div className="bg-yellow-200 py-4 rounded-t-3xl">
                <div className="flex justify-center gap-3">
                  <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
                  <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
                  <div className="w-9 h-9 bg-gray-800 rounded-full"></div>
                </div>
              </div>

              {/* Card Image */}
              <div className={`${category.color} py-8 px-6 flex flex-col items-center justify-center min-h-[280px]`}>
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full max-w-[250px] h-auto rounded-lg shadow-lg mb-4"
                />
                <h3 className="text-white font-bold text-xl text-center text-shadow-lg bg-black bg-opacity-20 px-4 py-2 rounded">
                  {category.title.toUpperCase()}
                </h3>
              </div>

              {/* Card Body */}
              <div className="p-6 text-center bg-white">
                <h4 className="text-gray-800 font-semibold text-lg mb-5 min-h-[60px] flex items-center justify-center">
                  {category.title}
                </h4>
                <Link
                  to={category.link}
                  className="inline-block px-10 py-3 bg-yellow-400 text-white font-bold rounded-full border-4 border-dashed border-white outline outline-4 outline-yellow-400 hover:bg-yellow-500 hover:outline-yellow-500 transition-all duration-300 hover:scale-105"
                >
                  View Detail
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-700 to-gray-800 text-white py-12 md:py-16 mt-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <img
            src="/images/logo.png"
            alt="Online Worksheets Kids"
            className="max-w-xs mx-auto mb-8"
          />

          <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-8 max-w-5xl mx-auto">
            Online worksheets for kids - free worksheets, worksheets for adults, worksheets for kids, worksheets for girls, worksheets for boys, worksheets for parents, worksheets for teachers and much more. Online worksheets for kids is a site that offers a wide range of printable worksheets for children of all ages, moreover these worksheets are free of all charges and available online.
          </p>

          <div className="mb-8">
            <p className="text-sm md:text-base">
              Contact Us:{' '}
              <a
                href="mailto:support@onlineworksheetsforkids.com"
                className="text-yellow-400 font-semibold hover:underline"
              >
                support@onlineworksheetsforkids.com
              </a>
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-5 mb-10">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 rounded-full flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.54 6.42a2.78 2.78 0 00-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 00-1.94 2A29 29 0 001 11.75a29 29 0 00.46 5.33A2.78 2.78 0 003.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 001.94-2 29 29 0 00.46-5.25 29 29 0 00-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
            <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-red-700 rounded-full flex items-center justify-center text-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.14 2.53 7.69 6.13 9.2-.08-.73-.16-1.86.03-2.66.18-.72 1.16-4.93 1.16-4.93s-.3-.59-.3-1.47c0-1.38.8-2.41 1.8-2.41.85 0 1.26.64 1.26 1.4 0 .86-.54 2.14-.83 3.33-.24 1 .5 1.81 1.49 1.81 1.78 0 3.15-1.88 3.15-4.58 0-2.4-1.72-4.07-4.18-4.07-2.85 0-4.52 2.13-4.52 4.34 0 .86.33 1.78.74 2.28.08.1.09.19.07.29l-.27 1.1c-.04.18-.15.22-.35.13-1.25-.58-2.03-2.4-2.03-3.87 0-3.15 2.29-6.05 6.6-6.05 3.47 0 6.17 2.47 6.17 5.77 0 3.44-2.17 6.21-5.18 6.21-1.01 0-1.96-.53-2.29-1.15l-.62 2.37c-.23.87-.84 1.96-1.25 2.63.94.29 1.95.45 3 .45 5.52 0 10-4.48 10-10S17.52 2 12 2z"></path>
              </svg>
            </a>
          </div>

          <p className="text-sm border-t border-gray-600 pt-6">
            © Copyright 2025{' '}
            <Link to="/" className="text-yellow-400 font-semibold hover:underline">
              Online Worksheets
            </Link>{' '}
            - All Rights Reserved
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Grade1;