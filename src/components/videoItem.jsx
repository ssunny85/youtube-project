import React, {PureComponent} from 'react';
import { Link } from 'react-router-dom';

class VideoItem extends PureComponent {
  render() {
    console.log('VideoItem render')
    const { title, description, publishedAt, thumbnails } = this.props.item;
    const detailLink = `/${this.props.id}`;
    return (
      <li className="item-wrap">
        <Link to={detailLink} className="item-block">
          <div className="item-info">
            <strong className="item-title">{title}</strong>
            <p className="item-description">{description}</p>
            <p>등록일: {publishedAt}</p>
          </div>
          <span className="item-thumb">
            <img src={thumbnails.default.url} align="" />
          </span>
        </Link>
      </li>
    );
  }
}

export default VideoItem;
