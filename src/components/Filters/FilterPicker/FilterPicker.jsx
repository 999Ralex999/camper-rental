/* src/components/Filters/FilterPicker/FilterPicker.jsx */
import Icon from "../../Icons/Icon";
import css from "./FilterPicker.module.css";

function FilterPicker({ iconName, name, value, pickerType }) {
  return (
    <li className={css.item}>
      <label className={css.label}>
        <Icon iconName={iconName} />
        <input
          className="visially-hidden"
          name={name}
          type={pickerType}
          value={value}
          id={name}
        />
        {value}
      </label>
    </li>
  );
}

export default FilterPicker;
