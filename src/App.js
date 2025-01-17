// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./LandingPage";   // your home
import Reviews from "./Reviews";           // your reviews page

function App() {
  return (
    <Router>
      {/* Nav at the top with links */}
      <nav style={{ background: "#eee", padding: "1rem" }}>
        <Link to="/" style={{ marginRight: "1rem" }}>Home</Link>
        <Link to="/reviews">Reviews</Link>
      </nav>

      {/* Define routes */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
