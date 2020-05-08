import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`;
  return (
    <div className="col-sm-6 video-detail">
      <div className="wrapper">
        <h3 className="video-title"> {video.snippet.title}</h3>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            title="Video Player"
            src={videoSrc}
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
