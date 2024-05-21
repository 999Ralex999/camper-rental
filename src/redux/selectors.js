// src/redux/selectors.js
import { createSelector } from "@reduxjs/toolkit";
import filterList from "../utilities/filterList";

export const selectCampers = (state) => state.campers.items;

export const selectIsLoading = (state) => state.campers.isLoading;

export const selectError = (state) => state.campers.error;

export const selectFilter = (state) => state.filter;

export const selectVisibleCampers = createSelector(
  [selectCampers, selectFilter],
  (campers, filter) => {
    return filterList(campers, filter);
  }
);

export const selectFavoriteCampers = createSelector(
  [selectCampers],
  (campers) => {
    return campers.filter((camper) => camper.isFavorite);
  }
);

export const selectOpenModal = (state) => state.modal.openModal;

export const selectReviewsState = (state) => state.modal.showReviews;

export const selectModalData = (state) => state.modal.modalData;
