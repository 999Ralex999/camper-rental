// src/components/Typography/AsideSectionTitle/AsideSectionTitle.jsx
import css from "./AsideSectionTitle.module.css";

function AsideSectionTitle({ heading }) {
  return (
    <>
      <h4 className={css.heading}>{heading}</h4>
      <hr className={css.divider} />
    </>
  );
}

export default AsideSectionTitle;
