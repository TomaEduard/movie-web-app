import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
// import { API_URL, API_KEY } from '../../../config';
// import Navigation from '../Navigation/Navigation';
// import MovieInfo from '../MovieInfo/MovieInfo';
// import MovieInfoBar from '../MovieInfoBar/MovieInfoBar';
// import FourColGrid from '../FourColGrid/FourColGrid';
// import Actor from '../Actor/Actor';
// import Spinner from '../Spinner/Spinner';
import './Preferences.css';


// fas fa-star-half-alt

class Preferences extends Component {
  state = {

  }

  render() {

    return (
      <div className="">

        {/* Image */}
        <img className="container-flid image"
          src={require('../../../../src/images/stars-cut2.jpg')}
        />

        <div className="container">

          {/* Category */}
          <div className="pt-4 pb-3 row">

            <Form>
              <h5 className="pb-1">
                <strong>Category</strong>
              </h5>

              <div
                key="custom-inline-1"
                className="mb-2 pt-3" >

                <Form.Check
                  className="category-text"
                  custom
                  inline
                  label="Favorite"
                  type="checkbox"
                  id="custom-inline-1"
                />
              </div>

              <div key="ustom-inline-2" className="mb-2">
                <Form.Check
                  className="category-text"
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
                  custom
                  inline
                  label="Playlist"
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
                    custom
                    type="radio"
                    label=""
                    name="formHorizontalRadios"
                    id="customRadio4"
                  />
                </div>

                <div className="stars pt-1">
                  <div className="fas fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                  <div className="far fa-star fa-2x"></div>
                </div>

                <div className="text pl-2 pt-2">1.0&up</div>
              </div>


            </Form>


          </div>









        </div>

      </div>

    )
  }
}

export default Preferences;