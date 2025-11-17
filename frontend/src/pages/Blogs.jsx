// pages/BlogsPage.jsx - Tailwind CSS Version
import React from 'react';
import { Link } from 'react-router-dom';

const Blogs = () => {
  const blogPosts = [
    {
      id: 1,
      title: '10 Creative Ways to Make Learning Fun at Home',
      excerpt: 'Discover innovative methods to engage your children in educational activities that feel like play...',
      category: 'Education Tips',
      image: '/images/blog-learning-fun.jpg',
      date: 'November 10, 2025',
      author: 'Sarah Johnson',
      link: '/blogs/learning-fun'
    },
    {
      id: 2,
      title: 'The Importance of Early Math Skills',
      excerpt: 'Learn why building strong math foundations in early childhood sets the stage for future success...',
      category: 'Parenting',
      image: '/images/blog-math-skills.jpg',
      date: 'November 5, 2025',
      author: 'Michael Chen',
      link: '/blogs/early-math'
    },
    {
      id: 3,
      title: 'Best Reading Strategies for Kindergarten',
      excerpt: 'Expert-approved techniques to help your kindergartener become a confident reader...',
      category: 'Education Tips',
      image: '/images/blog-reading.jpg',
      date: 'October 28, 2025',
      author: 'Emily Roberts',
      link: '/blogs/reading-strategies'
    },
    {
      id: 4,
      title: 'Fun Science Experiments for Preschoolers',
      excerpt: 'Simple and safe science activities that spark curiosity and wonder in young minds...',
      category: 'Activities',
      image: '/images/blog-science.jpg',
      date: 'October 20, 2025',
      author: 'David Martinez',
      link: '/blogs/science-experiments'
    },
    {
      id: 5,
      title: 'How to Create a Learning-Friendly Home Environment',
      excerpt: 'Transform your home into a space that encourages learning and creativity...',
      category: 'Parenting',
      image: '/images/blog-home-environment.jpg',
      date: 'October 15, 2025',
      author: 'Jessica Brown',
      link: '/blogs/home-environment'
    },
    {
      id: 6,
      title: 'Building Social Skills Through Group Activities',
      excerpt: 'Activities that help children develop essential social and emotional skills...',
      category: 'Activities',
      image: '/images/blog-social-skills.jpg',
      date: 'October 8, 2025',
      author: 'Amanda Wilson',
      link: '/blogs/social-skills'
    }
  ];

  const categories = [
    { name: 'All Posts', count: 24, link: '/blogs' },
    { name: 'Education Tips', count: 12, link: '/blogs/education-tips' },
    { name: 'Parenting', count: 8, link: '/blogs/parenting' },
    { name: 'Activities', count: 4, link: '/blogs/activities' }
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
          <span className="text-gray-700">Blogs</span>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
            <span className="text-red-500">E</span>ducation & Parenting Blog
          </h1>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Expert tips, creative ideas, and practical advice for parents and teachers. 
            Stay updated with the latest in early childhood education.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-6 md:px-10">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-12 lg:gap-10">
            {/* Blog Posts */}
            <div className="lg:col-span-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                  >
                    <div className="aspect-w-16 aspect-h-9">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-xs">{post.date}</span>
                      </div>
                      <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-red-500 transition-colors">
                        <Link to={post.link}>{post.title}</Link>
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500 text-xs">By {post.author}</span>
                        <Link
                          to={post.link}
                          className="text-red-500 font-semibold text-sm hover:text-red-600 transition-colors"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Pagination */}
              <div className="flex justify-center gap-2 mt-12">
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Previous
                </button>
                <button className="px-4 py-2 bg-red-500 text-white rounded-lg">1</button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  2
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  3
                </button>
                <button className="px-4 py-2 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
                  Next
                </button>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4 mt-12 lg:mt-0">
              {/* Search */}
              <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Search Blog</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search articles..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                  <button className="absolute right-3 top-3 text-gray-400 hover:text-red-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <circle cx="11" cy="11" r="8"></circle>
                      <path d="m21 21-4.35-4.35"></path>
                    </svg>
                  </button>
                </div>
              </div>

              {/* Categories */}
              <div className="bg-white rounded-2xl shadow-md p-6 mb-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Categories</h3>
                <ul className="space-y-3">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <Link
                        to={category.link}
                        className="flex items-center justify-between py-2 text-gray-700 hover:text-red-500 transition-colors"
                      >
                        <span className="font-medium">{category.name}</span>
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Newsletter */}
              <div className="bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl shadow-md p-6 text-white">
                <h3 className="text-xl font-bold mb-3">Subscribe to Our Newsletter</h3>
                <p className="text-sm mb-4 opacity-90">
                  Get weekly tips and resources delivered to your inbox!
                </p>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg mb-3 text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
                />
                <button className="w-full px-6 py-3 bg-white text-red-500 font-bold rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe Now
                </button>
              </div>
            </aside>
          </div>
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
            Online worksheets for kids - free worksheets, worksheets for adults, worksheets for kids, worksheets for girls, worksheets for boys, worksheets for parents, worksheets for teachers and much more.
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

export default Blogs;