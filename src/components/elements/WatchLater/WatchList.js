import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './WatchList.css';

class WatchList extends Component {
  // constructor(props) {
  //   super(props);
  // this.state = {
  //   hover: false
  // };
  // }

  // handleHover() {
  //   this.setState({ hover: !this.state.hover });
  // }


  onClick() {
    this.props.changeWatchList(!this.props.watchlist);

    // console.log("this.props.href ", this.props.href);
    console.log("this.props.href ", this.props.watchlist);

  }


  render() {
    var iconStyle = {
      transform: this.props.watchlist ? 'translateY(-5px)' : 'none',
      boxShadow: this.props.watchlist ? '3px 3px 5px #000' : 'none',
      color: this.props.watchlist ? "#fff" : "rgb(255, 255, 255)",
      background: this.props.watchlist ? '#55acee' : 'rgb(155, 155, 155)',
      opacity: this.props.watchlist ? 0.9 : 0.4,
      transition: "all .4s",
      borderRadius: '50%',
      height: 60,
      width: 60,
      textAlign: 'center',
      lineHeight: '63px',
    };

    console.log("WatchList - props - ", this.props);

    return (
      // React.createElement("a", { href: this.props.href },
      // React.createElement("a",

      <Link to="#" className="nav-link m-2 menu-item"
        className="fa fa-2x fas fa-history"
        // href: "#",

        // className: this.props.icon,
        style={iconStyle}

        // onClick: () => this.handleHover(), onMouseLeave: () => this.handleHover(),
        onClick={() => this.onClick()}
      // onMouseEnter: () => this.handleHover(), onMouseLeave: () => this.handleHover()
      >
      </Link>




    )

      // { this.state.hover ? 'true' : 'false' }

      // )
      ;


  }

}

export default WatchList;