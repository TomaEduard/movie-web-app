import React from 'react';
import { render } from 'react-dom';
import Stars from '../../react-stars';

const thirdExample = (props) => {

  const xxx = {
    size: 189,
    count: 5,
    half: false,
    value: 4,
    onChange: newValue => {
      console.log(`Example 3: new value is ${newValue}`)
    }
  }

  render(
    <Stars
      count={5}
      onChange={4}
      size={74}
      color2={'#ffd700'}

    />,

    <Stars {...xxx} />,

    // console.log("Star - " + props.rating),
    // <div>
    //   <Stars {...xxx} />
    // </div>
  )
}
export default Stars;
