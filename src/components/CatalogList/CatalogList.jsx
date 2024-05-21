import CatalogItem from "./CatalogItem/CatalogItem";
import css from "./CatalogList.module.css";

function CatalogList({ campers }) {
	return (
		<ul className={css.list}>
			{campers.map((camper) => (
				<CatalogItem
					key={camper._id}
					id={camper._id}
					mainImage={camper.gallery[0]}
					name={camper.name}
					price={camper.price}
					rating={camper.rating}
					reviews={camper.reviews.length}
					location={camper.location}
					description={camper.description}
					adults={camper.adults}
					transmission={camper.transmission}
					engine={camper.engine}
					details={{
						kitchen: camper.details.kitchen,
						beds: camper.details.beds,
						airConditioner: camper.details.airConditioner,
					}}
					isFavorite={camper.isFavorite}
					camper={camper}
				/>
			))}
		</ul>
	);
}

export default CatalogList;
