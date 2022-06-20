import { Component } from "react";
import youtube from "../../apis/youtube";
// import youtubeStatistics from "../apis/youtubeStatistics";
import SearchBar from "../appSearchbar/Searchbar";
import VideoList from "../videoList/VideoList";
import VideoDetail from "../videoDetail/VideoDetail";
import BgVideo from "../bgVideo/bgVideo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      videoViews: [],
      selectedVideo: null,
      play: false,
      pause: false,
    };
  }

  handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      }
    });

    this.setState({
      videos: response.data.items
    })

    // console.log("this is resp", response);
  }


  /**
   * @method PlayPause_Video
   */

  videoPlay = (playValue) => {
    this.setState({ play: playValue });
  }

  videoPause = (pauseValue) => {
    this.setState({ pause: pauseValue });
  }

  /**
   * @param {modiled} videoViews 
   */
  // videoViews = async (videoId) => {
  //   const response = await youtubeStatistics.get("/videos", {
  //     params: {
  //       id: videoId,

  //     }
  //   });

  //   console.log(response);
  // }



  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video })
  }

  render() {
    const {videos, pause, play, selectedVideo} = this.state;
    return (
      <div className="app_main">
        <div className="bgColor">
          <BgVideo />
        </div>

        <div className="inputSearch">
          <SearchBar handleFormSubmit={this.handleSubmit} videoPlay={this.videoPlay} videoPause={this.videoPause} />

        </div>

        <div className='app'>
          <div className="app_pos">
            <div className="detailImg">
              {/**
               * @param {Todo: new page for showing video with stylzing }
               * 
               */}
              <VideoDetail video={selectedVideo} videoPlay={play} videoPause={pause} />
            </div>
            <div className="videoList">
              <VideoList videoViews={this.videoViews} handleVideoSelect={this.handleVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
