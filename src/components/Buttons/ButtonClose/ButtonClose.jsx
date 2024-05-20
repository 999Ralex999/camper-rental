// src/components/Buttons/ButtonClose/ButtonClose.jsx
import React from "react";
import "./ButtonClose.module.css";

const ButtonClose = ({ onClick }) => {
  return (
    <button className="button-close" onClick={onClick}>
      &times;
    </button>
  );
};

export default ButtonClose;
