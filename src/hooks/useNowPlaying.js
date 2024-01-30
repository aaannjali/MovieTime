import { useDispatch } from "react-redux";
import { addNowplayingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useNowPlaying = () =>{
const dispatch = useDispatch();

  const getNowPlayingMovies = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1" , 
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addNowplayingMovies(json.results));
  };

  useEffect(()=>{
    getNowPlayingMovies();
  },[]);

};

export default useNowPlaying;