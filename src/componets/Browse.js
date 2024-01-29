import React from 'react'
import Header from './Header'
import useNowPlaying from '../hooks/useNowPlaying'
import MainContainer from './MainContainer';
import SecoundaryContainer from './SecoundaryContainer';


const Browse = () => {
  useNowPlaying();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecoundaryContainer />
    </div>
  )
}

export default Browse
