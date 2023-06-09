import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorite",
  initialState: {
    ids: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      return {
        ...state,
        ids: [...state.ids, action.payload.id],
      };
    },
    removeFavorite: (state, action) => {
      return {
        ...state,
        ids: state.ids.filter((id) => id !== action.payload.id),
      };
    },
  },
});

export const addFavorite = favoriteSlice.actions.addFavorite;
export const removeFavorite = favoriteSlice.actions.removeFavorite;
const favoriteReducer = favoriteSlice.reducer;
export default favoriteReducer;
