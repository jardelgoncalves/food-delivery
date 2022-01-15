import Home from 'pages/Home';
import Menu from 'pages/Menu';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </Router>
  );
}
