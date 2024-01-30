import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecoundaryContainer from './SecoundaryContainer';
import usePopularMovie from '../hooks/usePopularMovie';
import useTrendingMovie from '../hooks/useTrendingMovie';
import useUpcomingMovies from '../hooks/useUpcomingMovies';


const Browse = () => {
   useNowPlaying();
   usePopularMovie();
   useTrendingMovie();
   useUpcomingMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecoundaryContainer />
    </div>
  )
}

export default Browse
