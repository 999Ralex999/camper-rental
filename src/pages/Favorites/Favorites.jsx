// src/pages/Favorites/Favorites.jsx
import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredCampers } from "../../redux/selectors";

const Favorites = () => {
  const campers = useSelector(selectFilteredCampers);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {campers
          .filter((camper) => camper.isFavorite)
          .map((camper) => (
            <li key={camper.id}>{camper.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default Favorites;
