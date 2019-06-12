import React from 'react';
import './FourColGrid.css';
// import PropTypes from 'prop-types';

const FourColGrid = (props) => {

  const renderElement = () => {
    const gridElement = props.children.map((element, i) => {
      return (
        <div key={i} className="rmdb-grid-element shadow-md rounded ">
          {element}
        </div>
      )
    })
    return gridElement;
  }

  return (
    <div className="rmdb-grid">

      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content ">
        {renderElement()}
      </div>

    </div>
  )
}

// FourColGrid.prototype = {
//   header: PropTypes.string,
//   loading: PropTypes.bool,
// }

export default FourColGrid;