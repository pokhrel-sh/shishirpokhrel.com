import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import HomePage from './pages/HomePage';
import NoCode from './pages/NoCode';
import NoDemo from './pages/NoDemo';

const AppRoutes = () => (
  <Routes>
    <Route path="/me" element={<Home />} />
    <Route path="/" element={<HomePage />} />
    <Route path="/nocode" element={<NoCode />} />
    <Route path="/nodemo" element={<NoDemo />} />
  </Routes>
);

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
