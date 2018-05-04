import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MovieContainer from './MovieContainer';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {}
    const apiKey = `8237b2eb1c4e5ddc3156da0988afdec2`
    this.movieFetchUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}`
    this.movieSearchUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&page=1`
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Kevin Awesome Movie App</h1>
        </header>
        <MovieContainer
          movieFetchUrl={this.movieFetchUrl}
          movieSearchUrl={this.movieSearchUrl}
          />
      </div>
    );
  }
}
