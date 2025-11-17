// pages/WorksheetDetail.jsx - Updated for All Categories
import React, { useState, useEffect } from 'react';
import { useParams, Link, useLocation } from 'react-router-dom';

const WorksheetDetail = ({ category }) => {
  const { subcategory } = useParams();
  const location = useLocation();
  const [worksheets, setWorksheets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Determine category from URL if not passed as prop
  const currentCategory = category || location.pathname.split('/')[1];

  const categoryTitles = {
    preschool: 'Preschool',
    kindergarten: 'Kindergarten',
    grade1: '1st Grade',
    grade2: '2nd Grade'
  };

  useEffect(() => {
    fetchWorksheets();
  }, [subcategory, currentCategory]);

  const fetchWorksheets = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/worksheets/${currentCategory}/${subcategory}`);
      const data = await response.json();
      setWorksheets(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching worksheets:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-2xl font-semibold text-gray-600">Loading...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-gray-200 px-6 md:px-10 py-5">
        <div className="max-w-7xl mx-auto flex items-center text-sm flex-wrap">
          <Link to="/" className="text-gray-700 hover:text-red-500 transition-colors">
            Home
          </Link>
          <span className="mx-3 text-gray-500">›</span>
          <Link to={`/${currentCategory}`} className="text-gray-700 hover:text-red-500 transition-colors">
            {categoryTitles[currentCategory]}
          </Link>
          <span className="mx-3 text-gray-500">›</span>
          <span className="text-gray-700 capitalize">{subcategory?.replace('-', ' ')}</span>
        </div>
      </div>

      {/* Header */}
      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-6 capitalize">
            {subcategory?.replace('-', ' ')} Worksheets
          </h1>
          <p className="text-base md:text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Download and print these amazing {subcategory?.replace('-', ' ')} worksheets for {categoryTitles[currentCategory]}. 
            Each worksheet is carefully designed to enhance learning and development.
          </p>
        </div>
      </section>

      {/* Worksheets Grid */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          {worksheets.length === 0 ? (
            <div className="text-center py-20">
              <div className="mb-6">
                <svg className="w-24 h-24 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-semibold text-gray-600 mb-4">
                No worksheets found for this category yet.
              </h2>
              <p className="text-gray-500 mb-8">
                We're constantly adding new content. Please check back soon!
              </p>
              <Link
                to={`/${currentCategory}`}
                className="inline-block px-8 py-3 bg-yellow-400 text-white font-bold rounded-full hover:bg-yellow-500 transition-all"
              >
                Back to {categoryTitles[currentCategory]}
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {worksheets.map((worksheet) => (
                <div
                  key={worksheet._id}
                  className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
                >
                  <div className="aspect-w-16 aspect-h-9 bg-gray-200">
                    <img
                      src={worksheet.image}
                      alt={worksheet.title}
                      className="w-full h-64 object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">
                      {worksheet.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {worksheet.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {worksheet.tags?.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                          {worksheet.views || 0}
                        </span>
                        <span className="flex items-center gap-1">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                          {worksheet.downloads || 0}
                        </span>
                      </div>
                      <a
                        href={worksheet.pdfUrl}
                        download
                        className="px-6 py-2 bg-yellow-400 text-white font-bold rounded-full hover:bg-yellow-500 transition-all hover:scale-105"
                      >
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Back Button */}
      <div className="text-center pb-12">
        <Link
          to={`/${currentCategory}`}
          className="inline-block px-10 py-3 bg-gray-700 text-white font-bold rounded-full hover:bg-gray-800 transition-all"
        >
          ← Back to {categoryTitles[currentCategory]} Categories
        </Link>
      </div>
    </div>
  );
};

export default WorksheetDetail;