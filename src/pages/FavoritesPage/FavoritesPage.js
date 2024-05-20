// src/pages/FavoritesPage/FavoritesPage.jsx
import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/selectors";
import AdvertCard from "../../components/AdvertCard/AdvertCard";
import styles from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const campers = useSelector(selectFilteredCampers);

  return (
    <div className={styles.container}>
      <h1>Favorites</h1>
      <div className={styles.grid}>
        {campers
          .filter((camper) => camper.isFavorite)
          .map((camper) => (
            <AdvertCard key={camper.id} advert={camper} />
          ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
