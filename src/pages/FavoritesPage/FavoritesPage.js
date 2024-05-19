// src/pages/FavoritesPage/FavoritesPage.jsx
import React from "react";
import { useSelector } from "react-redux";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import { selectFavorites } from "../../redux/selectors";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = ({ onShowMore }) => {
  const favoriteAdverts = useSelector(selectFavorites);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Favorites</h1>
      <div className={styles.grid}>
        {favoriteAdverts.length > 0 ? (
          favoriteAdverts.map((advert) => (
            <AdvertCard
              key={advert._id}
              advert={advert}
              onShowMore={onShowMore}
            />
          ))
        ) : (
          <p>No favorite adverts available.</p>
        )}
      </div>
    </div>
  );
};

export default FavoritesPage;
