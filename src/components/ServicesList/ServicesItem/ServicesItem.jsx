// src/components/ServicesList/ServicesItem/ServicesItem.jsx
import React from "react";
import styles from "./ServicesItem.module.css";

const ServicesItem = ({ service }) => {
  return <li className={styles.item}>{service}</li>;
};

export default ServicesItem;
