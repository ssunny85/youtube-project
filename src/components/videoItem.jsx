import React, {PureComponent} from 'react';

class VideoItem extends PureComponent {
  itemRef = React.createRef();

  handleSelected = () => {
    this.props.onSelected(this.itemRef.current.id);
  };

  render() {
    const { title, description, publishedAt, thumbnails } = this.props.item;
    return (
      <li
        className="item-block"
        id={this.props.id}
        ref={this.itemRef}
        onClick={this.handleSelected}
      >
        <div className="item-info">
          <strong className="item-title">{title}</strong>
          <p className="item-description">{description}</p>
          <p>등록일: {publishedAt}</p>
        </div>
        <span className="item-thumb">
          <img src={thumbnails.default.url} alt="" />
        </span>
      </li>
    );
  }
}

export default VideoItem;
