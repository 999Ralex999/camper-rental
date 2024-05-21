// src/components/Buttons/ButtonFavorite/ButtonFavorite.jsx
import React, { useCallback } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import classNames from "classnames";
import Icon from "../../Icons/Icon";
import css from "./ButtonFavorite.module.css";
import { toggleFavorite } from "../../../redux/campersSlice";

function ButtonFavorite({ isFavorite, id }) {
  const dispatch = useDispatch();

  const handleClick = useCallback(() => {
    dispatch(toggleFavorite(id));
  }, [dispatch, id]);

  return (
    <button
      type="button"
      onClick={handleClick}
      className={classNames(css.button, { [css.pressed]: isFavorite })}
    >
      <Icon iconName="heart" />
    </button>
  );
}

ButtonFavorite.propTypes = {
  isFavorite: PropTypes.bool.isRequired,
  id: PropTypes.string.isRequired,
};

export default ButtonFavorite;
