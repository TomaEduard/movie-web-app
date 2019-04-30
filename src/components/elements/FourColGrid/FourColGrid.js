import React from 'react';
import './FourColGrid.css';

const FourColGrid = (props) => {

  const renderElement = () => {
    const gridElement = props.children.map((element, i) => {
      return (
        <div key={i} className="rmdb-grid-element">
          {element}
        </div>
      )
    })
    return gridElement;
  }

  return (
    <div className="rmdb-grid">

      {props.header && !props.loading ? <h1>{props.header}</h1> : null}
      <div className="rmdb-grid-content">
        {renderElement()}
      </div>

    </div>
  )
}

export default FourColGrid;