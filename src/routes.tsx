import Home from 'pages/Home';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}
