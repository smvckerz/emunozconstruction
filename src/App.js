// App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact";

function App() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Example: show loader for 2 seconds, then fade out
    const timer = setTimeout(() => {
      setFadeOut(true);

      // After 1s of fade, remove loader
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className={`fade-wrapper ${fadeOut ? "fade-out" : ""}`}>
        <div className="loading-spinner"></div>
      </div>
    );
  }

  // Once done loading, render the Router
  return (
    <Router>
      <header>
        <h2>E. Munoz Construction</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About Us</Link>
          <Link to="/services">Services</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;