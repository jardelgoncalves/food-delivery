import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Home from 'pages/Home';
import Menu from 'pages/Menu';
import AboutUs from 'pages/AboutUs';
import Contact from 'pages/Contact';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}
