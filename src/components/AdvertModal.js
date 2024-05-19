import React from "react";
import "../assets/styles/styles.css";

const AdvertModal = ({ advert, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <span className="close-button" onClick={onClose}>
          &times;
        </span>
        <h2 className="card-title">{advert.name}</h2>
        <img src={advert.image} alt={advert.name} />
        <p className="card-description">{advert.description}</p>
        {/* Additional modal content */}
      </div>
    </div>
  );
};

export default AdvertModal;
