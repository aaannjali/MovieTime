import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
        name: "Movie",
        initialState : {
                nowPlayingMovies: null,
        },
        reducers: {
                addNowplayingMovies : (state, action) =>{
                        state.nowPlayingMovies = action.payload;
                }
        }
});

export const {addNowplayingMovies} = movieSlice.actions;
export default movieSlice.reducer;