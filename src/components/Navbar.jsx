/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RiHeart3Fill, RiGithubFill } from "react-icons/ri";
import styles from "./Navbar.module.scss";
import { GalleryContext } from "../context/GalleryContext";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const { searchText, handleInputChange, handleFormSubmit } =
    useContext(GalleryContext);

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h1>GALLERY</h1>
      </Link>
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
          <NavLink
            to="/favorite"
            className={({ isActive }) => (isActive ? styles.active : "")}
          >
            <RiHeart3Fill title="Favorit" />
          </NavLink>
        </li>
        <li className={styles.github}>
          <a href="https://github.com/parunchxi/React-Photo-Gallery">
            <RiGithubFill title="Github" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
