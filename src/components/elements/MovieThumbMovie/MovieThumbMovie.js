import React from 'react';
import { Link } from 'react-router-dom';
import './MovieThumbMovie.css';

const MovieThumbMovie = (props) => {
  return (
    <div className="rmdb-moviethumb-movie">
      {props.clickable ?
        <Link to={{ pathname: `/movie/${props.movieId}`, movieName: `${props.movieName}` }}>
          <img src={props.image} alt="moviethumb" />
        </Link>
        :
        <img src={props.image} alt="moviethumb" />
      }

    </div>
  )
}

export default MovieThumbMovie;