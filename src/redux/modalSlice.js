// src/redux/modalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
  name: "modal",
  initialState: {
    openModal: false,
    showReviews: false,
    modalData: [],
  },
  reducers: {
    toggleIsOpen(state, action) {
      state.openModal = !state.openModal;
    },
    setReviewsView(state, action) {
      state.showReviews = action.payload;
    },
    addContentDataToModal(state, action) {
      state.modalData = action.payload;
    },
  },
});

export const { toggleIsOpen, setReviewsView, addContentDataToModal } =
  modalSlice.actions;

export const modalReducer = modalSlice.reducer;
