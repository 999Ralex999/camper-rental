// import AsideSectionTitle from "../../Typography/AsideSectionTitle/AsideSectionTitle";
// import css from "./VehicleDetails.module.css";

// function VehicleDetails() {
//   return (
//     <div className={css.container}>
//       <AsideSectionTitle title="Vehicle details" />
//       <table className={css.table}>
//         <tbody>
//           <tr>
//             <td>Form</td>
//             <td className={css.values}>Panel truck</td>
//           </tr>
//           <tr>
//             <td>Length</td>
//             <td className={css.values}>5.4 m</td>
//           </tr>
//           <tr>
//             <td>Width</td>
//             <td className={css.values}>2.01 m</td>
//           </tr>
//           <tr>
//             <td>Height</td>
//             <td className={css.values}>2.05 m</td>
//           </tr>
//           <tr>
//             <td>Tank</td>
//             <td className={css.values}>132 I</td>
//           </tr>
//           <tr>
//             <td>Consumption</td>
//             <td className={css.values}>12.4l/100km</td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

// export default VehicleDetails;

// src/components/VehicleDetails/VehicleDetails.jsx
// import React from "react";
// import PropTypes from "prop-types";
// import AsideSectionTitle from "../../Typography/AsideSectionTitle/AsideSectionTitle";
// import css from "./VehicleDetails.module.css";

// function VehicleDetails({ title = "Vehicle details", details }) {
//   return (
//     <div className={css.container}>
//       <AsideSectionTitle heading={title} />
//       <table className={css.table}>
//         <tbody>
//           {details.map((detail, index) => (
//             <tr key={index}>
//               <td>{detail.label}</td>
//               <td className={css.values}>{detail.value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// VehicleDetails.propTypes = {
//   title: PropTypes.string,
//   details: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired,
//     })
//   ).isRequired,
// };

// export default VehicleDetails;

// src/components/VehicleDetails/VehicleDetails.jsx
// import React from "react";
// import PropTypes from "prop-types";
// import AsideSectionTitle from "../../Typography/AsideSectionTitle/AsideSectionTitle";
// import css from "./VehicleDetails.module.css";

// function VehicleDetails({ title = "Vehicle details", details }) {
//   if (!details || details.length === 0) {
//     return (
//       <div className={css.container}>
//         <AsideSectionTitle heading={title} />
//         <p className={css.noDetails}>No details available.</p>
//       </div>
//     );
//   }

//   return (
//     <div className={css.container}>
//       <AsideSectionTitle heading={title} />
//       <table className={css.table}>
//         <tbody>
//           {details.map((detail, index) => (
//             <tr key={index}>
//               <td>{detail.label}</td>
//               <td className={css.values}>{detail.value}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

// VehicleDetails.propTypes = {
//   title: PropTypes.string,
//   details: PropTypes.arrayOf(
//     PropTypes.shape({
//       label: PropTypes.string.isRequired,
//       value: PropTypes.string.isRequired,
//     })
//   ),
// };

// VehicleDetails.defaultProps = {
//   details: [],
// };

// export default VehicleDetails;

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
