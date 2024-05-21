/* src/components/Filters/FilterPickersList/FilterPickersList.jsx*/
import { nanoid } from "@reduxjs/toolkit";
import FilterPicker from "../FilterPicker/FilterPicker";
import css from "./FilterPickersList.module.css";

function FilterPickersList({ filtersArray, pickerType }) {
  return (
    <ul className={css.list}>
      {filtersArray.map((filter) => (
        <FilterPicker
          key={nanoid()}
          iconName={filter.icon}
          name={filter.name}
          value={filter.value}
          pickerType={pickerType}
        />
      ))}
    </ul>
  );
}

export default FilterPickersList;
