// src/components/Buttons/ButtonFavorite/ButtonFavorite.jsx
import React from "react";
import styles from "./ButtonFavorite.module.css";

const ButtonFavorite = ({ isFavorite, onClick }) => {
  return (
    <button
      className={`${styles.buttonFavorite} ${isFavorite ? styles.active : ""}`}
      onClick={onClick}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
};

export default ButtonFavorite;
