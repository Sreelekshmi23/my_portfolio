import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TechPortfolio from './pages/TechPortfolio';
import ArtPortfolio from './pages/ArtPortfolio';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TechPortfolio />} />
      <Route path="/art" element={<ArtPortfolio />} />
    </Routes>
  );
}

export default App;
