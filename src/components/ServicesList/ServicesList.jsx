// src/components/ServicesList/ServicesList.jsx
import React from "react";
import ServicesItem from "./ServicesItem/ServicesItem";
import css from "./ServicesList.module.css";

function ServicesList() {
  const services = [
    {
      icon: "🚚",
      description:
        "Provides the best rent-and-go option and allows for simplicity when it comes to setting up camp, just shift the RV into park.",
    },
    {
      icon: "🚐",
      description:
        "Provides more flexibility with access to a smaller, secondary car for exploring and more living space.",
    },
    {
      icon: "📦",
      description:
        "Prefer to have your RV delivered? Many owners offer delivery as an additional option, either to your pickup location or directly to your destination.",
    },
  ];

  return (
    <section className={css.services}>
      <h2>SERVICES</h2>
      <div className={css.services__list}>
        {services.map((service, index) => (
          <ServicesItem
            key={index}
            icon={service.icon}
            description={service.description}
          />
        ))}
      </div>
    </section>
  );
}

export default ServicesList;
