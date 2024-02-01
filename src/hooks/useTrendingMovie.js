import { useDispatch, useSelector } from "react-redux";
import { addTreandingMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const useTrendingMovie = () =>{
const dispatch = useDispatch();


const treandingMovie = useSelector(
  (store) => store.movies.treandingMovie
);

  const getTrendingMovies = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?page=1" , 
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addTreandingMovies(json.results));
  };

  useEffect(()=>{
        getTrendingMovies();  
  },[]);

};

export default useTrendingMovie;