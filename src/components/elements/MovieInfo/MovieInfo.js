import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
// import RatingWidget from '../Rating/Rating';
import './MovieInfo.css';
import Stars from '../../../react-stars';
import Hearth from '../Hearth/Hearth';
import WatchList from '../WatchLater/WatchList';
// import { Link } from 'react-router-dom';

const MovieInfo = (props) => {

  const thirdExample = {
    size: 55,
    count: 5,
    half: true,
    value: props.rating,
    onChange: newValue => {
      // console.log(`MovieInfo - thirdExample - New value is ${newValue}`)

      // console.log("MovieInfo - props - ", props);

      // function
      props.changeRating(newValue)

    }
  }

  // var newRating = props.rating;
  // newRating.toFixed(1);
  // console.log("MovieInfo - changeFavorite - ", props.changeFavorite);

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

          <div className="container">
            <div className="row">

              <div className="col-md-6">
                <h3>IMDB RATING</h3>

                <div className="rmdb-rating">
                  <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>

                  <p className="rmdb-score">{props.movie.vote_average}</p>
                </div>

              </div>

              <div className="col-md-6 pl-5">
                {/* If have more then 1 director prind with S it not print DIRECTOR */}
                {props.directors.length > 1 ? <h3>DIRECTORS</h3> : <h3>DIRECTOR</h3>}

                {/* return a paragraph for each director with key,classname and name*/}
                {props.directors.map((element, i) => {
                  return <p key={i} className="rmdb-director">{element.name}</p>
                })}
              </div>
            </div>

          </div>

          <br>
          </br>

          <div className="container">

            <h2 className="display-5 asd">
              <span className="rating-size">
                {props.rating}

              </span> / 5.0</h2>

            <div className="row">

              {/* <div className="div">
                <RatingWidget />
              </div> */}

              <Stars {...thirdExample} />

              <div className="row pl-5">

                {/* <div className="hearth">
                  {/* <div className="fas fa-heart fa-2x pl-4"></div> */}
                {/* <Link to="#" className="far fa-heart fa-3x pl-4"></Link> */}
                {/* </div>} */}


                {/* Render element if props.favorite is true or false, but if isn't favorite icon will not show */}
                {props.favorite === true || props.favorite === false ?
                  <Hearth
                    favorite={props.favorite}
                    changeFavorite={props.changeFavorite}

                  />
                  : null}

                {/* React.createElement(WatchList) */}
                <div className="pl-5">
                  <WatchList
                    watchlist={props.watchlist}
                    changeWatchList={props.changeWatchList}
                  />
                </div>


                {/* {props.watchlist === true || props.watchlist === false ?
                  <WatchList
                    watchlist={props.favorite}
                    changeWatchList={props.changeWatchList}
                  // changeFavorite={props.changeFavorite}
                  />
                  : null} */}

                {/* <div className="fas fa-history watch fa-3x pl-5 pt-3"></div> */}

                {/* <div className="fas fa-clipboard-list fa-2x pl-4 text-success"></div> */}
                <div className="pl-4">
                  <div className="fas fa-list-ol fa-3x pl-5 text-success pt-3"></div>

                </div>
                {/* <div className="fas fa-list-ul fa-2x pl-4 text-success"></div> */}
                {/* <div className="far fa-list-alt fa-2x pl-4 text-success"></div> */}
                {/* <div className="fas fa-th-list fa-2x pl-4 text-success"></div> */}

              </div>

            </div>

          </div>

        </div>

        <div className="far fa-file-video fa-6x" name="film" />

      </div>

      {/* end of background image */}

    </div>
  )
}

export default MovieInfo;