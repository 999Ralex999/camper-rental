// src/components/VehicleDetails/VehicleDetails.jsx
import React from "react";
import PropTypes from "prop-types";
import AsideSectionTitle from "../../Typography/AsideSectionTitle/AsideSectionTitle";
import css from "./VehicleDetails.module.css";

function VehicleDetails({ title = "Vehicle details", details = [] }) {
  if (!details.length) {
    return (
      <div className={css.container}>
        <AsideSectionTitle heading={title} />
        <p className={css.noDetails}>No details available.</p>
      </div>
    );
  }

  return (
    <div className={css.container}>
      <AsideSectionTitle heading={title} />
      <table className={css.table}>
        <tbody>
          {details.map((detail, index) => (
            <tr key={index}>
              <td>{detail.label}</td>
              <td className={css.values}>{detail.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

VehicleDetails.propTypes = {
  title: PropTypes.string,
  details: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    })
  ),
};

export default VehicleDetails;
