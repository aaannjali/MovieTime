import React, { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import openAI from "../utils/openAI";
import { API_OPTIONS } from "../utils/constant";
import {addgptMovieResult} from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);

  const searchMovieTMDB = async (movie) =>{
    const data = await 

    fetch("https://api.themoviedb.org/3/search/movie?query="+ movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS);
    
    const json = await data.json();
    return json.results;


  }

  const handleGptSearchClick = async () => {
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya"; 

    const gptResults = await openAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery}],
      model: "gpt-3.5-turbo", 
    });
    const  gptmovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptmovies.map((movie) => searchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);
    dispatch(addgptMovieResult({movieNames: gptmovies , movieResults: tmdbResults}) );
  };



  return (
    <div className="pt-[35%] md:pt-[10%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12  "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 col-span-9 rounded-lg "
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 bg-red-700 text-white rounded-lg"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].serach}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
