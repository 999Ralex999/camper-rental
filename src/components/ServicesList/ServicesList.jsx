// src/components/ServicesList/ServicesList.jsx
import React from "react";
import ServicesItem from "./ServicesItem/ServicesItem";
import "./ServicesList.module.css";

const ServicesList = ({ services }) => {
  return (
    <ul className="services-list">
      {services.map((service) => (
        <ServicesItem key={service.id} service={service} />
      ))}
    </ul>
  );
};

export default ServicesList;
