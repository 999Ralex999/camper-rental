// src/components/AdvertCard.js
import React from "react";
import "../assets/styles/styles.css";

const AdvertCard = ({ advert, onShowMore, onToggleFavorite }) => {
  return (
    <div className="card">
      <img src={advert.gallery[0]} alt={advert.name} className="card-image" />
      <div className="card-content">
        <h2 className="card-title">{advert.name}</h2>
        <p className="card-description">{advert.description}</p>
        <div className="card-actions">
          <button
            className="show-more-button"
            onClick={() => onShowMore(advert)}
          >
            Show more
          </button>
          <button
            onClick={() => onToggleFavorite(advert._id)}
            className={`favorite-button ${advert.isFavorite ? "favorite" : ""}`}
          >
            ❤️
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvertCard;
