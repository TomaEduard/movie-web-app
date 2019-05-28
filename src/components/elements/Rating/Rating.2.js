// import React from 'react'
// import './Rating.css';

// // Function
// function Star(props) {
//   // console.log("Star - " + props.rating);

//   return (
//     React.createElement("div", {
//       className: `star ${props.value == 0 ? 'semi-active' : ''} ${props.position <= props.rated ? 'active' : ''} `,
//       // onMouseEnter: props.onMouseEnter,
//       // onMouseLeave: props.onMouseLeave,
//       onClick: props.onClick

//     },
//       React.createElement("i", { className: "fas fa-star" }))

//   );
// }

// // // Function
// // function Rating(props) {
// //   const messages = {
// //     "1": "Oh. Sorry you had a bad experience :( ",
// //     "2": "We will try to improve.",
// //     "3": "Appreciate it!",
// //     "4": "Thank you!",
// //     "5": "You're Awesome!"
// //   };

// //   let rating = props.rating;

// //   return (
// //     React.createElement("div", { className: "after-rating-message " + (rating > 0 ? 'show' : '') },
// //       React.createElement("span", null, "You rated this ", rating, " star", rating > 1 ? 's' : ''),
// //       React.createElement("br", null),
// //       React.createElement("span", null, messages[rat ing])));
// // }


// // Class
// class RatingWidget extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       stars: Array(5).fill(-1),
//       rated: 1
//     };

//   }

//   // componentDidMount() {

//   //   // this.setState({ rated: this.props.rated })
//   //   // console.log("componentDidMount+this.state.rated " + this.state.rated);
//   //   // console.log("componentDidMount+ " + this.props.rated);

//   //   // fetch the properties movie from local API
//   //   const request = `http://localhost:8083/movies/${this.props.match.params.movieId}`;
//   //   this.fetchLocalItem(request);
//   // }

//   // fetchLocalItem = (request) => {
//   //   fetch(request)
//   //     .then(result => result.json())
//   //     .then(result => {

//   //       this.setState({
//   //         rated: result.rating,
//   //       })

//   //       // console.log("Movie-rating: " + this.state.rating);
//   //       // console.log("Movie-favorite: " + this.state.favorite);
//   //       // console.log("Movie-watchlist: " + this.state.watchlist);
//   //       // console.log("Movie-movieId " + this.state.movieId);
//   //     })
//   // }

//   // handleMouseOver(i) {
//   //   let currentRating = this.state.rated;

//   //   if (currentRating > 0) {
//   //     const hoverRatedStars = this.state.stars.slice();
//   //     _.fill(hoverRatedStars, 0, currentRating, i);
//   //     this.setState({ stars: hoverRatedStars });
//   //   } else {
//   //     const hoverStars = Array(5).fill(-1);
//   //     _.fill(hoverStars, 0, 0, i + 1);
//   //     this.setState({ stars: hoverStars });
//   //   }

//   //   // console.log("handleMouseOver " + this.state.stars);

//   // }

//   // handleMouseOut() {
//   //   let currentRating = this.state.rated;
//   //   if (currentRating > 0) {
//   //     const resetRatedStars = this.state.stars.slice();
//   //     _.fill(resetRatedStars, -1, currentRating, resetRatedStars.length);
//   //     this.setState({ stars: resetRatedStars });
//   //   } else {
//   //     const resetStars = this.state.stars.slice();
//   //     _.fill(resetStars, -1, 0, resetStars.length);
//   //     this.setState({ stars: resetStars });
//   //   }

//   //   // console.log("handleMouseOut" + this.state.rated);
//   // }

//   Click(i) {
//     const clickedStar = this.state.stars.slice();

//     // _.fill(clickedStar, 1, 0, i);
//     // _.fill(clickedStar, 1, i, clickedStar.length);

//     this.setState({
//       stars: clickedStar,
//       rated: i
//     });
//     // console.log("Click:this.state.stars:  " + this.state.stars);
//     // console.log("Click:this.state.rated: " + this.state.rated);
//   }

//   // // text
//   // handleRating(rated) {
//   // console.log("2#test" + rated);

//   //   return React.createElement(Rating, { rated: this.state.rated });
//   // }

//   renderStar(i) {
//     return (
//       React.createElement(Star, {
//         position: i,
//         value: this.state.stars[i],
//         rated: this.state.rated,
//         // onMouseEnter: () => this.handleMouseOver(i),
//         // onMouseLeave: () => this.handleMouseOut(),
//         onClick: () => this.Click(i)

//       }));

//   }

//   setRated(rated) {
//     this.setState({
//       rated: rated
//     });
//   }


//   render() {

//     console.log("RatingWidget - " + this.props.rating);
//     // this.state.rated = this.props.rated;

//     return (
//       React.createElement("div", { className: "rating-stars-widget-outer" },
//         React.createElement("div", { className: "rating-stars" },
//           this.renderStar(1),
//           this.renderStar(2),
//           this.renderStar(3),
//           this.renderStar(4),
//           this.renderStar(5))))    // sterge )) si pune ,

//     // this.handleRating(this.state.rated)));  // text

//   }
// }

// export default RatingWidget;