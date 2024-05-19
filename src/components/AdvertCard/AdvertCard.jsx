// src/components/AdvertCard/AdvertCard.jsx
import React from "react";
import styles from "./AdvertCard.module.css";
import ButtonFavorite from "../Buttons/ButtonFavorite/ButtonFavorite";
import CardDescription from "../Card/CardDescription/CardDescription";
import CardImage from "../Card/CardImage/CardImage";
import CardLocation from "../Card/CardLocation/CardLocation";
import CardPrice from "../Card/CardPrice/CardPrice";
import CardReviews from "../Card/CardReviews/CardReviews";
import CardTitle from "../Card/CardTitle/CardTitle";

const AdvertCard = ({ advert, onShowMore, onToggleFavorite }) => {
  return (
    <div className={styles.card}>
      <CardImage src={advert.gallery[0]} alt={advert.name} />
      <div className={styles.cardContent}>
        <CardTitle title={advert.name} />
        <CardDescription description={advert.description} />
        <CardLocation location={advert.location} />
        <CardPrice price={advert.price} />
        <CardReviews reviews={advert.reviews.length} />
        <div className={styles.cardActions}>
          <button className={styles.button} onClick={() => onShowMore(advert)}>
            Show more
          </button>
          <ButtonFavorite
            isFavorite={advert.isFavorite}
            onClick={() => onToggleFavorite(advert._id)}
          />
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
