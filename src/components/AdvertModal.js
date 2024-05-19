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
        <h2 className="text-2xl font-bold mb-4">{advert.name}</h2>
        <img
          src={advert.gallery[0]}
          alt={advert.name}
          className="w-full h-64 object-cover mb-4"
        />
        <p className="mb-4">{advert.description}</p>
        <h3 className="text-xl font-semibold mb-2">Details</h3>
        <ul className="list-disc pl-5 mb-4">
          {Object.keys(advert.details).map((key) => (
            <li key={key}>
              <strong>{key}:</strong> {advert.details[key]}
            </li>
          ))}
        </ul>
        <h3 className="text-xl font-semibold mb-2">Reviews</h3>
        <ul className="list-disc pl-5">
          {advert.reviews.map((review, index) => (
            <li key={index}>
              <strong>
                {review.reviewer_name} ({review.reviewer_rating}):
              </strong>{" "}
              {review.comment}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdvertModal;
