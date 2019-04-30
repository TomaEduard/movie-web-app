import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import './SearchBar.css';

class SearchBar extends Component {
  state = {
    value: ''
  }

  timeout = null;

  doSeearch = (e) => {
    this.setState({ value: e.target.value })
    clearTimeout(this.cleartimeout)

    this.timeout = setTimeout(() => {
      this.props.callback(this.state.value);
    }, 800);
  }

  render() {
    return (
      <div className="rmdb-searchbar">
        <div className="rmdb-searchbar-content">

          <FontAwesome className="rmdb-fa-search" name="search" size="2x" />

          <input
            type="text"
            className="rmdb-searchbar-input"
            placeholder="Search"
            onChange={this.doSeearch}
            value={this.state.value}
          />

          {/* </i> */}

        </div>
      </div>
    );
  }
}

export default SearchBar;
