// src/components/AdvertModal.js
import React from "react";
import "../assets/styles/styles.css";

const AdvertModal = ({ advert, onClose }) => {
  return (
    <div className="modal" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{advert.name}</h2>
        <p>{advert.description}</p>
        <img src={advert.gallery[0]} alt={advert.name} />
        <div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AdvertModal;
