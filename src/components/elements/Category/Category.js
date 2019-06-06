import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {
  LOCAL_API_URL,
  // API_URL,
  // API_KEY,
  // IMAGE_BASE_URL,
  // POSTER_SIZE,
  // BACKDROP_SIZE
} from '../../../config';

import './Category.css';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: null,

      favorite: false,
      watchlist: false,
      rating: false,
      partialName: '',
    };

  }



  componentDidMount() {
    // this.setState({ loading: true });
    const request = `${LOCAL_API_URL}movies?pageNumber=1&pageSize=20&paged=true`;
    this.fetchLocalItems(request);


  }

  fetchLocalItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log("Category - Category: ", result);
        if (result.status_code) {
          // this.setState({ loading: false });
        } else {
          // save the movie in movie state
          this.setState({
            movie: result,

          })
        }
      })
      .catch(error => console.error('Error:', error))
  }


  // function for change state
  setFavorite(value) {
    this.setState({ favorite: value });
  }

  setWatchlater(value) {
    this.setState({ watchlist: value });
  }

  setRating(value) {
    this.setState({ rating: value });
  }

  resetState() {

    this.setState({
      favorite: false,
      watchlist: false,
      rating: 0,
      search: '',
    })
  }

  makeRequest() {
    // let isFavorite = '?favorite=' + (this.state.favorite === true ? 'true' : 'alse')
    let request = `http://localhost:8083/movies?favorite=${this.state.favorite}&pageNumber=0&pageSize=20&partialName=${this.state.partialName}&rating=${this.state.rating}&watchlist={this.state.watchlist}`

    // this.fetchItems(endpoint);
  }

  render() {
    console.log('Category - state - ', this.state);

    return (
      <div className="div">

        <div className="container">

          {/* Category */}
          <div className="pl-3 mt-5 pb-3 row">

            <Form>
              <h5 className="pb-1">
                <strong>Category</strong>
              </h5>

              <div
                key="custom-inline-1"
                className="mb-2 pt-3" >

                <Form.Check
                  className="category-text"
                  checked={this.state.favorite}
                  onChange={() => this.setFavorite(!this.state.favorite)}
                  custom
                  inline
                  label="Favorite"
                  type="checkbox"
                  id="custom-inline-1"
                />
              </div>

              <div key="ustom-inline-2" className="mb-2">
                <Form.Check
                  onChange={() => this.setWatchlater(!this.state.watchlist)}
                  className="category-text"
                  checked={this.state.watchlist}
                  custom
                  inline
                  label="Watchlater"
                  type="checkbox"
                  id="custom-inline-2"
                />
              </div>

              <div key="ustom-inline-3" className="mb-2">
                <Form.Check
                  className="category-text"
                  disabled
                  custom
                  inline
                  label="Playlist(disabled)"
                  type="checkbox"
                  id="custom-inline-3"
                />
              </div>
            </Form>


            {/* Rating */}
            <Form className="pl-5">

              <h5 className="pb-1">
                <strong>Rating</strong>
              </h5>

              {/* 4.0 & up stars */}
              <div className="row">
                <div
                  key="rating-inline-1"
                  className="radio-padding" >

                  <Form.Check
                    onChange={() => this.setRating(4)}
                    // checked={this.state.rating}
                    custom
                    type="radio"
                    label=""
                    name="formHorizontalRadios"
                    id="customRadio1"
                  />
                </div>

                <div className="stars pt-1">
                  <div className="fas fa-star fa-2x"></div>
                  <div className="fas fa-star fa-2x"></div>
                  <div className="fas fa-star fa-2x"></div>
                  <div className="fas fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                </div>

                <div className="text pl-2 pt-2">4.0&up</div>
              </div>

              {/* 3.0 & up stars */}
              <div className="row padding-row2-row4-rating">
                <div
                  key="rating-inline-1"
                  className="radio-padding" >

                  <Form.Check
                    onChange={() => this.setRating(3)}
                    custom
                    type="radio"
                    label=""
                    name="formHorizontalRadios"
                    id="customRadio2"
                  />
                </div>

                <div className="stars pt-1">
                  <div className="fas fa-star fa-2x"></div>
                  <div className="fas fa-star fa-2x"></div>
                  <div className="fas fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                </div>

                <div className="text pl-2 pt-2">3.0&up</div>
              </div>

              {/* 2.0 & up stars */}
              <div className="row padding-row2-row4-rating">
                <div
                  key="rating-inline-4"
                  className="radio-padding" >

                  <Form.Check
                    onChange={() => this.setRating(2)}
                    custom
                    type="radio"
                    label=""
                    name="formHorizontalRadios"
                    id="customRadio3"
                  />
                </div>

                <div className="stars pt-1">
                  <div className="fas fa-star fa-2x"></div>
                  <div className="fas fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                </div>

                <div className="text pl-2 pt-2">2.0&up</div>
              </div>

              {/* 2.0 & up stars */}
              <div className="row padding-row2-row4-rating">
                <div
                  key="rating-inline-1"
                  className="radio-padding" >

                  <Form.Check
                    onChange={() => this.setRating(0.5)}
                    custom
                    type="radio"
                    label=""
                    name="formHorizontalRadios"
                    id="customRadio4"
                  />
                </div>

                <div className="stars pt-1">
                  <div className="fas fa-star-half-alt fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                </div>

                <div className="text pl-2 pt-2">0.5&up</div>
              </div>

            </Form>

            <Button
              className="button mt-auto ml-4 mb-2"
              variant="outline-warning"
              onClick={() => this.resetState()}>
              {/* // onClick={this.resetState}  */}

              Reset
            </Button>


            <div className="d-flex align-items-start flex-column pl-5">

              <h5 classN ame="mt-1">
                <strong>Search</strong>
              </h5>

              <Form.Group
                className="search mt-auto">
                {/* <Form.Label>Search </Form.Label> */}
                <Form.Control
                  // className="mt-auto"
                  type="search"
                  placeholder="Search..." />
                <Form.Text className="te xt-muted">
                  Search by name a movie/s from your preferences.
                </Form.Text>
              </Form.Group>

            </div>

          </div>
        </div>
      </div>
    );

  }

}

export default Category;


