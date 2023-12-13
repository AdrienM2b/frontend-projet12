import React, { useState, useEffect } from 'react';
import HorizontalNavBar from './views/HorizontalNavBar';
import VerticalNavBar from './views/VerticalNavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './views/UserPage';

function App() {
  return (
    <div>
      <HorizontalNavBar />
      <VerticalNavBar />
      <Router>
        <Routes>
          <Route path='/user/:id' element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
