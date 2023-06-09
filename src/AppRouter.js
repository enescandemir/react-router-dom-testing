import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import AboutMe from './Pages/AboutMe';
import Contact from './Pages/Contact';

const AppRouter = () => (
  <div>
    <Link to="/">Home<br /></Link>
    <Link to="/aboutme">About Me<br /></Link>
    <Link to="/contact">Contact<br /></Link>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/aboutme" element={<AboutMe />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </div>
);

export default AppRouter;