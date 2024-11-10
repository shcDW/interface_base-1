import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';   
import Hero from './components/Hero';       
import Footer from './components/Footer';   
import HomePage from './pages/HomePage';
import ModelsPage from './pages/ModelsPage';
import AboutPage from './pages/AboutPage';
import GlobalStyles from './Styles/GlobalStyles';  

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/models" element={<ModelsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;