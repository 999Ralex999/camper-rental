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
