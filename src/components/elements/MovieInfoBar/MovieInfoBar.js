import React from 'react';
import { calcTime, convertMoney } from '../../../helpers.js';
import './MovieInfoBar.css';

const MovieInfoBar = (props) => {
  return (
    <div className="rmdb-movieinfobar">
      <div className="rmdb-movieinfobar-content">

        <div className="rmdb-movieinfobar-content-col">
          <div className="fas fa-clock fa-2x famarginleft" name="clock-o" />
          <span className="rmdb-movieinfobar-info">Running time: {calcTime(props.time)}</span>
        </div>

        <div className="rmdb-movieinfobar-content-col">
          <div className="fas fa-search-dollar fa-2x famarginleft" aria-hidden="true" name="money" />
          <span className="rmdb-movieinfobar-info">Budget: {convertMoney(props.budget)}</span>
        </div>

        <div className="rmdb-movieinfobar-content-col">
          <div className="fas fa-ticket-alt fa-2x famarginleft rot" name="ticket" size="2x" />
          <span className="rmdb-movieinfobar-info">Revenue: {convertMoney(props.revenue)}</span>
        </div>

      </div>
    </div>
  )
}

export default MovieInfoBar;