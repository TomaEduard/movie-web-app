import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {

  // $(document).ready(function () {
  //   $('.nav-button').click(function () {
  //     $('.nav-button').toggleClass('change');
  //   });

  //   $(window).scroll(function () {
  //     let position = $(this).scrollTop();
  //     if (position >= 200) {
  //       $('.nav-menu').addClass('custom-navbar');
  //     } else {
  //       $('.nav-menu').removeClass('custom-navbar');
  //     }
  //   });
  // });

  return (

    <nav className="navbar navbar-expand-lg fixed-top nav-menu">
      {/* 
      <div className="navbar-brand text-light text-uppercase"
      ><span className="h2 font-weight-bold">Movie</span><span class="h1">App</span>
      </div> */}

      <div className="navbar-brand icon-header">
        <Link to="/">
          <img className="rmdb-logo"
            // src="./images/1asd.png"
            src="./../../../images/1asd.png"
            alt="rmdb-logo"
          />
        </Link>
      </div>

      <button
        class="navbar-toggler nav-button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div class="bg-light line1"></div>
        <div class="bg-light line2"></div>
        <div class="bg-light line3"></div>
      </button>

      <div className="collapse navbar-collapse justify-content-end font-weight-bold" id="navbarNavAltMarkup">

        {/* nav-active */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="#" class="nav-link m-2 menu-item">Sign Up / Log In</Link>
          </li>
          <li className="nav-item">
            <Link to="#" class="nav-link m-2 menu-item">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="#" class="nav-link m-2 menu-item">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="#" class="nav-link m-2 menu-item">Community</Link>
          </li>
        </ul>
      </div>
    </nav>

    // <div className="rmdb-header">
    //   <div className="rmdb-header-content">

    //     <Link to="/">
    //       <img className="rmdb-logo"
    //         src="./images/reactMovie_logo.png"
    //         alt="rmdb-logo" />
    //     </Link>

    //     <img className="rmdb-tmdb-logo"
    //       src="./images/tmdb_logo.png"
    //       alt="tmdb-logo" />

    //   </div>
    // </div>
  )
}

export default Header;