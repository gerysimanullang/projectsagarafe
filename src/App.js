// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Page from './Components/Page';

// Komponen Home
const Home = () => {
  return <div>Halaman Home</div>;
}

// Komponen CertificationHistory
const CertificationHistory = () => {
  return <div>Halaman Certification History</div>;
}

// Komponen FAQ
const FAQ = () => {
  return <div>Halaman FAQ</div>;
}

// Komponen Profile
const Profile = () => {
  return <div>Halaman Profile</div>;
}

const App = () => {
  return (
    <Router>
      <div>
        {/* Panggil Navbar di atas */}
        <Navbar />
        <Page />

        {/* Gunakan Routes untuk menentukan rute */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/certifications" element={<CertificationHistory />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
