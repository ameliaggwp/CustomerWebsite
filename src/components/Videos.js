import React from "react";

const KEY = "AIzaSyCR71-QtUO-4lAiKYLS0YxdecSu-0-T_1I";

class Videos extends React.Component {
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
