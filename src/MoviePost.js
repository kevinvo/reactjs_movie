import React from 'react';
import PropTypes from 'prop-types';
import './MoviePost.css';

const imagePrefix = `https://image.tmdb.org/t/p/w342/`
export default class MoviePost extends React.Component {
  render() {
    const post_path = `${imagePrefix}${this.props.movie.poster_path}`
    return (
      <div className='movie-item'>
        <img alt="poster_image" src={post_path}/>
        <p className='title-and-rating'>{this.props.movie.title} <span className='rating'>({this.props.movie.vote_average})</span> </p>
        <p className='overview' onClick={() => alert('Not implemented')}>{this.props.movie.overview} </p>
      </div>
    );
  }
}

MoviePost.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,    
  }),
}