import React from "react";
import "./Home.css"; 

function About() {
  return (
    <div>
      <h1>About Section</h1>
      <p>This is where you’d put info about your company or page.</p>
      {/* Maybe you want to render the <Reviews /> component here? */}
      <Reviews />
    </div>
  );
}

export default About;
