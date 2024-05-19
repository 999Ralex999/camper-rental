// src/components/Card/CardTitle/CardTitle.jsx
import React from "react";
import styles from "./CardTitle.module.css";

const CardTitle = ({ title }) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default CardTitle;
