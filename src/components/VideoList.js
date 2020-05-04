import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem video={video} key={video.id} onVideoSelect={onVideoSelect} />
    );
  });
  return (
    <div className="col-sm-6 video-list">
      <div className="row">{renderedList}</div>
    </div>
  );
};

export default VideoList;
