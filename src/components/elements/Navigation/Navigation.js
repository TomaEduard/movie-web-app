import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = (props) => {
  return (
    <div className="rmdb-navigation">
      <div className="rmdb-navigation-content">
        <Link to="/">
          <p className="Home">Home</p>
        </Link>
        <p>/</p>

        <p className="Movie-t">{props.movie.title}</p>
      </div>
    </div>
  )
}

export default Navigation;