import { FaHeart, FaGithub, FaSun } from "react-icons/fa";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <h1>Gallery</h1>
      <input type="text" />
      <FaHeart className="icon" />
      <FaSun className="icon" />
      <FaGithub className="icon" />
    </div>
  );
}

export default Navbar;
