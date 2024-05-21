// src/components/Card/CardTitle/CardTitle.jsx
import css from "./CardTitle.module.css";

function CardTitle({ children }) {
  return <h3 className={css.heading}>{children}</h3>;
}

export default CardTitle;
