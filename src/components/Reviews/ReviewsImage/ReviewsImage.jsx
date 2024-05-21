import css from "./ReviewsImage.module.css";

function ReviewsImage({ name }) {
	return (
		<div
			className={css.image}
			role="img">
			{name[0]}
		</div>
	);
}

export default ReviewsImage;
