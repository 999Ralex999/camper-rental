/* src/components/Reviews/ReviewsRating/ReviewsRating.jsx*/
import Icon from "../../Icons/Icon";
import css from "./ReviewsRating.module.css";

function ReviewsRating({ rating }) {
  const ratingInteger = Math.trunc(Number(rating));
  return (
    <ul className={css.container}>
      {[...Array(5)].map((item, index) => (
        <li
          className={
            index + 1 < ratingInteger
              ? `${css.active} ${css.icon}`
              : `${css.icon}`
          }
          key={index}
        >
          <Icon iconName="star" />
        </li>
      ))}
    </ul>
  );
}

export default ReviewsRating;
