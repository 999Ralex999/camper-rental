// src/components/Card/CardDescription/CardDescription.jsx
import React from "react";
import styles from "./CardDescription.module.css";

const CardDescription = ({ description }) => {
  return <p className={styles.description}>{description}</p>;
};

export default CardDescription;
