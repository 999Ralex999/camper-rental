/* src/components/Modal/ModalFeatures/ModalFeatures.jsx*/
import CategoriesList from "../../CategoriesList/CategoriesList";
import VehicleDetails from "../../Card/VehicleDetails/VehicleDetails";

function ModalFeatures({ adults, transmission, engine, details }) {
  return (
    <>
      <CategoriesList
        adults={adults}
        transmission={transmission}
        engine={engine}
        details={details}
      />
      <VehicleDetails />
    </>
  );
}

export default ModalFeatures;
