import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from '../src/Client/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
