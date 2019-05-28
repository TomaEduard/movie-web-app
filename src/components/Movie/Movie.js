import React, { Component } from 'react';
import { API_URL, API_KEY, LOCAL_API_URL } from '../../config';
import Navigation from '../elements/Navigation/Navigation';
import MovieInfo from '../elements/MovieInfo/MovieInfo';
import MovieInfoBar from '../elements/MovieInfoBar/MovieInfoBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import Actor from '../elements/Actor/Actor';
import Spinner from '../elements/Spinner/Spinner';
import Stars from '../Stars/Stars1';
import './Movie.css';

class Movie extends Component {
  state = {
    movie: null,
    actors: null,
    directors: [],
    loading: false,

    rating: null,
    favorite: false,
    watchlist: false,

  }

  changeRating = (newRating) => {

    this.setState({
      rating: newRating.toFixed(1),
    })

    var data = {
      "favorite": true,
      "id": 299534,
      "name": ":D",
      "rating": newRating,
      watchlist: false
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

  }



  componentDidMount() {

    this.setState({ loading: true })

    // fetch the movie from open API
    const endpoint = `${API_URL}movie/${this.props.match.params.movieId}?api_key=${API_KEY}&language=en-US`;
    this.fetchItems(endpoint);

    // fetch the properties movie from local API
    const request = `http://localhost:8083/movies/${this.props.match.params.movieId}`;
    this.fetchLocalItem(request);
  }

  fetchLocalItem = (request) => {
    fetch(request)
      .then(result => result.json())
      .then(result => {

        this.setState({
          favorite: result.favorite,
          rating: result.rating.toFixed(1),
          watchlist: result.watchlist
        })

        console.log("Movie - favorite - " + this.state.favorite);
        console.log("Movie - rating - " + this.state.rating);
        console.log("Movie - watchlist - " + this.state.watchlist);
      })
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log("Movie - this.props.match.params.movieId - " + this.props.match.params.movieId)

        if (result.status_code) {
          this.setState({ loading: false });
        } else {
          this.setState({ movie: result }, () => {
            // ... then fetch actors in the setState callback function
            const endpoint = `${API_URL}movie/${this.props.match.params.movieId}/credits?api_key=${API_KEY}`;
            fetch(endpoint)
              .then(result => result.json())
              .then(result => {
                console.log(result)

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
    return (
      <div className="rmdb-movie">
        {/* Check if have any movie in the state */}
        {this.state.movie ?
          <div>

            <Navigation movie={this.state.movie} />

            <MovieInfo
              movie={this.state.movie}
              directors={this.state.directors}
              rating={this.state.rating}
              favorite={this.state.favorite}
              watchlist={this.state.watchlist}
              movieId={this.props.match.params.movieId}

              changeRating={this.changeRating}
            />

            <MovieInfoBar
              time={this.state.movie.runtime}
              budget={this.state.movie.budget}
              revenue={this.state.movie.revenue}
            />

            <Stars />

          </div>

          : null}
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