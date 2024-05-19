// src/components/ServicesList/ServicesList.jsx
import React from "react";
import styles from "./ServicesList.module.css";
import ServicesItem from "./ServicesItem/ServicesItem";

const ServicesList = ({ services }) => {
  return (
    <ul className={styles.list}>
      {services.map((service, index) => (
        <ServicesItem key={index} service={service} />
      ))}
    </ul>
  );
};

export default ServicesList;
