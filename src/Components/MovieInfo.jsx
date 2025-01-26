import React, {useContext, useEffect, useState} from 'react'
import UserContext from '../context/UserContext'
import axios from 'axios'
const API_KEY = "7ea0b3e1"




const MovieInfo = () => {

  const {movieId, setMovieId} = useContext(UserContext)
  const {movieInfoData, setMovieInfoData} = useContext(UserContext)
  const {isVisible, setIsVisible} = useContext(UserContext)

  
    useEffect(() => {
      const fetchData = async () => {
        try{
          if(!movieId) return
          const res = await axios.get(`http://www.omdbapi.com/?i=${movieId}&apikey=${API_KEY}`)
          setMovieInfoData(res.data)
        }
        catch(error){
          console.log(error)
        }
      }

      fetchData()
    },[movieId])

    console.log(movieInfoData?.Title)

    const handleClose = () => {
      setIsVisible(false)
    }

    if (!isVisible) return null
  

  
  return (
    
    <div className='flex justify-around m-7 text-white border-2 border-green-600 p-7 rounded-2xl'>
        <img src={movieInfoData?.Poster}/>
        
        <div className='p-3'>
        <p> <span className='text-yellow-300'>Name:</span> {movieInfoData?.Title}</p>
        <p> <span className='text-yellow-300'>Year:</span>  {movieInfoData?.Year}</p>
        <p> <span className='text-yellow-300'>Released:</span> {movieInfoData?.Released}</p>
        <p> <span className='text-yellow-300'>Runtime:</span> {movieInfoData?.Runtime}</p>
        <p> <span className='text-yellow-300'>Gener:</span> {movieInfoData?.Gener}</p>
        <p> <span className='text-yellow-300'>Language:</span> {movieInfoData?.Language}</p>
        <p> <span className='text-yellow-300'>Actors:</span> {movieInfoData?.Actors}</p>
        <p> <span className='text-yellow-300'>Writer:</span> {movieInfoData?.Writer}</p>
        <p> <span className='text-yellow-300'>Director:</span> {movieInfoData?.Director}</p>
        <p> <span className='text-yellow-300'>Rating:</span> {movieInfoData?.Ratings[1]?.Source} {movieInfoData?.Ratings[1]?.Value}</p>
        <p> <span className='text-yellow-300'>Plot:</span> {movieInfoData?.Plot}</p>
        </div>
        <button className=' bg-red-700 rounded-full text-white px-3 h-8 '
        onClick={handleClose}
        >X</button>


    </div>
  )
}

export default MovieInfo