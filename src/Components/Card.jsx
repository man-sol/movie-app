import React, { useContext, useEffect } from 'react';
import UserContext from '../context/UserContext';
import axios from 'axios'
const API_KEY = "7ea0b3e1"


const Card = (props) => {

  const {movieId, setMovieId} = useContext(UserContext)
  const {movieInfoData, setMovieInfoData} = useContext(UserContext)
  const {isVisible, setIsVisible} = useContext(UserContext)


 // to check if  we are adding right movieId to the state
  // useEffect(() => {
  //   console.log('movieId updated:', movieId);
  // }, [movieId]);

  const handleClick = () => {
    setMovieId(props.id)
    setIsVisible(true)

  }


  

  return (
    <div className="bg-black p-5 w-72 m-5 rounded-xl border-2 border-green-600"
    onClick={handleClick}
    >
      <img src={props.poster} className="" alt="Movie Banner" />
      <p>Movie name: {props.title}</p>
      <div className='flex justify-between my-3'>

      <span>Year: {props.year}</span>
      <span>Type: {props.type}</span>
      </div>
      
    </div>
  );
};

export default Card;
