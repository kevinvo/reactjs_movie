import React from 'react';
import './MoviePost.css';

export default class MoviePost extends React.Component {

  constructor(props) {
    super(props)
    this.imagePrefix = `https://image.tmdb.org/t/p/w342/`
  }

  toggleElement(event) {
  }

  render() {
    const post_path = `${this.imagePrefix}${this.props.movie.poster_path}`
    return (
      <div className='movie-item'>
        <img src={post_path}/>
        <p className='title-and-rating'>{this.props.movie.title} <span className='rating'>({this.props.movie.vote_average})</span> </p>
        <p className='overview' onClick={this.toggleElement.bind(this)}>{this.props.movie.overview} </p>
      </div>
    );
  }
}