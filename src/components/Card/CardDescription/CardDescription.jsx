// src/components/Card/CardDescription/CardDescription.jsx
// import css from "./CardDescription.module.css";

// function CardDescription({ description, truncate }) {
//   return (
//     <p
//       className={
//         truncate ? `${css.truncate} ${css.description}` : `${css.description}`
//       }
//     >
//       {description}
//     </p>
//   );
// }

// export default CardDescription;

// src/components/CardDescription/CardDescription.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import css from "./CardDescription.module.css";

function CardDescription({ description, truncate = false }) {
  return (
    <p className={classNames(css.description, { [css.truncate]: truncate })}>
      {description}
    </p>
  );
}

CardDescription.propTypes = {
  description: PropTypes.string.isRequired,
  truncate: PropTypes.bool,
};

export default CardDescription;
