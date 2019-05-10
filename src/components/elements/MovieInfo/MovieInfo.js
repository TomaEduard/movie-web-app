import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
import './MovieInfo.css';

const MovieInfo = (props) => {
  return (
    <div className="rmdb-movieinfo"
      style={{
        background: props.movie.backdrop_path ? `url('${IMAGE_BASE_URL}${BACKDROP_SIZE}${props.movie.backdrop_path}')` : '#000'
      }}
    >

      <div className="rmdb-movieinfo-content">
        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
            clickable={false}
          />
        </div>
        <div className="rmdb-movieinfo-text">
          <h1>{props.movie.title}</h1>
          <p>{props.movie.overview}</p>
          <h3>IMDB RATING</h3>

          <div className="rmdb-rating">
            <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>

            <p className="rmdb-score">{props.movie.vote_average}</p>

          </div>

          {/* If have more then 1 director prind with S it not print DIRECTOR */}
          {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}

          {/* return a paragraph for each director with key,classname and name*/}
          {props.directors.map((element, i) => {
            return <p key={i} className="rmdb-director">{element.name}</p>
          })}

          <br>
          </br>
          <div className="container">
            <div className="row">
              <div className="star">
                <div className="fas fa-star fa-2x"></div>
                <div className="fas fa-star fa-2x"></div>
                <div className="fas fa-star fa-2x"></div>
                <div className="fas fa-star fa-2x"></div>
                <div className="fas fa-star-half-alt fa-2x"></div>
                <div className="far fa-star fa-2x"></div>
              </div>

              <div className="hearth">
                <div className="fas fa-heart fa-2x pl-2"></div>
                <div className="far fa-heart fa-2x pl-2"></div>
              </div>

              <div className="fas fa-history watch fa-2x pl-2" pl-2></div>

              <div className="fas fa-clipboard-list fa-2x pl-2 text-success"></div>
              <div className="fas fa-list-ol fa-2x pl-2 text-success"></div>
              <div className="fas fa-list-ul fa-2x pl-2 text-success"></div>
              <div className="far fa-list-alt fa-2x pl-2 text-success"></div>
              <div className="fas fa-th-list fa-2x pl-2 text-success"></div>


            </div>
          </div>

        </div>
        <div className="far fa-file-video fa-6x" name="film" />
      </div>
    </div>
  )
}

export default MovieInfo;