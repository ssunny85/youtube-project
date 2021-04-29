import React, {Component} from 'react';
import dotenv from 'dotenv';
import axios from 'axios';
import SearchForm from './components/searchForm';
import VideoDetail from './components/videoDetail';
import Videos from './components/videos';
import './App.css';
dotenv.config();

class App extends Component {
  constructor() {
    super();
    this.state = {
      videos: [],
      selectedVideo: {
        id: '',
        contents: '',
      },
    };
  };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_API_URL}/videos?part=snippet&chart=mostPopular&maxResults=25&key=${process.env.REACT_APP_API_KEY}`
      );
      this.setState({
        videos: data.items,
      });
    } catch (err) {
      console.log('err: ', err);
    }
  };

  handleSelected = (id) => {
    this.setState({
      selectedVideo: {
        id,
        contents: this.state.videos.find(video => video.id === id).snippet,
      },
    });
  };

  handleSearch = async (keyword) => {
    const { data } = await axios.get(
      `${process.env.REACT_APP_API_URL}/search?part=snippet&maxResults=25&q=${keyword}&key=${process.env.REACT_APP_API_KEY}`
    );
    data.items = data.items.map(item => ({
      ...item,
      id: item.id.videoId,
    }));
    this.setState({
      videos: data.items,
    });
  };

  render() {
    return (
      <>
        <SearchForm onSearch={this.handleSearch} />
        <div className="body">
          {this.state.selectedVideo.id && <VideoDetail selectedVideo={this.state.selectedVideo} />}
          <Videos
            videos={this.state.videos}
            onSelected={this.handleSelected}
          />
        </div>
      </>
    );
  }
}

export default App;
