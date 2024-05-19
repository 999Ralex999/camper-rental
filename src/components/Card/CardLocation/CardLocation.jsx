// src/components/Card/CardLocation/CardLocation.jsx
import React from "react";
import styles from "./CardLocation.module.css";

const CardLocation = ({ location }) => {
  return <p className={styles.location}>{location}</p>;
};

export default CardLocation;
