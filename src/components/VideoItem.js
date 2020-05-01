import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="col hover-card">
      <img
        src={video.snippet.thumbnails.high.url}
        className="card-img-top"
        alt={video.snippet.title}
      />

      <div className="content">
        <div className="overlay-title">{video.snippet.title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
