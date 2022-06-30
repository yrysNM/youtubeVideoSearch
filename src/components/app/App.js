import { Component } from "react";
import youtube from "../../apis/youtube";
import SearchBar from "../appSearchbar/Searchbar";
import VideoList from "../videoList/VideoList";
import VideoDetail from "../videoDetail/VideoDetail";
import BgVideo from "../bgVideo/bgVideo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
      isSelectedVideo: false,
      isPlay: true,
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

  togglePlay = (playValue) => {
    this.setState({ isPlay: playValue });
  }


  handleVideoSelect = (video) => {
    this.setState({ selectedVideo: video, isSelectedVideo: true })
  }

  render() {
    const { videos, isPlay, selectedVideo, isSelectedVideo } = this.state;

    return (
      <div className="app_main">
        <div className="bgColor">
          <BgVideo />
        </div>

        <div className="inputSearch">
          <SearchBar handleFormSubmit={this.handleSubmit} togglePlay={this.togglePlay} isSelectedVideo={isSelectedVideo} />

        </div>

        <div className='app'>
          <div className="app_pos">
            <div className="detailImg">
               {/**
               * @param {Todo: new page for showing video with stylzing }
               * 
               */}
              <VideoDetail video={selectedVideo} togglePlay={isPlay} />
            </div>
            <div className="videoList">
              <VideoList handleVideoSelect={this.handleVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
