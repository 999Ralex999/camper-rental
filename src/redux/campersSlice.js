// src/redux/campersSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { fetchCampers } from "./operations";

const campersSlice = createSlice({
  name: "campers",
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    toggleFavorite(state, action) {
      const changedState = state.items.map((item) => {
        if (item._id === action.payload) {
          item.isFavorite = !item.isFavorite;
        }
        return item;
      });
      state.items = changedState;
    },
    loadMoreCampers(state, action) {},
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCampers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchCampers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      action.payload.forEach((camper) => {
        camper.isFavorite = false;
        if (!state.items.some((item) => item._id === camper._id)) {
          state.items.push(camper);
        }
      });
    });
    builder.addCase(fetchCampers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    });
  },
});

export const { toggleFavorite } = campersSlice.actions;

export const campersReducer = campersSlice.reducer;
