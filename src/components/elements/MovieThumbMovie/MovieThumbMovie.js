import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumbMovie.css';

const MovieThumbMovie = ({clickable, movieId, movieName, image}) => {
  return (
    <div className="rmdb-moviethumb-movie">
      {clickable ?
        <Link to={{ pathname: `/movie/${movieId}`, movieName: `${movieName}` }}>
          <img src={image} alt="moviethumb" />
        </Link>
        :
        <img src={image} alt="moviethumb" />
      }

    </div>
  )
}

export default MovieThumbMovie;