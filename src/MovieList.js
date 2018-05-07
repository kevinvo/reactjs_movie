import React from 'react';
import PropTypes from 'prop-types';
import MoviePost from './MoviePost'
import './MovieList.css';

export default class MovieList extends React.Component {
  render() {
    const movies = this.props.movies && this.props.movies.map((movie) => {
      return (<MoviePost key={movie.id} movie={movie}/>);
    });
    return (
      <div className='movie-list'>
        <img alt="movie_container" hidden={!this.props.loading}/>
        {movies}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.array,
  loading: PropTypes.bool,
}