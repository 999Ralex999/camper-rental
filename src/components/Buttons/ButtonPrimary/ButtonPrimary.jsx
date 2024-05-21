// src/components/Buttons/ButtonPrimary/ButtonPrimary.jsx
// import css from "./ButtonPrimary.module.css";

// function ButtonPrimary({ buttonType, children, clickCallback }) {
//   return (
//     <button
//       {...(clickCallback && { onClick: clickCallback })}
//       type={buttonType}
//       className={css.button}
//     >
//       {children}
//     </button>
//   );
// }

// export default ButtonPrimary;

// src/components/Buttons/ButtonPrimary/ButtonPrimary.jsx
// src/components/Buttons/ButtonPrimary/ButtonPrimary.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import css from "./ButtonPrimary.module.css";

function ButtonPrimary({
  buttonType = "button",
  children,
  clickCallback = () => {},
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

ButtonPrimary.propTypes = {
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
  clickCallback: PropTypes.func,
};

export default ButtonPrimary;
