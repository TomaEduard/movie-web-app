import React from 'react';
import { Link } from 'react-router-dom';
import Media from "react-media";
import './Footer.css';
import Contact from '../Contact/Contact';

const Footer = () => {


  return (

    <footer class="page-footer font-small blue-grey lighten-5">

      <div className="container-fliid shadow-lg"
        style={{
          background: '#fed90f'
        }}>

        <div class="container">

          <div class="row py-4 d-flex align-items-center">

            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Get connected with us on social networks!</h6>
            </div>

            <div class="col-md-6 col-lg-7 text-center text-md-right">

              {/* <div className="wrapper">
                <ul>

                  <Link to="/">
                    <li class="fab fa-facebook text-dark mr-4 fa-2x"> </li>
                  </Link>

                  <Link to="/">
                    <i class="fab fa-twitter text-dark mr-4 fa-2x"> </i>
                  </Link>

                  <Link to="/">
                    <li class="fab fa-google-plus-g text-dark mr-4 fa-2x"> </li>
                  </Link>

                  <Link to="/">
                    <li class="fab fa-linkedin-in text-dark mr-4 fa-2x"> </li>
                  </Link>

                  <Link to="/">
                    <li class="fab fa-instagram text-dark mr-4 fa-2x"> </li>
                  </Link>

                </ul>
              </div> */}

              <div class="wrapper">
                <ul>
                  <li class="facebook"><i class="fab fa-facebook fa-2x" aria-hidden="true"></i></li>
                  <li class="twitter"><i class="fab fa-twitter fa-2x" aria-hidden="true"></i></li>
                  <li class="instagram"><i class="fab fa-instagram fa-2x" aria-hidden="true"></i></li>
                  <li class="google"><i class="fab fa-google-plus-g fa-2x" aria-hidden="true"></i></li>
                  <li class="whatsapp"><i class="fab fa-whatsapp fa-2x" aria-hidden="true"></i></li>
                  <li class="whatsapp"><i class="fab fa-linkedin-in fa-2x" aria-hidden="true"></i></li>
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

        <div class="container text-center text-md-left">

          <div class="row text-dark">

            <div class="col-md-3 col-lg-4 col-xl-3 mb-4">

              <h6 class="text-uppercase font-weight-bold">About Us</h6>

              {/* style="width: 60px;"  */}
              <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur
                adipisicing elit.
      </p>

            </div>

            <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase font-weight-bold">Need Help ?</h6>
              {/* style="width: 60px;" */}
              <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a class="dark-grey-text" href="#!">Customer Service</a>
              </p>
              <p>
                <a class="dark-grey-text" href="#!">Online Chat</a>
              </p>
              <p>
                <a class="dark-grey-text" href="#!">Support</a>
              </p>
              <p>
                <a class="dark-grey-text" href="#!">Help</a>
              </p>

            </div>

            <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

              <h6 class="text-uppercase font-weight-bold">Useful links</h6>
              {/* style="width: 60px;" */}
              <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <a class="dark-grey-text" href="#!">Your Account</a>
              </p>
              <p>
                <a class="dark-grey-text" href="#!">Become an Affiliate</a>
              </p>
              <p>
                <a class="dark-grey-text" href="#!">Shipping Rates</a>
              </p>


            </div>

            <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

              <h6 class="text-uppercase font-weight-bold">Contact</h6>
              {/* style="width: 60px;"  */}
              <hr class="teal accent-3 mb-4 mt-0 d-inline-block mx-auto" />
              <p>
                <i class="fas fa-home mr-3"></i> New York, NY 10012, US</p>
              <p>
                <i class="fas fa-envelope mr-3"></i> info@example.com</p>
              <p>
                <i class="fas fa-phone mr-3"></i> + 01 234 567 88</p>
              <p>
                <i class="fas fa-print mr-3"></i> + 01 234 567 89</p>

            </div>

          </div>

        </div>
      </div>

      <div className="container"
        style={{
          background: '#fff'
        }}>

        <div class="footer-copyright text-black-50"> Privacy Policy | Terms of Use | License | Support
        <a class="float-right"> 2019 ©All Right Reserved M.app, Inc </a>
        </div>
      </div>

    </footer>

  )
}

export default Footer;