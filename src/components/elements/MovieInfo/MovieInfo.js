import React from 'react';
import { IMAGE_BASE_URL, POSTER_SIZE, BACKDROP_SIZE } from '../../../config';
import MovieThumb from '../MovieThumb/MovieThumb';
// import RatingWidget from '../Rating/Rating';
import './MovieInfo.css';
import Stars from '../../../react-stars';
import Hearth from '../Hearth/Hearth';
import WatchList from '../WatchList/WatchList';
import PlayList from '../PlayList/PlayList';
import { DropdownButton, Dropdown } from 'react-bootstrap'
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

      <div className="container rmdb-movieinfo-content">

        <div className="rmdb-movieinfo-thumb">
          <MovieThumb
            image={props.movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.movie.poster_path}` : './images/no_image.jpg'}
            clickable={false}
          />
        </div>


        <div className="rmdb-movieinfo-text">

          <div className="row ml-1">
            <h2 className="">{props.movie.title}</h2>

            <div className="ml-auto mr-3 ">

              <DropdownButton id="dropdown-item-button"
                drop="left"
                title=""
              >
                <Dropdown.Item>
                  <img className="share-logo pt-0 my-1"
                    src="./../../../images/mn43.png"
                    alt="./../../../images/no_image.jpg"

                  />
                  <span className="test1 pl-3">Share this Movie</span>
                </Dropdown.Item>

                <Dropdown.Item>
                  <img className="rating-logo pt-0 my-1"
                    src="./../../../images/img_169531.png"
                    alt="./../../../images/no_image.jpg"
                  />
                  <span className="test1 pl-3">Add Rating</span>
                </Dropdown.Item>

                <Dropdown.Item>
                  <img className="heart-logo pt-0 my-1"
                    src="./../../../images/favorite-heart-icon-21.png"
                    alt="./../../../images/no_image.jpg"
                  />
                  <span className="test1 pl-3 mt-5">Add to Favorite</span>
                </Dropdown.Item>

                <Dropdown.Item>
                  <img className="watchlist-logo pt-0 my-1"
                    src="./../../../images/Artboard_28-512.png"
                    alt="./../../../images/no_image.jpg"
                  />
                  <span className="test1 pl-3">Add to Watchlist</span>
                </Dropdown.Item>

                <Dropdown.Item>
                  <img className="playlist-logo pt-0 my-1 pl-0"
                    src="./../../../images/Add_category-_playlist-512.png"
                    alt="./../../../images/no_image.jpg"
                  />
                  <span className="test1 pl-1">Add to Playlist</span>
                </Dropdown.Item>

                <Dropdown.Item>
                  <img className="edit-logo pt-0 my-1"
                    src="./../../../images/026f3d3b617ad8234f2fb8f9b3b4d310.png"
                    alt="./../../../images/no_image.jpg"
                  />
                  <span className="test1 pl-3">Add Comment to Movie</span>
                </Dropdown.Item>

                <Dropdown.Divider />

                <Dropdown.Item>
                  <img className="flag-logo pt-0 my-1"
                    src="./../../../images/fontawesome_flag_alt_868291.png"
                    alt="./../../../images/no_image.jpg"
                  />
                  <span className="test1 pl-3">Report Movie</span>
                </Dropdown.Item>

                <Dropdown.Item>
                  <img className="download-logo pt-0 "
                    src="./../../../images/jsw-download-icon-2.png"
                    alt="./../../../images/no_image.jpg"
                  />
                  <span className="test1 pl-3">Download Post</span>
                </Dropdown.Item>


              </DropdownButton>
            </div>


          </div>

          <p className="description">{props.movie.overview}</p>

          <div className="container">
            <div className="row">

              <div className="col-md-4 col-sm-4 col-xs-4">

                <h3>IMDB RATING</h3>

                <div className="rmdb-rating">
                  <meter min="0" max="100" optimum="100" low="40" high="70" value={props.movie.vote_average * 10}></meter>

                </div>

                <h2 className="rmdb-score">{props.movie.vote_average}
                  <span className="maxim-rating">/ 10</span></h2>

              </div>

              {/* <div className="col-md-5">

                <h2 className="rmdb-score">{props.movie.vote_average} /
                <span className="maxim-rating"> 10</span></h2>

              </div> */}

              <div className="col-md-4 col-sm-4 col-xs-4">

                <img className="imdb-logo"
                  src="./../../../images/IMDB001.png"
                  alt="./../../../images/no_image.jpg"
                />

              </div>


              <div className="col-md-2 col-sm-2 col-xs-2">
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

            <div className="row pl-4">

              <Stars {...thirdExample} />

              <div className="row pl-5 pt-2">


                <Hearth
                  favorite={props.favorite}
                  changeFavorite={props.changeFavorite}
                />

                {/* React.createElement(WatchList) */}
                <div className="WatchList">
                  <WatchList
                    watchlist={props.watchlist}
                    changeWatchList={props.changeWatchList}
                    // function
                    changePlayList={props.changePlayList}
                  />
                </div>


                {/* <div className="fas fa-clipboard-list fa-2x pl-4 text-success"></div> */}


                <div className="List">
                  <PlayList
                    playlist={props.playlist}
                    changePlayList={props.changePlayList}
                  />
                </div>

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