import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTrendingMovie from "../hooks/useTrendingMovie";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showgptSearch = useSelector((store) => store.gpt.showgptSearch);

  useNowPlaying();
  usePopularMovie();
  useTrendingMovie();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {showgptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecoundaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
