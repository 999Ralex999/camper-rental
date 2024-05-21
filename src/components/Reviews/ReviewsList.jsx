import { nanoid } from "@reduxjs/toolkit";
import ReviewsItem from "./ReviewsItem/ReviewsItem";
import css from "./ReviewsList.module.css";

function ReviewsList({ reviews }) {
	return (
		<ul className={css.container}>
			{reviews.map((review) => (
				<ReviewsItem
					key={nanoid()}
					name={review.reviewer_name}
					rating={review.reviewer_rating}
					description={review.comment}
				/>
			))}
		</ul>
	);
}

export default ReviewsList;
