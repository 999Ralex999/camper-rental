// src/redux/selectors.js
export const selectCampers = (state) => state.campers;
export const selectFilters = (state) => state.filters;

export const selectFavorites = (state) =>
  state.campers.filter((advert) => advert.isFavorite);
