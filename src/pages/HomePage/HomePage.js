// src/pages/HomePage/HomePage.jsx
import React from "react";
import Banner from "../../components/Banner/Banner";
import ServicesList from "../../components/ServicesList/ServicesList";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const services = ["Service 1", "Service 2", "Service 3"];

  return (
    <div className={styles.container}>
      <div className={styles.banner}>
        <Banner />
      </div>
      <div className={styles.services}>
        <ServicesList services={services} />
      </div>
    </div>
  );
};

export default HomePage;
