import React from 'react'
import './Rating.css';

// Function
function Star(props) {
  return (
    React.createElement("div", {
      className: `star ${props.value == 0 ? 'semi-active' : ''} ${props.position <= props.rated ? 'active' : ''} `,
      // onMouseEnter: props.onMouseEnter,
      // onMouseLeave: props.onMouseLeave,
      onClick: props.onClick

    },
      React.createElement("i", { className: "fas fa-star" }))
  );
}

// Class
class RatingWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stars: Array(5).fill(-1),
      rated: 3.0
    };

  }

  Click(i) {
    const clickedStar = this.state.stars.slice();

    // _.fill(clickedStar, 1, 0, i);
    // _.fill(clickedStar, 1, i, clickedStar.length);

    this.setState({
      stars: clickedStar,
      rated: i
    });
    // console.log("Click:this.state.stars:  " + this.state.stars);
    // console.log("Click:this.state.rated: " + this.state.rated);
  }


  // handleRating(rated) {
  // console.log("2#test" + rated);

  //   return React.createElement(Rating, { rated: this.state.rated });
  // }

  renderStar(i) {
    return (
      React.createElement(Star, {
        position: i,
        value: this.state.stars[i],
        rated: this.state.rated,
        // onMouseEnter: () => this.handleMouseOver(i),
        // onMouseLeave: () => this.handleMouseOut(),
        onClick: () => this.Click(i)

      }));

  }

  setRated(rated) {
    this.setState({
      rated: rated
    });
  }

  render() {

    // this.state.rated = this.props.rated;

    return (
      React.createElement("div", { className: "rating-stars-widget-outer" },
        React.createElement("div", { className: "rating-stars" },
          this.renderStar(1),
          this.renderStar(2),
          this.renderStar(3),
          this.renderStar(4),
          this.renderStar(5))))    // sterge )) si pune ,

    // this.handleRating(this.state.rated)));  // text

  }
}

export default RatingWidget;