import React, {PureComponent} from 'react';
import VideoItem from './videoItem';

class Videos extends PureComponent {
  render() {
    console.log('Videos render');
    return (
      <ul className="video-list">
        {
          this.props.videos.map(video => (
            <VideoItem item={video.snippet} key={video.etag} id={video.id} />
          ))
        }
      </ul>
    );
  }
}

export default Videos;
