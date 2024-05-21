// src/components/Card/CardImage/CardImage.jsx
import css from "./CardImage.module.css";

function CardImage({ image, imgDesciption }) {
  return (
    <img
      className={css.image}
      src={image}
      alt={imgDesciption}
      width={290}
      height={310}
      loading="lazy"
    />
  );
}

export default CardImage;
