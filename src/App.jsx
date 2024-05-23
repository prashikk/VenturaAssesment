import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IPOListPage from './components/IPOListPage';
import IPODetailsPage from './components/IPODetailsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<IPOListPage />} />
        <Route path="/ipo/:id" element={<IPODetailsPage />} />
      </Routes>
    </Router>
  );
}

export default App;



