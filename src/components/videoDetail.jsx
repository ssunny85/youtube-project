import React, {Component} from 'react';

class VideoDetail extends Component {
  render() {
    const { title, description, publishedAt } = this.props.selectedVideo.contents;
    return (
      <div className="video-detail">
        <div className="video-frame">
          <iframe
            src={`https://www.youtube.com/embed/${this.props.selectedVideo.id}`}
            title={title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen />
        </div>
        <h1 className="item-title">{title}</h1>
        <div className="item-info">
          <p className="item-description">{description}</p>
          <p>등록일: {publishedAt}</p>
        </div>
      </div>
    );
  }
}

export default VideoDetail;
