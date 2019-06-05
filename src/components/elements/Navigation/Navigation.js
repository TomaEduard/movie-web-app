import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {

  console.log("Navigation - props - ", props);


  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to="/">
          {/* <p className="Home">Home /<span className="Movie-t"> {props.movie}</span></p> */}
          <p className="Home">Home /</p>
        </Link>
        <p className="Movie-t"><strong className="navigation-size">{props.movie}</strong></p>
      </div>
    </div>
  )
}

export default Navigation;