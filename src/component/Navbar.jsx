/* eslint-disable react/prop-types */
import { RiHeart3Fill, RiGithubFill } from "react-icons/ri";
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
            <RiHeart3Fill />
          </a>
        </li>
        <li>
          <a>
            <RiGithubFill />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
