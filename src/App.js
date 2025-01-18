import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Reviews from "./Reviews";
import Contact from "./Contact"; // if you made a separate contact file

function App() {

  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Example: 2 second loading
    const timer = setTimeout(() => {
      // Start fade out
      setFadeOut(true);

      // Actually unmount the loader after 1 second fade
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

  return <Home />;
}
//   return (
//     <Router>
//       <header>
//         <h2>E. Munoz Construction</h2>
//         <nav>
//           <Link to="/">Home</Link>
//           <Link to="/about">About Us</Link>
//           <Link to="/services">Services</Link>
//           <Link to="/reviews">Reviews</Link>
//           <Link to="/contact">Contact</Link>
//         </nav>
//       </header>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/reviews" element={<Reviews />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </Router>
//   );
// }

export default App;
