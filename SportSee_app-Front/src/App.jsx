import React from 'react';
import HorizontalNavBar from './views/HorizontalNavBar';
import VerticalNavBar from './views/VerticalNavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UserPage from './views/UserPage';

function App() {
  return (
    <>
      <HorizontalNavBar />
      <VerticalNavBar />
      <Router>
        <Routes>
          <Route path='/user/:id' element={<UserPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
