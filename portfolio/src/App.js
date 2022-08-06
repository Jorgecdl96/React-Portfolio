import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
            <Route path='/React-Portfolio' element={ <Navigate to='/about-me' />} />
            <Route path='/about-me' element={<AboutMe/>} />
            <Route path='/portfolio' element={<Portfolio/>} />
            <Route path='/contact' element={<Contact/>} />
            <Route path='/resume' element={<Resume/>} />
            <Route path='*' element={
              <div>
                <h2>404 Page not found</h2>
              </div>
              }
            />
          </Routes>
          <Footer/>
        </Router>
      </div>
  );
}

export default App;