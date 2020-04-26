import React from "react";
import youtube from "../apis/youtube";

const KEY = "AIzaSyCR71-QtUO-4lAiKYLS0YxdecSu-0-T_1I";

class Videos extends React.Component {
  componentDidMount() {
    youtube.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: "PLv59FtNXbkbK-Dnlm8Sjz0hDyspmO86zE",
        key: KEY,
      },
    });
  }

  render() {
    return (
      <div className="Container">
        <h1>Videos</h1>
      </div>
    );
  }
}

export default Videos;
