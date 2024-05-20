// src/components/ServicesList/ServicesItem/ServicesItem.jsx
import React from "react";
import "./ServicesItem.module.css";

const ServicesItem = ({ service }) => {
  return (
    <li className="services-item">
      <h2>{service.name}</h2>
      <p>{service.description}</p>
    </li>
  );
};

export default ServicesItem;
