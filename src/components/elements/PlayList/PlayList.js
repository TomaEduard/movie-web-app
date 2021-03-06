import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ReactTooltip from 'react-tooltip'
import './PlayList.css';

class PlayList extends Component {
  onClick() {
    this.props.changePlayList(!this.props.playlist);

    console.log("Playlist - playlist - ", this.props.playlist);
  }

  render() {
    var iconStyle = {
      transform: this.props.playlist ? 'translateY(-5px)' : 'none',
      boxShadow: this.props.playlist ? '3px 3px 5px #000' : 'none',
      color: this.props.playlist ? "#fff" : "rgb(255, 255, 255)",
      background: this.props.playlist ? '#6EB33F' : 'rgb(155, 155, 155)',
      opacity: this.props.playlist ? 0.95 : 0.3,
      transition: "all .3s",
      borderRadius: '50%',
      height: 60,
      width: 60,
      textAlign: 'center',
      lineHeight: '63px',
    };

    return (
      <Link to="#" className="nav-link m-2 menu-item "
        className="fa fas fa-list-ol fa-2x mt-2"

        style={iconStyle}

        onClick={() => this.onClick()}
        data-tip='Playlist'
        data-delay-update='1000'
        data-place='bottom'
        data-offset="{'bottom': 10, 'left': 0}"
      >

        <ReactTooltip
          class='extraClass'
          effect='solid'
          aria-haspopup='true'
          role='example'
        >
        </ReactTooltip>
      </Link>

    );
  }
}

export default PlayList;


