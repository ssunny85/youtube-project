import React, {Component} from 'react';
import SearchForm from './components/searchForm';
import VideoDetail from './components/videoDetail';
import Videos from './components/videos';
import './App.scss';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: {
        id: '',
        contents: '',
      },
    };
    this.youtube = props.youtube;
  };

  componentDidMount() {
    this.youtube.mostPopular()
      .then(videos => {
        this.setState({ videos });
      });
  };

  handleSelected = (id) => {
    this.setState({
      selectedVideo: {
        id,
        contents: this.state.videos.find(video => video.id === id).snippet,
      },
    });
  };

  handleSearch = (keyword) => {
    this.youtube.search(keyword)
      .then(videos => {
        this.setState({ videos });
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
