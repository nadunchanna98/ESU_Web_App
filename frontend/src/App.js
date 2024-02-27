import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './pages/layout/NavBar';
import FooterBar from './pages/layout/FooterBar';
import { AuthProvider } from './common/context';

import Home from './pages/user/HomePage';
import Aboutus from './pages/user/Aboutus';
import Gallery from './pages/user/Gallery';
import ContactUs from './pages/user/ContactUs';



function App() {
  return (
    <AuthProvider>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <FooterBar />
      </AuthProvider>
  );
}

export default App;
