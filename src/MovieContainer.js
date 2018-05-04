import React from 'react';
import MovieList from './MovieList';
import fetchJsonp from 'fetch-jsonp';

export default class MovieContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: {},
      loading: true
    };
  }

  componentWillMount() {
    this.loadData.bind(this)();
  }

  loadData() {
    this.setState({
      loading: true
    });
    fetchJsonp(this.props.movieFetchUrl)
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
      <MovieList
        movies={movies}
        loading={this.state.loading} />
    );
  }
}