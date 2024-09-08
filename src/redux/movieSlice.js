import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    popularMovie: null,
  },
  reducers: {
    addpopularMovies: (state, action) => {
      state.popularMovie = action.payload();
    },
  },
});

export const { addpopularMovies } = movieSlice.actions;
export default movieSlice.reducer;
