// App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";
import Reviews from "./Reviews";
import "./App.css"; // optional styling

function App() {
  return (
    <Router>
      <header className="main-header">
        <h2>E. Munoz Construction</h2>
        <nav>
          <Link to="/">Home</Link>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <Link to="/reviews">Reviews</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
