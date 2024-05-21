import LocationFilter from "./LocationFilter/LocationFilter";
import FeatureFilter from "./FeatureFilter/FeatureFilter";
import { VEHICLE_EQUIPMENT, VEHICLE_TYPE } from "../../constants/filters";
import css from "./Filters.module.css";
import PrimaryButton from "../Buttons/ButtonPrimary/ButtonPrimary";
import { useDispatch } from "react-redux";
import { setFilter } from "../../redux/filterSlice";

function Filters() {
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();

    dispatch(setFilter(Object.fromEntries(new FormData(event.target))));
  };
  return (
    <aside className={css.container}>
      <form onSubmit={handleSubmit}>
        <LocationFilter />
        <div>
          <h3 className={css.heading}>Filters</h3>
          <FeatureFilter
            name="Vehicle equipment"
            pickerType="checkbox"
            filtersArray={VEHICLE_EQUIPMENT}
          />
          <FeatureFilter
            name="Vehicle type"
            pickerType="radio"
            filtersArray={VEHICLE_TYPE}
          />
        </div>
        <PrimaryButton buttonType="submit">Search</PrimaryButton>
      </form>
    </aside>
  );
}

export default Filters;
