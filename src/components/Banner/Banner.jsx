// src/components/Banner/Banner.jsx
// import css from "./Banner.module.css";

// function Banner({ image, children }) {
//   return (
//     <section
//       className={css.background}
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       <div className={css.content}>{children}</div>
//     </section>
//   );
// }

// export default Banner;

// src/components/Banner/Banner.jsx
import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import css from "./Banner.module.css";

function Banner({ image, children = null, className = "", style = {} }) {
  return (
    <section
      className={classNames(css.background, className)}
      style={{ ...style, backgroundImage: `url(${image})` }}
    >
      <div className={css.content}>{children}</div>
    </section>
  );
}

Banner.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Banner;
