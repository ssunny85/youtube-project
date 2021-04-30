import React, {PureComponent} from 'react';
import VideoItem from '../videoItem';
import './style.scss';

class Videos extends PureComponent {
  render() {
    return (
      <ul className="video-list">
        {
          this.props.videos.map(video => (
            <VideoItem
              item={video.snippet}
              key={video.etag}
              id={video.id}
              onSelected={this.props.onSelected}
            />
          ))
        }
      </ul>
    );
  }
}

export default Videos;
