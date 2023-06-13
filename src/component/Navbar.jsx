import { FaHeart, FaGithub, FaSun } from "react-icons/fa";
import styles from "./Navbar.module.scss";

function Navbar({ searchText, handleInputChange, handleFormSubmit }) {
  return (
    <div className={styles.navbar}>
      <h1>GALLERY</h1>
      <form onSubmit={handleFormSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Search images"
          className={styles.search}
          value={searchText}
          onChange={handleInputChange}
        />
      </form>
      <ul>
        <li>
          <a>
            <FaHeart />
          </a>
        </li>
        <li>
          <a>
            <FaSun />
          </a>
        </li>
        <li>
          <a>
            <FaGithub />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
