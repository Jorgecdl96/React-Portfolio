import React from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import './styles/App.css'
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className='App'>
        <Router>
          <Header/>
          <Routes>
            <Route path='/about-me' index element={<AboutMe/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/resume' element={<Resume/>} />
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;