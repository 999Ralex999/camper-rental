// src/components/Buttons/ButtonPrimary/ButtonPrimary.jsx
import React from "react";
import styles from "./ButtonPrimary.module.css";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button className={styles.buttonPrimary} onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
