import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import StudentCard from './components/StudentCard';
import CalculatorPage from './components/CalculatorPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StudentCard />} />
        <Route path="/calculator" element={<CalculatorPage />} />
      </Routes>
    </Router>
  );
}

export default App;