/* src/components/Category/Category.jsx */
import Icon from "../../Icons/Icon";
import css from "./Category.module.css";

function Category({ icon, label }) {
  return (
    <li className={css.item}>
      <Icon iconName={icon} />
      <p className={css.label}>{label}</p>
    </li>
  );
}

export default Category;
