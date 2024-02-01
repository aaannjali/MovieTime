import React from 'react'

const VideoTitle = ({title, overview}) => {
  return (
    <div className='w-full aspect-video pt-[15%] px-16 absolute text-white bg-gradient-to-r from-black'>
      <h1 className='text-6xl font-semibold '>{title}</h1>
      <p className='py-1 mt-8 text-lg w-1/2'>{overview}</p>
      <div>
      <button className=' bg-white text-black mt-20 p-4 px-12 text-xl  rounded-lg hover:bg-opacity-70 font-bold'> ➤ Play</button>
      <button  className='mx-2 bg-gray-500  text-white p-4 px-12 hover:bg-opacity-80 text-xl bg-opacity-50  rounded-lg' >More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle
