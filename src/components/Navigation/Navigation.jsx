// src/components/Navigation/Navigation.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/" exact="true" activeclassname="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/catalog" activeclassname="active">
            Catalog
          </NavLink>
        </li>
        <li>
          <NavLink to="/favorites" activeclassname="active">
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
