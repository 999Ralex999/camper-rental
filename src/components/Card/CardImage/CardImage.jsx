// src/components/Card/CardImage/CardImage.jsx
import React from "react";
import styles from "./CardImage.module.css";

const CardImage = ({ src, alt }) => {
  return <img className={styles.image} src={src} alt={alt} />;
};

export default CardImage;
