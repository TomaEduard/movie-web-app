import React, { Component } from 'react';
import Category from '../Category/Category';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
// import { API_URL, API_KEY } from '../../../config';
import Navigation from '../Navigation/Navigation';
// import MovieInfo from '../MovieInfo/MovieInfo';
// import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
// import FourColGrid from '../FourColGrid/FourColGrid';
// import Actor from '../Actor/Actor';
// import Spinner from '../Spinner/Spinner';
import './Preferences.css';

// fas fa-star-half-alt

class Preferences extends Component {
  state = {
    name: "Preferences & Filters",
  }

  render() {

    return (
      <div className="">

        {/* Image */}
        <img className="container-flid image"
          src={require('../../../../src/images/stars-cut2.jpg')}
          alt='../../../../src/images'
        />

        <div className="navigation-preferences">
          <Navigation movie={this.state.name} />
        </div>

        <div className="">
          <Category />
        </div>

      </div>

    )
  }
}

export default Preferences;