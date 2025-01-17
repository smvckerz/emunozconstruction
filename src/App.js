// import React from "react";
// import Home from "./Home";

// function App() {
//   return <Home />;
// }

// export default App;

// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Reviews from "./Reviews"; // the new component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </Router>
  );
}

export default App;
