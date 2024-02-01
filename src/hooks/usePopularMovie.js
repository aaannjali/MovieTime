import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/movieSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";


const usePopularMovie = () =>{
const dispatch = useDispatch();

const propularMovie = useSelector((store) => store.movies.propularMovie)

  const getPopularMovies = async () =>{
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?page=1" , 
      API_OPTIONS
    );
    const json = await data.json();
    
    dispatch(addPopularMovies(json.results));
  };

  useEffect(()=>{
   !propularMovie && getPopularMovies();
  },[]);

};

export default usePopularMovie;