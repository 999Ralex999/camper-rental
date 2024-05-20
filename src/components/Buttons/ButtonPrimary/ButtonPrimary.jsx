// src/components/Buttons/ButtonPrimary/ButtonPrimary.jsx
import React from "react";
import "./ButtonPrimary.module.css";

const ButtonPrimary = ({ children, onClick }) => {
  return (
    <button className="button-primary" onClick={onClick}>
      {children}
    </button>
  );
};

export default ButtonPrimary;
