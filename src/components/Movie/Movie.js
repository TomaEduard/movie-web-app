import React, { Component } from 'react';
import { API_URL, API_KEY } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import './Movie.css';

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,

    rating: null,
    favorite: null,
    watchlist: false,
    playlist: false,
  }

  // function for rating
  changeRating = (newRating) => {
    this.setState({
      rating: newRating.toFixed(1),
    })

    var data = {
      "favorite": this.state.favorite,
      "id": this.props.match.params.movieId,
      "name": this.state.movie.original_title,
      "rating": newRating,
      watchlist: this.state.watchlist
    }

    fetch('http://localhost:8083/movies', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      })
    // .then(function (myJson) {
    //   console.log(JSON.stringify(myJson));
    // });
    console.log("changeRating - ", data);
  }

  // function for favorite
  changeFavorite = (newValue) => {
    console.log("#1 changeFavorite: ", this.state.favorite);

    // if (newValue == null) {
    //   this.setState({
    //     favorite: false,
    //   });
    // } else {
    //   this.setState({
    //     favorite: !newValue,
    //   });
    // }

    this.setState({
      favorite: newValue,
    });

    console.log("Movie - changeFavorite - newValue -", newValue);

    var data = {
      "favorite": newValue,
      "id": this.props.match.params.movieId,
      "name": this.state.movie.original_title,
      "rating": this.state.rating,
      watchlist: this.state.watchlist
    }

    fetch('http://localhost:8083/movies', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      })
    // .then(function (myJson) {
    //   console.log(JSON.stringify(myJson));
    // });
    console.log("changeRating - ", data);
  }

  // function for watchlist
  changeWatchList = (newValue) => {
    console.log("#1 changeWatchList: ", this.state.watchlist);

    this.setState({
      watchlist: newValue,
    });

    console.log("Movie - changeWatchList - newValue -", newValue);

    var data = {
      "favorite": this.state.favorite,
      "id": this.props.match.params.movieId,
      "name": this.state.movie.original_title,
      "rating": this.state.rating,
      watchlist: newValue
    }

    fetch('http://localhost:8083/movies', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(function (response) {
        return response.json();
      })
    // .then(function (myJson) {
    //   console.log(JSON.stringify(myJson));
    // });
    console.log("changeWatchList - ", data);
  }

  // function for changePlayList
  changePlayList = (newValue) => {
    console.log("#1 changeWatchList: ", this.state.watchlist);

    this.setState({
      playlist: newValue,
    });

    console.log("Movie - changeWatchList - newValue -", newValue);
  }

  componentDidMount() {
    this.setState({ loading: true })

    // fetch the movie from open API
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint); // Online API #1, #2

    // fetch the properties movie from local API
    const request = `http://localhost:8083/movies/${this.props.match.params.movieId}`;
    this.fetchLocalItem(request); // Local API
  }

  fetchLocalItem = (request) => {
    fetch(request)
      .then(result => result.json())
      .then(result => {

        if (result.rating != null) {
          this.setState({
            favorite: result.favorite,
            watchlist: result.watchlist,
            rating: result.rating.toFixed(1),
          })
        } else {
          this.setState({
            favorite: result.favorite,
            watchlist: result.watchlist,
            rating: 0.0,
          })
        }

        console.log("Movie - local API: ", result);
        console.log("Movie - favorite-state: ", this.state.favorite);

      })
  }


  // fetchLocalItem = (request) => {
  //   fetch(request)
  //     .then(result => result.json())
  //     .then(result => {

  //       if (result.rating != null && result.favorite == undefined) {
  //         this.setState({
  //           favorite: false,
  //           watchlist: result.watchlist,
  //           rating: result.rating.toFixed(1),
  //         });
  //       } else if (result.rating == null && result.favorite != undefined) {
  //         this.setState({
  //           favorite: result.favorite,
  //           watchlist: result.watchlist,
  //           rating: 0,
  //         });
  //       } else if (result.rating != null && result.favorite != null) {
  //         this.setState({
  //           favorite: result.favorite,
  //           watchlist: result.watchlist,
  //           rating: result.rating.toFixed(1),
  //         });
  //       } else if (result.rating == null && result.favorite == null) {
  //         this.setState({
  //           favorite: false,
  //           watchlist: result.watchlist,
  //           rating: 0,
  //         });
  //       }

  //       console.log("Movie - local API: ", result);
  //       console.log("Movie - favorite-state: ", this.state.favorite);

  //     })
  // }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log("Movie - #1 Online API: ", result);
        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          // save the movie in movie state
          this.setState({ movie: result }, () => {

            // ... then fetch actors in the setState callback function
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then(result => result.json())
              .then(result => {
                console.log("Movie - #2 Online API: ", result);
                const directors = result.crew.filter((member) => member.job === "Director");

                this.setState({
                  actors: result.cast,
                  directors,
                  loading: false
                })
              })
          })
        }
      })
      .catch(error => console.error('Error:', error))
  }

  render() {

    // console.log("Movie - changeFavorite!: ", this.changeFavorite);

    return (
      <div className="rmdb-movie">
        {/* Check if have any movie in the state */}

        {this.state.movie &&
          <div>

            <Navigation movie={this.state.movie} />

            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
              rating={this.state.rating}
              watchlist={this.state.watchlist}
              movieId={this.props.match.params.movieId}
              title={this.state.movie.original_title}
              favorite={this.state.favorite}

              playlist={this.state.playlist}


              // function
              changeRating={this.changeRating}
              changeFavorite={this.changeFavorite}
              changeWatchList={this.changeWatchList}

              changePlayList={this.changePlayList}

            />

            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />

          </div>
        }

        {/* Check if have any actors */}
        {this.state.actors ?
          <div className="rmdb-movie-grid">
            <FourColGrid header={'Actors'}>
              {/* for each actor in the array create an actor element */}
              {this.state.actors.map((element, i) => {
                return <Actor key={i} actor={element} />
              })}
            </FourColGrid>

            {/* if don't have any actor type <h1>No Movie Found!</h1> */}
            {!this.state.actors && !this.state.loading ? <h1>No Movie Found!</h1> : null}
            {this.state.loading ? <Spinner /> : null}
          </div>
          : null}
      </div>

    )
  }
}

export default Movie;