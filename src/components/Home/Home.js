import React, { Component } from 'react';
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  POSTER_SIZE,
  BACKDROP_SIZE
} from '../../config';
import HeroImage from '../elements/HeroImage/HeroImage';
import SearchBar from '../elements/SearchBar/SearchBar';
import FourColGrid from '../elements/FourColGrid/FourColGrid';
import MovieThumb from '../elements/MovieThumb/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn/LoadMoreBtn';
import Spinner from '../elements/Spinner/Spinner';
import './Home.css';
import Contact from '../elements/Contact/Contact';

class Home extends Component {
  state = {
    movies: [],
    heroImage: null,
    loading: false,
    currentPage: 0,
    totalPages: 0,
    searchTerm: ''
  }

  componentDidMount() {
    if (localStorage.getItem('HomeState')) { // Check if we have state in ls befor retrive something
      // take string from ls and convert back to object
      const state = JSON.parse(localStorage.getItem('HomeState'))
      // setState previous var
      this.setState({...state})
    } else {
      this.setState({ loading: true });
      const endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
      this.fetchItems(endpoint);
    }
  }

  fetchItems = (endpoint) => {
    fetch(endpoint)
      .then(result => result.json())
      .then(result => {
        console.log("Home - OLD - result ", result);

        this.setState({
          movies: [...this.state.movies, ...result.results],
          heroImage: this.state.heroImage || result.results[0],
          loading: false,
          currentPage: result.page,
          totalPages: result.total_pages,
        }, () => {  // After set state, save data in ls if search element is empty
          if(this.state.searchTerm === "") {
          // Convert object to string for storage
          localStorage.setItem('HomeState', JSON.stringify(this.state));
          }
          
        })
        console.log("Home - OLD - this.state.movies ", this.state.movies);
      })
      .catch(error => console.error('Error:', error))
  }

  // Search items
  searchItems = (searchTerm) => {
    console.log(searchTerm);
    let endpoint = '';
    this.setState({
      movies: [],
      loading: true,
      searchTerm
    })

    if (searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${searchTerm}`;
    }
    this.fetchItems(endpoint);
  }

  // Load more button
  loadMoreItems = () => {
    let endpoint = '';
    this.setState({ loading: true });

    if (this.state.searchTerm === '') {
      endpoint = `${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=${this.state.currentPage + 1}`;
    } else {
      endpoint = `${API_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${this.state.searchTerm}&page=${this.state.currentPage + 1}`;
    }
    this.fetchItems(endpoint);
  }

  render() {
    return (
      <div className="rmdb-home">

        {this.state.heroImage ?
          <div>
            <HeroImage
              image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${this.state.heroImage.backdrop_path}`}
              title={this.state.heroImage.original_title}
              text={this.state.heroImage.overview}
            />

            <SearchBar callback={this.searchItems} />

          </div> : null}

        <div className="rmdb-home-grid">

          <FourColGrid
            // if this.state.searchTerm exist set header 'Search Result' if not 'Popular Movies'
            header={this.state.searchTerm ? 'Search Result' : 'Popular Movies'}
            loading={this.state.loading}
          >

            {this.state.movies.map((element, i) => {
              return <MovieThumb
                key={i}
                clickable={true}
                image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : './images/no_image.jpg'}

                movieId={element.id}
                movieName={element.original_title}
              />
            })}

          </FourColGrid>

          {this.state.loading ? <Spinner /> : null}
          {/* if currnetPage isn't last page and loading is false,then show load more btn */}
          {(this.state.currentPage < this.state.totalPages && !this.state.loading) ?
            <LoadMoreBtn text="Load More" onClick={this.loadMoreItems} />
            : null}
        </div>

        <br></br>
        <br></br>

        <Contact />

      </div>
    )
  }
}

export default Home;