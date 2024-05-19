// src/components/Card/CardPrice/CardPrice.jsx
import React from "react";
import styles from "./CardPrice.module.css";

const CardPrice = ({ price }) => {
  return <p className={styles.price}>${price}/day</p>;
};

export default CardPrice;
