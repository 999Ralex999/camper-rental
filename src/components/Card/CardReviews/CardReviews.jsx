// src/components/Card/CardReviews/CardReviews.jsx
import Icon from "../../Icons/Icon";
import css from "./CardReviews.module.css";

function CardReviews({ rating, reviewsNumber }) {
  return (
    <div className={css.container}>
      <Icon iconName="star" />
      <p className={css.reviews}>
        {rating} ({reviewsNumber} Reviews)
      </p>
    </div>
  );
}

export default CardReviews;
