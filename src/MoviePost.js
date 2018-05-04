import React from 'react';
import './MoviePost.css';

const imagePrefix = `https://image.tmdb.org/t/p/w342/`
export default class MoviePost extends React.Component {

  constructor(props) {
    super(props)
  }

  toggleElement(event) {
  }

  render() {
    const post_path = `${imagePrefix}${this.props.movie.poster_path}`
    return (
      <div className='movie-item'>
        <img src={post_path}/>
        <p className='title-and-rating'>{this.props.movie.title} <span className='rating'>({this.props.movie.vote_average})</span> </p>
        <p className='overview' onClick={this.toggleElement.bind(this)}>{this.props.movie.overview} </p>
      </div>
    );
  }
}