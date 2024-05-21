import AsideSectionTitle from "../../Typography/AsideSectionTitle/AsideSectionTitle";
import FilterPickersList from "../FilterPickersList/FilterPickersList";
import css from "./FeatureFilter.module.css";

function FeatureFilter({
  name,
  type,
  filtersArray,
  pickerType,
  multipleChoice,
}) {
  return (
    <div>
      <AsideSectionTitle heading={name} />
      <fieldset className={css.fieldset}>
        <FilterPickersList
          multipleChoice={multipleChoice}
          pickerType={pickerType}
          filterType={type}
          filtersArray={filtersArray}
        />
      </fieldset>
    </div>
  );
}

export default FeatureFilter;
