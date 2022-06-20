import { Component } from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtubeStatistics from "../apis/youtubeStatistics";
import BgVideo from "./bgVideo/bgVideo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      videoViews: [],
      selectedVideo: null
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
   * 
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
    return (
      <>
        <div className="bgColor">
          <BgVideo />
        </div>

        <div className="inputSearch">
          <SearchBar handleFormSubmit={this.handleSubmit} videoViews={this.videoViews} />

        </div>
        
        <div className='ui grid'>
          <div className="ui row">
            <div className="detailImg">
              {/**
               * @param {Todo: new page for showing video with stylzing }
               * 
               */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList videoViews={this.videoViews} handleVideoSelect={this.handleVideoSelect} videos={this.state.videos} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;