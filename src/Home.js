// LandingPage.js
import React from "react";
import "./Home.css"; // We'll move the style rules to a separate file (recommended)

function LandingPage() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <header>
        <h2>E. Munoz Construction</h2>
        <nav>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <div className="hero">
        <h1>Building Your Future, One Project at a Time</h1>
      </div>

      <main>
        <section id="about">
          <h2>About Us</h2>
          <p>
            At E. Munoz Construction, we bring decades of experience to your
            residential or commercial construction project. We’re a family-owned
            business dedicated to quality, integrity, and customer satisfaction.
          </p>
          <p>
            Our team of skilled professionals will work with you at every
            step—from the initial design to the final walkthrough—to ensure your
            vision becomes a reality.
          </p>
        </section>

        <section id="services">
          <h2>Our Services</h2>
          <ul>
            <li>Residential Construction &amp; Remodeling</li>
            <li>Commercial Construction</li>
            <li>New Additions &amp; Extensions</li>
            <li>Kitchen &amp; Bathroom Renovations</li>
            <li>Custom Carpentry &amp; Cabinetry</li>
          </ul>
          <p>
            We take pride in every project, no matter how big or small. Our
            commitment to excellence and attention to detail ensure that every
            job is completed on time and within budget.
          </p>
        </section>

        <section id="contact">
          <h2>Contact Us</h2>
          <p>Ready to start your next construction project? Reach out to us today!</p>
          <p>
            <strong>Email:</strong> info@emunozconstruction.com
          </p>
          <p>
            <strong>Phone:</strong> (555) 123-4567
          </p>
          <p>
            <strong>Address:</strong> 123 Main Street, Hometown, USA
          </p>
        </section>
      </main>

      <footer>
        <p>
          &copy; {currentYear} E. Munoz Construction. All Rights Reserved.
        </p>
      </footer>
    </>
  );
}

export default LandingPage;
