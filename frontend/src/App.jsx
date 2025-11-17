import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import PreschoolTracing from './pages/PreschoolTracing.jsx';
import PreschoolMath from './pages/PreschoolMath.jsx';
import PreschoolEnglish from './pages/PreschoolEnglish.jsx';
import PreschoolScience from './pages/PreschoolScience.jsx';
import PreschoolHomework from './pages/PreschoolHomework.jsx';
import PreschoolPractice from './pages/PreschoolPractice.jsx';
import Kindergarten from './pages/Kindergarten.jsx';
import KindergartenNursery from './pages/KindergartenNursery.jsx';
import KindergartenLKG from './pages/KindergartenLKG.jsx';
import KindergartenUKG from './pages/KindergartenUKG.jsx';
import AdminAuth from './pages/AdminAuth.jsx'; // Add this import
import AdminDashboard from './pages/AdminDashboard.jsx';
// import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/admin/login" element={<AdminAuth />} /> {/* Add this route */}
        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/preschool-tracing" element={<PreschoolTracing />} />
        <Route path="/preschool-english" element={<PreschoolEnglish />} />
        <Route path="/preschool-math" element={<PreschoolMath />} />
        <Route path="/preschool-science" element={<PreschoolScience />} />
        <Route path="/preschool-homework" element={<PreschoolHomework />} />
        <Route path="/preschool-practice" element={<PreschoolPractice />} />
        <Route path="/kindergarten-nursery" element={<KindergartenNursery />} />
        <Route path="/kindergarten-lkg" element={<KindergartenLKG />} />
        <Route path="/kindergarten-ukg" element={<KindergartenUKG />} />
        {/* <Route path="/privacy-policy" element={<PrivacyPolicy />} /> */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;