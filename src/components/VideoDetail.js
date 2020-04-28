import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.snippet.resourceId.videoId}`;
  return (
    <div>
      <div className="video-responsive">
        <iframe
          title="Video Player"
          src={videoSrc}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div>
        <h4 className=""> {video.snippet.title}</h4>
      </div>
    </div>
  );
};

export default VideoDetail;
