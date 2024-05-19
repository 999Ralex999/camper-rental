// src/components/Card/CardReviews/CardReviews.jsx
import React from "react";
import styles from "./CardReviews.module.css";

const CardReviews = ({ reviews }) => {
  return <p className={styles.reviews}>{reviews} reviews</p>;
};

export default CardReviews;
