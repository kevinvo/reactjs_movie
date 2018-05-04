import React from 'react';
import './SearchBox.css';

export default class SearchBox extends React.Component {

  constructor(props) {
    super(props)
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
             onChange={this.searchForMovie.bind(this)}/>
    );
  }
}