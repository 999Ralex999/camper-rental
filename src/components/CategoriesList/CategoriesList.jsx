import Category from "./Category/Category";
import css from "./CategoriesList.module.css";

function CategoriesList({ adults, transmission, engine, details }) {
	const {
		airConditioner,
		kitchen,
		beds,
		tv,
		cd,
		radio,
		shower,
		toilet,
		freezer,
		hob,
		microwave,
		gas,
		water,
	} = details;
	return (
		<ul className={css.list}>
			{adults && (
				<Category
					icon="adults"
					label={`${adults} adults`}
				/>
			)}
			{transmission && (
				<Category
					icon="automatic"
					label={transmission}
				/>
			)}
			{engine && (
				<Category
					icon="petrol"
					label={engine}
				/>
			)}
			{kitchen && (
				<Category
					icon="kitchen"
					label="Kitchen"
				/>
			)}
			{beds && (
				<Category
					icon="beds"
					label={`${beds} beds`}
				/>
			)}
			{airConditioner && (
				<Category
					icon="ac"
					label="AC"
				/>
			)}
			{tv && (
				<Category
					icon="tv"
					label="TV"
				/>
			)}
			{cd && (
				<Category
					icon="cd"
					label="CD"
				/>
			)}
			{radio && (
				<Category
					icon="radio"
					label="Radio"
				/>
			)}
			{shower && (
				<Category
					icon="shower"
					label="Shower"
				/>
			)}
			{toilet && (
				<Category
					icon="toilet"
					label="Toilet"
				/>
			)}
			{freezer && (
				<Category
					icon="freezer"
					label="Freezer"
				/>
			)}
			{hob && (
				<Category
					icon="hob"
					label={`${hob} hob`}
				/>
			)}
			{microwave && (
				<Category
					icon="microwave"
					label="Microwave"
				/>
			)}
			{gas && (
				<Category
					icon="gas"
					label="Gas"
				/>
			)}
			{water && (
				<Category
					icon="water"
					label="Water"
				/>
			)}
		</ul>
	);
}

export default CategoriesList;
