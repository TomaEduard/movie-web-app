import React from 'react';
import { Link } from 'react-router-dom';
import Media from "react-media";
import './Footer.css';
import Contact from '../Contact/Contact';

const Footer = () => {


  return (

    <footer className="page-footer font-small blue-grey lighten-5">

      <div className="container-fliid shadow-lg"
        style={{
          background: '#fed90f'
        }}>

        <div className="container">

          <div className="row py-4 d-flex align-items-center">

            <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">Get connected with us on social networks!</h6>
            </div>

            <div className="col-md-6 col-lg-7 text-center text-md-right">

              <div className="wrapper">
                <ul>
                  <li className="facebook"><i className="fab fa-facebook fa-2x" aria-hidden="true"></i></li>
                  <li className="twitter"><i className="fab fa-twitter fa-2x" aria-hidden="true"></i></li>
                  <li className="instagram"><i className="fab fa-instagram fa-2x" aria-hidden="true"></i></li>
                  <li className="google"><i className="fab fa-google-plus-g fa-2x" aria-hidden="true"></i></li>
                  <li className="whatsapp"><i className="fab fa-whatsapp fa-2x" aria-hidden="true"></i></li>
                  <li className="whatsapp"><i className="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></li>
                </ul>
              </div>


            </div>
          </div>

        </div>

      </div>

      <div className="container-fliid pt-5"
        style={{
          background: '#'
        }}>

        <div className="container text-center text-md-left">

          <div className="row text-dark">

            <div className="col-md-3 col-lg-4 col-xl-3 mb-4">

              <h6 className="text-uppercase font-weight-bold">About Us</h6>

              {/* style="width: 60px;"  */}
              <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur
                adipisicing elit.
      </p>

            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold">Need Help ?</h6>
              {/* style="width: 60px;" */}
              <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a className="dark-grey-text" href="#!">Customer Service</a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">Online Chat</a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">Support</a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">Help</a>
              </p>

            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 className="text-uppercase font-weight-bold">Useful links</h6>
              {/* style="width: 60px;" */}
              <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a className="dark-grey-text" href="#!">Your Account</a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a className="dark-grey-text" href="#!">Shipping Rates</a>
              </p>


            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 className="text-uppercase font-weight-bold">Contact</h6>
              {/* style="width: 60px;"  */}
              <hr className="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p>
                <i className="fas fa-envelope mr-3"></i> info@example.com</p>
              <p>
                <i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p>
                <i className="fas fa-print mr-3"></i> + 01 234 567 89</p>

            </div>

          </div>

        </div>
      </div>

      <div className="container"
        style={{
          background: '#fff'
        }}>

        <div className="footer-copyright text-black-50"> Privacy Policy | Terms of Use | License | Support
        <a className="float-right"> 2019 ©All Right Reserved M.app, Inc, FastTrackIT </a>
        </div>
      </div>

    </footer>

  )
}

export default Footer;