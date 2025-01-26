import React, { useContext } from 'react';
import UserContext from '../context/UserContext';
import Card from './Card';

const MovieList = () => {
  const { data, setData, searchQuery, setSearchQuery } = useContext(UserContext);

  return (
    <div className="bg-black h-full text-white flex flex-wrap"
    >
      {data?.map((movie, index) => (
        <Card
          key={index}
          title={movie.Title}
          poster={movie.Poster}
          year={movie.Year}
          id={movie.imdbID}
          type={movie.Type}

        />
      ))}
    </div>
  );
};

export default MovieList; // Fixed this line
