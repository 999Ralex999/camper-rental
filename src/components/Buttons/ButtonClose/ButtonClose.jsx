// src/components/Buttons/ButtonClose/ButtonClose.jsx
import React from "react";
import styles from "./ButtonClose.module.css";

const ButtonClose = ({ onClick }) => {
  return (
    <button className={styles.buttonClose} onClick={onClick}>
      &times;
    </button>
  );
};

export default ButtonClose;
