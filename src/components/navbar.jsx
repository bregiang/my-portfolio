import { Link } from "react-router-dom";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Bre.
      </Link>

      <div className="navbar-links">
        <Link to="/">About</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/writing">Writing</Link>
        <Link to="/photography">Photography</Link>
        <Link to="/marketing">Marketing</Link>
        <Link to="/pharmacy">Pharmacy</Link>
        <Link to="/education">Education</Link>
      </div>
    </nav>
  );
}

export default Navbar;