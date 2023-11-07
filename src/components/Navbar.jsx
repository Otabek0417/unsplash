import { Link } from "react-router-dom";
import { useGlobalContext } from "../hooks/useGlobalContext";
// import { GlobalContext } from "../context/GlobalState";
// import { useContext } from "react";

function Navbar() {
  const { likeImages, changeMode, mode } = useGlobalContext();
  console.log(mode);
  const changeGlobalMode = () => {
    let newMode = mode === "light" ? "dark" : "light";
    changeMode(newMode);
  };

  return (
    <div className="navbar__list container">
      <Link className="logo" to="/">
        Unsplash
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/likedImages">
          LikedImg
          <span className="bage">{likeImages.length}</span>
        </Link>
        <Link to="/login">Login</Link>
        <button onClick={() => changeGlobalMode()}>Dark mode</button>
      </nav>
    </div>
  );
}

export default Navbar;
