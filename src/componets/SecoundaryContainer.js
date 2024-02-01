import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecoundaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className='bg-black '>
      <div className='-mt-64  pl-12 relative z-20'>
      <MovieList title = {"Now Playing"} movies ={movies.nowPlayingMovies} />
      <MovieList title = {"Trending"} movies ={movies.trendingMovie} />
      <MovieList title = {"Popular"} movies ={movies.popularMovies} />
      <MovieList title = {"Upcoming Movies"} movies ={movies.upcomingMovie} />
      <MovieList title = {"Watch List"} movies ={movies.nowPlayingMovies} />

      </div>
     
    </div>
  )
}

export default SecoundaryContainer