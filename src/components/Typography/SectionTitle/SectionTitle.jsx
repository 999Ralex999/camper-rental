// src/components/Typography/SectionTitle/SectionTitle.jsx
import css from "./SectionTitle.module.css";

function SectionTitle({ children }) {
  return <h2 className={css.heading}>{children}</h2>;
}

export default SectionTitle;
