// src/components/Buttons/ButtonFavorite/ButtonFavorite.jsx
import React from "react";
import "./ButtonFavorite.module.css";

const ButtonFavorite = ({ isFavorite, onClick }) => {
  return (
    <button
      className={`button-favorite ${isFavorite ? "active" : ""}`}
      onClick={onClick}
    >
      {isFavorite ? "♥" : "♡"}
    </button>
  );
};

export default ButtonFavorite;
