import css from "./ReviewsName.module.css";

function ReviewsName({ name }) {
  return <h3 className={css.heading}>{name}</h3>;
}

export default ReviewsName;
