/* eslint-disable react/prop-types */
import { useContext } from "react";
import { RiHeart3Fill, RiGithubFill } from "react-icons/ri";
import styles from "./Navbar.module.scss";
import { GalleryContext } from "../context/GalleryContext";

function Navbar() {
  const { searchText, handleInputChange, handleFormSubmit } =
    useContext(GalleryContext);

  function onHomeClick() {
    window.location.reload(false);
  }

  return (
    <div className={styles.navbar}>
      <h1 onClick={onHomeClick}>GALLERY</h1>
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
          <a href="https://github.com/parunchxi/React-Photo-Gallery">
            <RiGithubFill />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
