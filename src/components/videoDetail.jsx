import React, {Component} from 'react';

class VideoDetail extends Component {
  render() {
    const { title, description } = this.props.selectedVideo.contents;
    return (
      <div className="video-detail">
        <h1 className="item-title">{title}</h1>
        <p className="item-description">{description}</p>
      </div>
    );
  }
}

export default VideoDetail;
