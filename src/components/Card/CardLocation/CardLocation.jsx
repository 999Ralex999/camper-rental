// src/components/Card/CardLocation/CardLocation.jsx
import Icon from "../../Icons/Icon";
import css from "./CardLocation.module.css";

function CardLocation({ location }) {
  return (
    <div className={css.container}>
      <Icon iconName="map-pin" />
      <p className={css.location}>{location}</p>
    </div>
  );
}

export default CardLocation;
