import React from 'react';
import PropTypes from 'prop-types';
import './SearchBox.css';

export default class SearchBox extends React.Component {
  constructor(props) {
    super(props)
    this.searchForMovie = this.searchForMovie.bind(this)
  }

  searchForMovie(event) {
    this.props.searchForMovie(event.target.value)
  }

  render() {
    return (
      <input type='text'
             name='search-query'
             className='search-query'
             value={this.props.searchQuery}
             placeholder='Type in your search query'
             onChange={this.searchForMovie}/>
    );
  }
}

SearchBox.propTypes = {
  searchQuery: PropTypes.string,
  searchForMovie: PropTypes.func,
}