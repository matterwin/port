import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Core/Home/Home';

import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route caseSensitive path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
