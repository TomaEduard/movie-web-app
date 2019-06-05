import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './Category.css';

class Category extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   hover: false
  // };
  // }

  // handleHover() {
  //   this.setState({ hover: !this.state.hover });
  // }

  render() {

    return (
      <div className="div">

        <div className="container">

          {/* Category */}
          <div className="pl-5 mt-5 pb-3 row">

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


            <Button
              // size="lg"
              className="button mt-auto ml-4 mb-2"
              variant="outline-warning"
            >
              Reset
  </Button>

            <div className="d-flex align-items-start flex-column pl-5">

              <h5 className="mt-1">
                <strong>Search</strong>
              </h5>

              <Form.Group
                className="search mt-auto">
                {/* <Form.Label>Search </Form.Label> */}
                <Form.Control
                  // className="mt-auto"
                  type="search"
                  placeholder="Search..." />
                <Form.Text className="text-muted">
                  Search by name a movie/movies from your preferences.
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


