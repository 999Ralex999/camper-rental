// src/components/Buttons/ButtonFavorite/ButtonFavorite.jsx
import React from "react";
import styles from "./ButtonFavorite.module.css";

const ButtonFavorite = ({ isFavorite, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {isFavorite ? "★" : "☆"}
    </button>
  );
};

export default ButtonFavorite;
