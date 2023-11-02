import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar__list container">
      <Link className="logo" to="/">
        Unsplash
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  );
}

export default Navbar;
