import React from 'react';
import { calcTime, convertMoney } from '../../../helpers.js';
import './MovieInfoBar.css';

const MovieInfoBar = (time, budget, revenue) => {
  return (
    <div className="rmdb-movieinfobar bg-dark text-light">
      <div className="container pb-3">
        <div className="row">

          <div className="col-md">
            <div className="fas fa-clock fa-2x famarginleft" name="clock-o" />
            <span className="rmdb-movieinfobar-info ml-3">Running time: {calcTime(time)}</span>
          </div>

          <div className="col-md">
            <div className="fas fa-search-dollar fa-2x famarginleft" aria-hidden="true" name="money" />
            <span className="rmdb-movieinfobar-info ml-3">Budget: {convertMoney(budget)}</span>
          </div>

          <div className="col-md">
            <div className="fas fa-ticket-alt fa-2x famarginleft rot" name="ticket" size="2x" />
            <span className="rmdb-movieinfobar-info ml-3">Revenue: {convertMoney(revenue)}</span>
          </div>

        </div>
      </div>
    </div>
  )
}

export default MovieInfoBar;