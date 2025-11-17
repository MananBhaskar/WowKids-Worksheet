import React, { useState } from 'react';
import { Upload, FileText, Image, Trash2, Eye, Download, LogOut, Plus, X, CheckCircle, AlertCircle } from 'lucide-react';

export default function AdminDashboard() {
  const [worksheets, setWorksheets] = useState([
    {
      id: 1,
      title: 'Alphabet Tracing A-Z',
      category: 'Preschool',
      subject: 'English',
      grade: 'Preschool',
      thumbnail: '/api/placeholder/300/200',
      uploadDate: '2024-11-15',
      downloads: 245
    },
    {
      id: 2,
      title: 'Numbers 1-10 Practice',
      category: 'Kindergarten',
      subject: 'Math',
      grade: 'Kindergarten - Nursery',
      thumbnail: '/api/placeholder/300/200',
      uploadDate: '2024-11-14',
      downloads: 189
    }
  ]);

  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    category: 'Preschool',
    subject: 'English',
    grade: '',
    description: '',
    thumbnail: null,
    worksheetFile: null
  });
  const [notification, setNotification] = useState(null);

  const categories = ['Preschool', 'Kindergarten', '1st Grade', '2nd Grade'];
  const subjects = ['English', 'Math', 'Science', 'Grammar', 'Practice', 'Activities', 'Tracing', 'Homework'];
  
  const gradeOptions = {
    'Preschool': ['Preschool'],
    'Kindergarten': ['Nursery', 'LKG', 'UKG'],
    '1st Grade': ['1st Grade'],
    '2nd Grade': ['2nd Grade']
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUploadForm(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'category' && { grade: '' })
    }));
  };

  const handleFileChange = (e, type) => {
    const file = e.target.files[0];
    if (file) {
      setUploadForm(prev => ({ ...prev, [type]: file }));
    }
  };

  const handleUpload = () => {
    if (!uploadForm.title || !uploadForm.grade || !uploadForm.worksheetFile) {
      showNotification('Please fill all required fields', 'error');
      return;
    }

    const newWorksheet = {
      id: Date.now(),
      title: uploadForm.title,
      category: uploadForm.category,
      subject: uploadForm.subject,
      grade: uploadForm.grade,
      description: uploadForm.description,
      thumbnail: uploadForm.thumbnail ? URL.createObjectURL(uploadForm.thumbnail) : '/api/placeholder/300/200',
      uploadDate: new Date().toISOString().split('T')[0],
      downloads: 0
    };

    setWorksheets(prev => [newWorksheet, ...prev]);
    setShowUploadModal(false);
    setUploadForm({
      title: '',
      category: 'Preschool',
      subject: 'English',
      grade: '',
      description: '',
      thumbnail: null,
      worksheetFile: null
    });
    showNotification('Worksheet uploaded successfully!', 'success');
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this worksheet?')) {
      setWorksheets(prev => prev.filter(w => w.id !== id));
      showNotification('Worksheet deleted successfully', 'success');
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      window.location.href = '/admin/login';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
              <p className="text-sm text-gray-500">Manage worksheets and content</p>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-red-600 transition"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Notification */}
      {notification && (
        <div className={`fixed top-20 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg ${
          notification.type === 'success' ? 'bg-green-50 text-green-800 border border-green-200' : 'bg-red-50 text-red-800 border border-red-200'
        }`}>
          {notification.type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
          {notification.message}
        </div>
      )}

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Worksheets</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{worksheets.length}</p>
              </div>
              <FileText className="w-10 h-10 text-blue-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Downloads</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{worksheets.reduce((sum, w) => sum + w.downloads, 0)}</p>
              </div>
              <Download className="w-10 h-10 text-green-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Preschool</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{worksheets.filter(w => w.category === 'Preschool').length}</p>
              </div>
              <FileText className="w-10 h-10 text-purple-500" />
            </div>
          </div>
          <div className="bg-white rounded-lg shadow p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Kindergarten</p>
                <p className="text-3xl font-bold text-gray-900 mt-1">{worksheets.filter(w => w.category === 'Kindergarten').length}</p>
              </div>
              <FileText className="w-10 h-10 text-orange-500" />
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Worksheets Library</h2>
          <button
            onClick={() => setShowUploadModal(true)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            <Plus className="w-5 h-5" />
            Upload New Worksheet
          </button>
        </div>

        {/* Worksheets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {worksheets.map(worksheet => (
            <div key={worksheet.id} className="bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative h-48 bg-gray-200">
                <img src={worksheet.thumbnail} alt={worksheet.title} className="w-full h-full object-cover" />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                  {worksheet.category}
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-gray-900 mb-1">{worksheet.title}</h3>
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                  <span className="bg-gray-100 px-2 py-1 rounded">{worksheet.subject}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">{worksheet.grade}</span>
                </div>
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>Uploaded: {worksheet.uploadDate}</span>
                  <span>{worksheet.downloads} downloads</span>
                </div>
                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-1 px-3 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition text-sm">
                    <Eye className="w-4 h-4" />
                    Preview
                  </button>
                  <button
                    onClick={() => handleDelete(worksheet.id)}
                    className="flex items-center justify-center gap-1 px-3 py-2 bg-red-50 text-red-600 rounded hover:bg-red-100 transition text-sm"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
              <h3 className="text-xl font-semibold text-gray-900">Upload New Worksheet</h3>
              <button
                onClick={() => setShowUploadModal(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Worksheet Title *
                </label>
                <input
                  type="text"
                  name="title"
                  value={uploadForm.title}
                  onChange={handleInputChange}
                  placeholder="e.g., Alphabet Tracing A-Z"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                />
              </div>

              {/* Category & Subject */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Category *
                  </label>
                  <select
                    name="category"
                    value={uploadForm.category}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject *
                  </label>
                  <select
                    name="subject"
                    value={uploadForm.subject}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                  >
                    {subjects.map(sub => (
                      <option key={sub} value={sub}>{sub}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Grade */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Grade/Level *
                </label>
                <select
                  name="grade"
                  value={uploadForm.grade}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="">Select Grade</option>
                  {gradeOptions[uploadForm.category]?.map(grade => (
                    <option key={grade} value={grade}>{grade}</option>
                  ))}
                </select>
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={uploadForm.description}
                  onChange={handleInputChange}
                  rows="3"
                  placeholder="Brief description of the worksheet..."
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none"
                />
              </div>

              {/* File Uploads */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Thumbnail Image
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={(e) => handleFileChange(e, 'thumbnail')}
                      className="hidden"
                      id="thumbnail"
                    />
                    <label htmlFor="thumbnail" className="cursor-pointer">
                      <Image className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {uploadForm.thumbnail ? uploadForm.thumbnail.name : 'Click to upload'}
                      </p>
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Worksheet PDF *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-500 transition cursor-pointer">
                    <input
                      type="file"
                      accept=".pdf"
                      onChange={(e) => handleFileChange(e, 'worksheetFile')}
                      className="hidden"
                      id="worksheet"
                    />
                    <label htmlFor="worksheet" className="cursor-pointer">
                      <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-600">
                        {uploadForm.worksheetFile ? uploadForm.worksheetFile.name : 'Click to upload'}
                      </p>
                    </label>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowUploadModal(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUpload}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Upload Worksheet
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}