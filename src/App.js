// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";   // your home
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
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
