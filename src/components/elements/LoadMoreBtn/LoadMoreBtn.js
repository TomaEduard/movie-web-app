import React from 'react';
import './LoadMoreBtn.css';

const LoadMoreBtn = (props) => {
  return (
    <div className="container">
      <div className="btn btn-lg btn-block " onClick={props.onClick}>
        <p>{props.text}</p>

      </div>
    </div>

  )
}

export default LoadMoreBtn;