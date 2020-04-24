import React from "react";

class Videos extends React.Component {
  state = { selectedVideo: null };

  render() {
    return (
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/videoseries?list=PLv59FtNXbkbK-Dnlm8Sjz0hDyspmO86zE"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    );
  }
}

export default Videos;
