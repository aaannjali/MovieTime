import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showgptSearch: false,
    gptMovies: null,
    movieResults: null,
    movieNames:null,

  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showgptSearch = !state.showgptSearch;
    },
    addgptMovieResult:(state, action) =>{
      const {movieNames, movieResults} = action.payload;
      state.movieNames = movieNames;
      state.movieResults = movieResults;
    },
  },
});


export const {toggleGptSearchView, addgptMovieResult} = gptSlice.actions;

export default gptSlice.reducer;
