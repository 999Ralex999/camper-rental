// import css from "./ButtonSecondary.module.css";

// function ButtonSecondary({ clickCallback, buttonType, children }) {
// 	return (
// 		<button
// 			{...(clickCallback && { onClick: clickCallback })}
// 			type={buttonType}
// 			className={css.button}>
// 			{children}
// 		</button>
// 	);
// }

// export default ButtonSecondary;

// src/components/Buttons/SecondaryButton/SecondaryButton.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import css from "./SecondaryButton.module.css";

function SecondaryButton({
  clickCallback = () => {},
  buttonType = "button",
  children,
}) {
  return (
    <button
      onClick={clickCallback}
      type={buttonType}
      className={classNames(css.button)}
    >
      {children}
    </button>
  );
}

SecondaryButton.propTypes = {
  clickCallback: PropTypes.func,
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default SecondaryButton;
