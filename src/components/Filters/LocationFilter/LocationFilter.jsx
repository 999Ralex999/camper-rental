/* src/components/Filters/LocationFilter/LocationFilter.jsx*/
import css from "./LocationFilter.module.css";
import Icons from "../../Icons/Icon";

function LocationFilter() {
  return (
    <label className={css.label}>
      Location
      <input name="location" className={css.input} placeholder="City" />
      <Icons iconName="map-pin" />
    </label>
  );
}

export default LocationFilter;
