import React from "react";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import arrowRight from "./assets/chevron-left.svg";
import arrowLeft from "./assets/chevron-right.svg";

const KEY = "AIzaSyCR71-QtUO-4lAiKYLS0YxdecSu-0-T_1I";

export class Videos extends React.Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  async componentDidMount() {
    const response = await youtube.get("/playlistItems", {
      params: {
        part: "snippet",
        playlistId: "PLv59FtNXbkbK-Dnlm8Sjz0hDyspmO86zE",
        maxResults: 20,
        key: KEY,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  }

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    return (
      <div className="container">
        <h1>Videos</h1>
        <VideoDetail video={this.state.selectedVideo} />
      </div>
    );
  }
}
