import React from 'react';
import './FourColGridForPreferences.css';

const FourColGridForPreferences = (props) => {

  const renderElement = () => {
    const gridElement = props.children.map((element, i) => {
      return (
        <div key={i} className="rmdb-grid-element-properties shadow-md rounded ">
          {element}
        </div>
      )
    })
    return gridElement;
  }

  return (
    <div className="rmdb-grid-properties">
      <div className="row text-header mt-0 pt-0 mx-2">
        {props.header && !props.loading ? <h2>{props.header}</h2> : null}

        <div className="ml-auto text-secondary">
          <h3>{props.numberOfElements} of {props.totalElements}</h3>
        </div>

      </div>
      <div className="rmdb-grid-content-properties ">
        {renderElement()}
      </div>



    </div>
  )
}

export default FourColGridForPreferences;