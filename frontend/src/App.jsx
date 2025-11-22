import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard.jsx';
import PreschoolTracing from './pages/PreschoolTracing.jsx';
import PreschoolMath from './pages/PreschoolMath.jsx';
import PreschoolEnglish from './pages/PreschoolEnglish.jsx';
import PreschoolScience from './pages/PreschoolScience.jsx';
import PreschoolHomework from './pages/PreschoolHomework.jsx';
import PreschoolPractice from './pages/PreschoolPractice.jsx';
import KindergartenNursery from './pages/KindergartenNursery.jsx';
import KindergartenLKG from './pages/KindergartenLKG.jsx';
import KindergartenUKG from './pages/KindergartenUKG.jsx';
import FirstGradeEnglish from './pages/FirstGradeEnglish.jsx';
import FirstGradeMath from './pages/FirstGradeMath.jsx';
import FirstGradeScience from './pages/FirstGradeScience.jsx';
import FirstGradeSocialStudies from './pages/FirstGradeSocialStudies.jsx';
import SecondGradeScience from './pages/SecondGradeScience.jsx';
import SecondGradeMath from './pages/SecondGradeMath.jsx';
import SecondGradeEnglish from './pages/SecondGradeEnglish.jsx';
import SecondGradeSocialStudies from './pages/SecondGradeSocialStudies.jsx';
import TeachingMethods from './pages/TeachingMethods.jsx';
// import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function App() {
  return (
    <div className="App min-h-screen bg-white">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/preschool-tracing" element={<PreschoolTracing />} />
        <Route path="/preschool-english" element={<PreschoolEnglish />} />
        <Route path="/preschool-math" element={<PreschoolMath />} />
        <Route path="/preschool-science" element={<PreschoolScience />} />
        <Route path="/preschool-homework" element={<PreschoolHomework />} />
        <Route path="/preschool-practice" element={<PreschoolPractice />} />
        <Route path="/kindergarten-nursery" element={<KindergartenNursery />} />
        <Route path="/kindergarten-lkg" element={<KindergartenLKG />} />
        <Route path="/kindergarten-ukg" element={<KindergartenUKG />} />
        <Route path="/1st-grade-english" element={<FirstGradeEnglish />} />
        <Route path="/1st-grade-math" element={<FirstGradeMath />} />
        <Route path="/1st-grade-science" element={<FirstGradeScience />} />
        <Route path="/1st-grade-social-studies" element={<FirstGradeSocialStudies />} />
        <Route path="/2nd-grade-english" element={<SecondGradeEnglish />} />
        <Route path="/2nd-grade-math" element={<SecondGradeMath />} />
        <Route path="/2nd-grade-science" element={<SecondGradeScience />} />
        <Route path="/2nd-grade-social-studies" element={<SecondGradeSocialStudies />} />
        <Route path="/blog-teaching-methods" element={<TeachingMethods />} />
        {/* <Route path='/privacy-policy' element={<PrivacyPolicy />} /> */}
        <Route path="*" element={<div>404 Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
