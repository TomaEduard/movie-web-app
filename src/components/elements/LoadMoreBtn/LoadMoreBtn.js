import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = ({onClick, text}) => {
  return (
    <div className="container">
      <div
        className="btn btn-outline-dark btn-block btn-sm"
        onClick={onClick}>
        <p>{text}</p>
      </div>
    </div>

  )
}

export default LoadMoreBtn;