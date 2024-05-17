import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  adverts: [],
  favorites: [],
};

const advertsSlice = createSlice({
  name: "adverts",
  initialState,
  reducers: {
    setAdverts(state, action) {
      state.adverts = action.payload;
    },
    toggleFavorite(state, action) {
      const advert = state.adverts.find((ad) => ad.id === action.payload);
      if (advert) {
        advert.isFavorite = !advert.isFavorite;
        if (advert.isFavorite) {
          state.favorites.push(advert);
        } else {
          state.favorites = state.favorites.filter(
            (ad) => ad.id !== action.payload
          );
        }
      }
    },
  },
});

export const { setAdverts, toggleFavorite } = advertsSlice.actions;
export default advertsSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   adverts: [],
//   favorites: [],
// };

// const advertsSlice = createSlice({
//   name: "adverts",
//   initialState,
//   reducers: {
//     setAdverts(state, action) {
//       state.adverts = action.payload;
//     },
//     toggleFavorite(state, action) {
//       const advert = state.adverts.find((ad) => ad.id === action.payload);
//       if (advert) {
//         advert.isFavorite = !advert.isFavorite;
//         if (advert.isFavorite) {
//           state.favorites.push(advert);
//         } else {
//           state.favorites = state.favorites.filter(
//             (ad) => ad.id !== action.payload
//           );
//         }
//       }
//     },
//   },
// });

// export const { setAdverts, toggleFavorite } = advertsSlice.actions;
// export default advertsSlice.reducer;
