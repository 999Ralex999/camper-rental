// src/utilities/filterList.js
export const filterList = (list, filter) => {
  if (filter === "favorites") {
    return list.filter((item) => item.isFavorite);
  }
  return list;
};
