import React, {Component} from 'react';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import './App.css';
import dotenv from 'dotenv';
import axios from 'axios';
import SearchForm from './components/searchForm';
import Videos from './components/videos';
dotenv.config();

class App extends Component {
  constructor() {
    console.log('constructor!');
    super();
    this.state = {
      videos: [],
    };
  };

  async componentDidMount() {
    console.log('componentDidMount');
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`);
      console.log('data: ', data);
      this.setState({
        videos: data.items,
      });
    } catch (e) {
      console.log('e: ', e);
    }
  };

  handleSearch = async (keyword) => {
    const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_API_KEY}`)
    this.setState({
      videos: data.items,
    });
  };

  render() {
    console.log('App render');
    return (
      <Router>
        <SearchForm onSearch={this.handleSearch} />
        <Videos videos={this.state.videos} />
      </Router>
    );
  }
}

export default App;
