import React from 'react';
import '../styles/app.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Properties from './Properties';
import AddProperty from './AddProperty';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Properties />} />
          <Route path="/add-property" element={<AddProperty />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
