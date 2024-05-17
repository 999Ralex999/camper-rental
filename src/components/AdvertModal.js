import React from "react";

const AdvertModal = ({ advert, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>{advert.name}</h2>
        <p>{advert.description}</p>
        <img src={advert.image} alt={advert.name} />
      </div>
    </div>
  );
};

export default AdvertModal;
