// src/components/CatalogItem/CatalogItem.jsx
import CardTitle from "../../Card/CardTitle/CardTitle";
import CardPrice from "../../Card/CardPrice/CardPrice";
import ButtonPrimary from "../../Buttons/ButtonPrimary/ButtonPrimary";
import ButtonFavorite from "../../Buttons/ButtonFavorite/ButtonFavorite";
import CardReviews from "../../Card/CardReviews/CardReviews";
import CardLocation from "../../Card/CardLocation/CardLocation";
import CardDescription from "../../Card/CardDescription/CardDescription";
import CardImage from "../../Card/CardImage/CardImage";
import CategoriesList from "../../CategoriesList/CategoriesList";

import css from "./CatalogItem.module.css";
import { useDispatch } from "react-redux";
import { addContentDataToModal, toggleIsOpen } from "../../../redux/modalSlice";

function CatalogItem({
  mainImage,
  name,
  price,
  rating,
  reviews,
  location,
  description,
  adults,
  transmission,
  engine,
  details,
  isFavorite,
  id,
  camper,
}) {
  const dispatch = useDispatch();

  const handleClick = (camperData) => {
    dispatch(addContentDataToModal(camperData));
    dispatch(toggleIsOpen());
  };
  return (
    <li className={css.item}>
      <div>
        <CardImage image={mainImage} imgDesciption={name} />
      </div>
      <div className={css.content}>
        <div className={css.header}>
          <CardTitle>{name}</CardTitle>
          <div className={css.price}>
            <CardPrice>{price}</CardPrice>
            <ButtonFavorite id={id} isFavorite={isFavorite} />
          </div>
        </div>
        <div className={css.reviews}>
          <CardReviews rating={rating} reviewsNumber={reviews} />
          <CardLocation location={location} />
        </div>
        <CardDescription truncate={true} description={description} />
        <CategoriesList
          adults={adults}
          transmission={transmission}
          engine={engine}
          details={details}
        />
        <div>
          <ButtonPrimary
            clickCallback={() => handleClick(camper)}
            buttonType="button"
          >
            Show more
          </ButtonPrimary>
        </div>
      </div>
    </li>
  );
}

export default CatalogItem;
