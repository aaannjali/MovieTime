import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
        name: "Movie",
        initialState : {
                nowPlayingMovies: null,
                trailerVideo : null,
                popular: null,

        },
        reducers: {
                addNowplayingMovies : (state, action) =>{
                        state.nowPlayingMovies = action.payload;
                },
                addPopularMovies : (state, action) =>{
                        state.popularMovies = action.payload;
                },
                addTreandingMovies : (state, action) =>{
                        state.trendingMovie = action.payload;
                },
                addUpcomingMovies : (state, action) =>{
                        state.upcomingMovie = action.payload;
                },
                addTrailerVideo: (state, action) =>{
                        state.trailerVideo = action.payload;
                }
        }
});

export const {addNowplayingMovies, addTrailerVideo, addPopularMovies, addTreandingMovies, addUpcomingMovies} = movieSlice.actions;
export default movieSlice.reducer;