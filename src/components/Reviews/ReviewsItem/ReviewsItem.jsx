/* src/components/Reviews/ReviewsItem/ReviewsItem.jsx*/
import CardDescription from "../../Card/CardDescription/CardDescription";
import ReviewsImage from "../ReviewsImage/ReviewsImage";
import ReviewsName from "../ReviewsName/ReviewsName";
import ReviewsRating from "../ReviewsRating/ReviewsRating";
import css from "./ReviewsItem.module.css";

function ReviewsItem({ name, rating, description }) {
  return (
    <li className={css.item}>
      <div className={css.header}>
        <ReviewsImage name={name} />
        <div>
          <ReviewsName name={name} />
          <ReviewsRating rating={rating} />
        </div>
      </div>
      <CardDescription description={description} truncate={false} />
    </li>
  );
}

export default ReviewsItem;
