// src/components/ServicesList/ServicesItem/ServicesItem.jsx
// import Icon from "../../Icons/Icon";
// import css from "./ServicesItem.module.css";

// function ServicesItem({ iconName, heading, description }) {
//   return (
//     <li className={css.item}>
//       <Icon iconName={iconName} />
//       <h3 className={css.heading}>{heading}</h3>
//       <p className={css.description}>{description}</p>
//     </li>
//   );
// }

// export default ServicesItem;
// src/components/ServicesList/ServicesList.jsx
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
