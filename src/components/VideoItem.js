import React from "react";

const VideoItem = ({ video, onVideoSelect }) => {
  const cropDate = (date) => {
    return date.split("T")[0];
  };

  return (
    <div onClick={() => onVideoSelect(video)} className="card text-center">
      <img
        src={video.snippet.thumbnails.high.url}
        className="card-img-top"
        alt={video.snippet.title}
      />
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>

        <small className="text-muted">
          Posted: {cropDate(video.snippet.publishedAt)}
        </small>
      </div>
    </div>
  );
};

export default VideoItem;
