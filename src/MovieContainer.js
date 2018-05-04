import React from 'react';
import MovieList from './MovieList';
import SearchBox from './SearchBox';
import fetchJsonp from 'fetch-jsonp';

export default class MovieContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: {},
      loading: true,
      searchQuery: ''
    };
    this.searchHandler = this.searchForMovie.bind(this)
  }

  componentWillMount() {
    this.loadData.bind(this)(this.props.movieFetchUrl);
  }

  searchForMovie(searchQuery) {
    if (searchQuery === '') {
      this.loadData.bind(this)(this.props.movieFetchUrl);
    } else {
      const movieSearchQuery = `${this.props.movieSearchUrl}&query=${searchQuery}`;
      this.loadData.bind(this)(movieSearchQuery);
    }
    this.setState({searchQuery: searchQuery});
  }

  loadData(searchUrl) {
    this.setState({
      loading: true
    });
    fetchJsonp(searchUrl)
      .then((data) => {
        return data.json();
      }).then((json) => {
        this.setState({
          posts: json,
          loading: false
        })
      });
  }

  render() {
    const movies = this.state.posts && this.state.posts.results;
    return (
      <div className='movie-container'>
        <SearchBox
          searchForMovie={this.searchHandler}
          searchQuery={this.state.searchQuery} />
        <MovieList
          movies={movies}
          loading={this.state.loading} />
      </div>
    );
  }
}