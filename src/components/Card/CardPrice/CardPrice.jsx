// src/components/Card/CardPrice/CardPrice.jsx
import css from "./CardPrice.module.css";

function CardPrice({ children }) {
  return (
    <p className={css.price}>
      €{Number(children).toFixed(2).toString().replace(".", ",")}
    </p>
  );
}

export default CardPrice;
