// src/components/ServicesList/ServicesItem/ServicesItem.jsx
import React from "react";
import PropTypes from "prop-types";
import css from "../ServicesList.module.css";

function ServicesItem({ icon, description }) {
  return (
    <div className={css.services__item}>
      <div className={css.services__icon}>{icon}</div>
      <p className={css.services__description}>{description}</p>
    </div>
  );
}

ServicesItem.propTypes = {
  icon: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServicesItem;
