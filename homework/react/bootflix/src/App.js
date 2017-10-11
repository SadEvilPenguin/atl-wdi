import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'
import axios from 'axios'

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example,
      searchTitle: '',
      searchId: '',
      img: '',
    }
  }

  handleSearchTitle = (event) => {
    const searchTitle = event.target.value;
    this.setState({searchTitle});
  }

  handleSearchId = (event) => {
    const searchId = event.target.value;
    this.setState({searchId});
  }

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  searchByTitle = (event) => {
    event.preventDefault()
    console.log(this.state.searchTitle)
    axios.get("http://www.omdbapi.com/", {
      params: {
        t: this.state.searchTitle,
        apikey: "d31f1a94"
      }
    })
    .then(res => {
      const movie = res.data
      this.setState({movie})
    }).catch((error) => {
      console.error("Error: ", error);
  })
  }

  searchById = (event) => {
    event.preventDefault()
    axios.get("http://www.omdbapi.com/", {
      params: {
        i: this.state.searchId,
        apikey: "d31f1a94"
      }
    })
    .then(res => {
      const movie = res.data
      this.setState({movie})
    }).catch((error) => {
      console.error("Error: ", error);
  })
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search 
        searchByTitle={this.searchByTitle} 
        searchById={this.searchById}
        handleSearchTitle={this.handleSearchTitle}
        handleSearchId={this.handleSearchId} />
        <Movie movie={this.state.movie} />
      </div>
    );
  }
}

export default App;
