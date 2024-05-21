// src/components/Buttons/ButtonClose/ButtonClose.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import Icon from "../../Icons/Icon";
import css from "./ButtonClose.module.css";

function ButtonClose({ clickCallback = () => {} }) {
  return (
    <button
      onClick={clickCallback}
      type="button"
      className={classNames(css.button)}
    >
      <Icon iconName="cross" />
    </button>
  );
}

ButtonClose.propTypes = {
  clickCallback: PropTypes.func,
};

export default ButtonClose;
