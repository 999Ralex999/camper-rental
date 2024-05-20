// src/redux/selectors.js
export const selectCampers = (state) => state.campers.items;
export const selectFilter = (state) => state.filter;
export const selectFilteredCampers = (state) => {
  const { campers, filter } = state;
  if (filter === "all") {
    return campers.items;
  }
  if (filter === "favorites") {
    return campers.items.filter((camper) => camper.isFavorite);
  }
  return campers.items;
};
