import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  return (
    <div onClick={() => onVideoSelect(video)} className="col-6 video-item">
      <img
        src={video.snippet.thumbnails.high.url}
        className="card-img-top"
        alt={video.snippet.title}
      />
      <div className="video-card title">{video.snippet.title}</div>
    </div>
  );
};

export default VideoItem;
