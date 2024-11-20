import React, { useState } from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Client/Home/Home";
import About from "./Client/About/About";
import Contact from "./Client/Contact/Contact";
import News from "./Client/News/News";
import LoginForm from "./Client/Login/LoginForm";
import RegisterForm from "./Client/Register/RegisterForm";
import "./App.css";
import CartForm from "./Client/Cart/CartForm";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/News" element={<News />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/Cart" element={<CartForm />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
