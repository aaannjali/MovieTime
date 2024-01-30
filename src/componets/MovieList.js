import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {


  return (
    <div className="px-6   ">
      <h1 className="text-2xl py-8 text-white font-bold">{title}</h1>
      <div className="flex overflow-x-scroll no-scrollbar ">
        <div className="flex">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
