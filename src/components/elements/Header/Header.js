import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownButton, Dropdown } from 'react-bootstrap'

import './Header.css';

const Header = () => {

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
        className="navbar-toggler nav-button"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <div className="bg-light line1"></div>
        <div className="bg-light line2"></div>
        <div className="bg-light line3"></div>
      </button>

      <div className="collapse navbar-collapse justify-content-end font-weight-bold" id="navbarNavAltMarkup">

        {/* nav-active */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="#" className="nav-link m-2 menu-item">Sign Up / Log In</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link m-2 menu-item">FAQ</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link m-2 menu-item">Contact</Link>
          </li>
          <li className="nav-item">
            <Link to="#" className="nav-link m-2 menu-item">Community</Link>
          </li>
          {/* <li className="nav-item">
            <Link to="#" className="fas fa-ellipsis-v fa-2x mt-3 text-light pr-3"></Link>
          </li> */}

        </ul>

        <DropdownButton
          drop="left"
          title=""
          className=""
        >
          <Dropdown.Item>
            <Link to="/preferences"
              className="linkasd">
              <img className="preferences-logo opacity pt-0 my-1"
                src="./../../../images/Vector-20-512.png"
                alt="./../../../images/no_image.jpg"
              />
              <span className="test1 pl-3">Preferences & Filters</span>

            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/"
              className="linkasd">
              <img className="signOut-logo opacity pt-0 my-1 "
                src="./../../../images/img_87594.png"
                alt="./../../../images/no_image.jpg"
              />
              <span className="test1 pl-3">Sign out</span>
            </Link>
          </Dropdown.Item>


          <Dropdown.Divider />


          <Dropdown.Item>
            <Link to="/"
              className="linkasd">
              <img className="darkTheme-logo opacity pt-0 my-1"
                src="./../../../images/9d6ee1608b.svg"
                alt="./../../../images/no_image.jpg"
              />
              <span className="test1 pl-3">Dark theme: Off</span>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/"
              className="linkasd">
              <img className="language-logo opacity pt-0 my-1"
                src="./../../../images/img_535351.png"
                alt="./../../../images/no_image.jpg"
              />
              <span className="test1 pl-3">Language: Enghish</span>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/"
              className="linkasd">
              <img className="settings-logo opacity pt-0 my-1"
                src="./../../../images/Very-Basic-Settings-icon.png"
                alt="./../../../images/no_image.jpg"
              />
              <span className="test1 pl-3">Settings</span>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/"
              className="linkasd">
              <img className="help-logo opacity pt-0 my-1"
                src="./../../../images/Icons8-Ios7-Very-Basic-Help.ico"
                alt="./../../../images/no_image.jpg"
              />
              <span className="test1 pl-3">Help</span>
            </Link>
          </Dropdown.Item>

          <Dropdown.Item>
            <Link to="/"
              className="linkasd">
              <img className="feedback-logo opacity pt-0 my-1"
                src="./../../../images/2152-512.png"
                alt="./../../../images/no_image.jpg"
              />
              <span className="test1 pl-3">Send feedback</span>
            </Link>
          </Dropdown.Item>

        </DropdownButton>
      </div>
    </nav>

  )
}

export default Header;