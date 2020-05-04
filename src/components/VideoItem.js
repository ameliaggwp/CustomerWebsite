import React from "react";

class VideoItem extends React.Component {
  constructor() {
    super();

    this.state = {
      isHidden: true,
    };
  }

  toggleHidden() {
    this.setState({ isHidden: !this.state.isHidden });
  }

  render() {
    return (
      <div
        onClick={() => this.props.onVideoSelect(this.props.video)}
        className="col-6 video-item"
        onMouseEnter={this.toggleHidden.bind(this)}
        onMouseLeave={this.toggleHidden.bind(this)}
      >
        <img
          src={this.props.video.snippet.thumbnails.high.url}
          className="card-img-top"
          alt={this.props.video.snippet.title}
        />
        {!this.state.isHidden && (
          <Child title={this.props.video.snippet.title} />
        )}
      </div>
    );
  }
}

const Child = ({ title }) => {
  return <div className="video-card title">{title}</div>;
};

export default VideoItem;
