// src/pages/Home/Home.jsx
import React from "react";
import Banner from "../../components/Banner/Banner";
import ServicesList from "../../components/ServicesList/ServicesList";

const Home = () => {
  const services = [
    { id: 1, name: "Service 1", description: "Description of Service 1" },
    { id: 2, name: "Service 2", description: "Description of Service 2" },
    { id: 3, name: "Service 3", description: "Description of Service 3" },
  ];

  return (
    <div>
      <Banner />
      <ServicesList services={services} />
    </div>
  );
};

export default Home;
