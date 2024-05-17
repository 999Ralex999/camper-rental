import React from "react";
import { useSelector } from "react-redux";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.adverts.favorites);

  return (
    <div>
      <h1>Favorites</h1>
      <div>
        {favorites.map((ad) => (
          <div key={ad.id}>
            <h2>{ad.name}</h2>
            <p>{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesPage;
