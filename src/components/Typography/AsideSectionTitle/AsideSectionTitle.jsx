// src/components/Typography/AsideSectionTitle/AsideSectionTitle.jsx
import React from "react";
import styles from "./AsideSectionTitle.module.css";

const AsideSectionTitle = ({ children }) => {
  return <h2 className={styles.title}>{children}</h2>;
};

export default AsideSectionTitle;
