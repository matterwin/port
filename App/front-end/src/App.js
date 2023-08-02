import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from './Core/Home/Home';
import Nav from './Core/Nav/Nav';

import './fonts/fonts.css'
import './App.css';

function App() {
  return (
    <div>

      <Nav />

      <Router>
        <Routes>
          <Route caseSensitive path="/" element={<Home />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
