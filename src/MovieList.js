import React from 'react';
import MoviePost from './MoviePost'
import logo from './logo.svg'
import './MovieList.css';

export default class MovieList extends React.Component {

  render() {
    const movies = this.props.movies && this.props.movies.map((movie) => {
      const movieObject = {title: movie.title,
                     overview: movie.overview,
                     vote_average: movie.vote_average,
                     poster_path: movie.poster_path,
                     key: movie.id };
      return (<MoviePost movie={movieObject}/>);
    });
    return (
      <div className='movie-list'>
        <img hidden={!this.props.loading}/>
        {movies}
      </div>
    );
  }
}