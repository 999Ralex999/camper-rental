// src/components/AdvertCard.js
import React from "react";
import "../assets/styles/styles.css";

const AdvertCard = ({ advert, onShowMore, onToggleFavorite }) => {
  return (
    <div className="card border border-gray-300 shadow-lg rounded-lg overflow-hidden">
      <img
        src={advert.gallery[0]}
        alt={advert.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="card-title text-xl font-semibold">{advert.name}</h2>
        <p className="card-description text-gray-600">{advert.description}</p>
        <div className="card-actions flex justify-between mt-4">
          <button className="button" onClick={() => onShowMore(advert)}>
            Show more
          </button>
          <button
            onClick={() => onToggleFavorite(advert._id)}
            className={`button ${advert.isFavorite ? "favorite" : ""}`}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
