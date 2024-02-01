import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addNowplayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () =>{

const dispatch = useDispatch();
// useNowPlaying();
const getNowPlaingMovie = async () => {
  const data = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?page=1",
    API_OPTIONS
  );
  const json = await data.json();
  console.log(json.results);
  dispatch(addNowplayingMovies(json.results));
};
useEffect(() => {
  getNowPlaingMovie();
}, []);

};

export default useNowPlayingMovies;