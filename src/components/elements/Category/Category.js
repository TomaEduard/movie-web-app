import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FourColGridForPreferences from '../../elements/FourColGridForPreferences/FourColGridForPreferences';
import MovieThumb from '../../elements/MovieThumb/MovieThumb';
import Spinner from '../../elements/Spinner/Spinner';
import LoadMoreBtn from '../../elements/LoadMoreBtn/LoadMoreBtn';

import {
  LOCAL_API_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  // BACKDROP_SIZE
} from '../../../config';

import './Category.css';

class Category extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],

      pageNumber: 1,
      totalPages: 0,
      totalElements: 0,       // total
      numberOfElements: 0,    // on page

      favorite: false,
      watchlist: false,
      rating: 0,
      partialName: '',

      loading: false,
      header: 'All your movie/s',
    };

  }

  componentDidMount() {
    if (localStorage.getItem('Category')) { // Check if we have state in ls befor making query
      // take string from ls and convert back to object
      const state = JSON.parse(localStorage.getItem('Category'))
      // setState previous var
      this.setState({...state})
    } else { // if not exist Category item in ls make a request
      this.setState({ loading: true });
      const request = `${LOCAL_API_URL}movies?$pageNumber=${this.state.pageNumber}&pageSize=20`;
      this.fetchLocalItems(request);
    }
  }

  fetchLocalItems = (endpoint) => {

    this.setState({
      movies: []
    })

    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log("Category - componentDidMount - localItem", result);
        if (result.status_code) {
        } else {

          // take only Id from result
          let getMovieId = result.content.map(result => result.id)
          console.log("Category - filtre - getMovieId", getMovieId);
          console.log("Category - length - getMovieId.length", getMovieId);

          this.setState({
            totalPages: result.totalPages,              // take for button
            totalElements: result.totalElements,
            numberOfElements: result.numberOfElements,
          })


          // query to public API with this id's
          getMovieId.map(result => {
            var url = `${API_URL}movie/${result}?api_key=${API_KEY}&language=en-US`
 
            fetch(url)
              .then(result => result.json())
              .then(result => {
                // console.log("Category - movieId Query - ", result.id);

                this.setState({
                  movies: [                  // [] cuz we have an array
                    ...this.state.movies,    // copy old state
                    result                   // update old state with result/specific key
                  ],
                  loading: false,            // turn off spinner
                }, () => {  // After set state, save data in ls if search element is empty
                  if (this.state.partialName === "") {
                    // Convert object to string for storage
                    localStorage.setItem('Category', JSON.stringify(this.state));
                  }
                })

              })
          })

        }
      })
      .catch(error => console.error('Error:', error))
  }

  // function for change state
  setFavorite(value) {

    // { () => (value === null ? true : !value) }
    this.setState({ favorite: value });
    var fav = '' + (value === true ? `favorite=${value}&` : '');
    var wat = '' + (this.state.watchlist === true ? `&watchlist=${this.state.watchlist}` : '');

    let request = `${LOCAL_API_URL}movies?${fav}pageNumber=${this.state.pageNumber}&pageSize=20&rating=${this.state.rating}${wat}`

    this.fetchLocalItems(request);
  }

  setWatchlater(value) {
    this.setState({ watchlist: value });

    var fav = '' + (this.state.favorite === true ? `favorite=${this.state.favorite}&` : '');
    var wat = '' + (value === true ? `&watchlist=${value}` : '');

    let request = `${LOCAL_API_URL}movies?${fav}pageNumber=${this.state.pageNumber}&pageSize=20&rating=${this.state.rating}${wat}`

    this.fetchLocalItems(request);
  }

  setRating(value) {
    this.setState({ rating: value });
    var fav = '' + (this.state.favorite === true ? `favorite=${this.state.favorite}&` : '');
    var wat = '' + (this.state.watchlist === true ? `&watchlist=${this.state.watchlist}` : '');

    let request = `${LOCAL_API_URL}movies?${fav}pageNumber=${this.state.pageNumber}&pageSize=20&rating=${value}${wat}`

    this.fetchLocalItems(request);
  }

  doSearch = (e) => {
    console.log(e.target.value);

    // clearTimeout(this.cleartimeout)
    // this.timeout = setTimeout(() => {this.state.partialName }, 800);
    this.setState({ partialName: e.target.value })


    var fav = '' + (this.state.favorite === true ? `favorite=${this.state.favorite}&` : '');
    var wat = '' + (this.state.watchlist === true ? `&watchlist=${this.state.watchlist}` : '');
    var par = '' + (this.state.partialName !== '' ? `&partialName=${this.state.partialName}` : '');

    let request = `${LOCAL_API_URL}movies?${fav}pageNumber=${this.state.pageNumber}${par}&pageSize=20&rating=${this.state.rating}${wat}`

    this.fetchLocalItems(request);
  }

  resetState() {
    this.setState({
      favorite: false,
      watchlist: false,
      rating: 0,
      search: '',
      header: 'All your movie/s',
    })

    //from didMount
    const request = `${LOCAL_API_URL}movies?$pageNumber=${this.state.pageNumber}&pageSize=20`;
    this.fetchLocalItems(request);
  }

  // Load more button   not work api yet
  loadMoreItems = () => {
    this.setState({
      pageNumber: this.state.pageNumber + 1,
      loading: true,
    })

    let request = `${LOCAL_API_URL}movies?pageNumber=${this.state.pageNumber}&pageSize=20`;

    // endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;

    this.fetchLocalItems(request);
  }

  render() {
    // console.log('Category - state - ', this.state);

    return (
      <div className="div">

        <div className="container-fluid shadow-lg p-1 mb-5 rounded">


          <div className=" container">

            {/* Category */}
            <div className="mt-5 pb-3 pl-4 row ">

              <Form>
                <h5 className="pb-1">
                  <strong>Category</strong>
                </h5>

                <div
                  key="custom-inline-1"
                  className="mb-2 pt-3" >
                  {/* checked={(this.state.rating === 0.5 ? true : false)} */}
                  <Form.Check
                    className="category-text"
                    checked={this.state.favorite}
                    onChange={() => this.setFavorite(!this.state.favorite)}
                    // onChange={this.state.favorite === null ? true : !this.state.favorite}
                    // onChange={() => this.setRating(4.5)}
                    // checked={(this.state.rating === 4.5 ? true : false)}

                    custom
                    inline
                    label="Favorite"
                    type="checkbox"
                    id="custom-inline-1"
                  />
                </div>

                <div key="custom-inline-2" className="mb-2">
                  <Form.Check
                    // onChange={() => this.setWatchlater(this.state.watchlist == n)}
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

                <div key="custom-inline-3" className="mb-2">
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

                <div key="custom-inline-4" className="mb-2">
                  <Form.Check
                    className="category-text"
                    disabled
                    custom
                    inline
                    label="Gene(disabled)"
                    type="checkbox"
                    id="custom-inline-4"
                  />
                </div>

              </Form>


              {/* Rating */}
              <Form className="pl-5">

                <h5 className="pb-4">
                  <strong>Rating</strong>
                </h5>

                {/* 4.0 & up stars */}
                <div className="row">
                  <div
                    key="rating-inline-1"
                    className="radio-padding" >

                    <Form.Check
                      onChange={() => this.setRating(4.5)}
                      checked={(this.state.rating === 4.5 ? true : false)}
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
                    <div className="fas fa-star-half-alt fa-2x"></div>
                  </div>

                  <div className="text pl-2 pt-2">4.5&up</div>
                </div>

                {/* 3.0 & up stars */}
                <div className="row padding-row2-row4-rating">
                  <div
                    key="rating-inline-1"
                    className="radio-padding" >

                    <Form.Check
                      onChange={() => this.setRating(3)}
                      checked={(this.state.rating === 3 ? true : false)}
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
                    key="rating-inline-1"
                    className="radio-padding" >

                    <Form.Check
                      onChange={() => this.setRating(2)}
                      checked={(this.state.rating === 2 ? true : false)}
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

                {/* 0.5 & up stars */}
                <div className="row padding-row2-row4-rating">
                  <div
                    key="rating-inline-1"
                    className="radio-padding" >

                    <Form.Check
                      onChange={() => this.setRating(0.5)}
                      checked={(this.state.rating === 0.5 ? true : false)}
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

                {/* 0 & up stars */}
                <div className="row padding-row2-row4-rating">
                  <div
                    key="rating-inline-1"
                    className="radio-padding" >

                    <Form.Check
                      onChange={() => this.setRating(0)}
                      checked={(this.state.rating === 0 ? true : false)}
                      custom
                      type="radio"
                      label=""
                      name="formHorizontalRadios"
                      id="customRadio5"
                    />
                  </div>

                  {/* <div className="stars pt-1">
                  <div className="fas fa-star fa-2x fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                </div> */}

                  <div className="text pl-2 pt-2">Show all Rating Movie/s</div>
                </div>

              </Form>

              <Button
                className="button mt-auto ml-4 mb-2 pl-2"
                variant="outline-warning"
                onClick={() => this.resetState()}>
                {/* // onClick={this.resetState}  */}

                Reset
            </Button>


              <div className="d-flex align-items-start flex-column pl-4">

                <h5 className="mt-1 pl-1">
                  <strong>Search</strong>
                </h5>

                <Form.Group
                  className="search mt-auto pl-2">
                  {/* <Form.Label>Search </Form.Label> */}
                  <Form.Control
                    // className="mt-auto"
                    type="search"
                    placeholder="Search..."
                    onChange={this.doSearch}
                  />
                  <Form.Text className="te xt-muted">
                    Search by name a movie/s from your preferences.
                  </Form.Text>
                </Form.Group>

              </div>

            </div>
          </div>

        </div>

        <div className="container">

          <FourColGridForPreferences
            // if this.state.searchTerm exist set header 'Search Result' if not 'Popular Movies'
            header={this.state.header}
            loading={this.state.loading}
            totalElements={this.state.totalElements}
            numberOfElements={this.state.numberOfElements}
          >

            {this.state.movies.map((element, i) => {
              return <MovieThumb
                key={i}
                clickable={true}
                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}

                movieId={element.id}
                movieName={element.original_title}
              />
            })}

          </FourColGridForPreferences>

          {this.state.loading ? <Spinner /> : null}
        </div>

        <div className="py-4">
          {(this.state.pageNumber < this.state.totalPages && !this.state.loading) ?
            <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
            : null}

        </div>

      </div>
    );

  }

}

export default Category;