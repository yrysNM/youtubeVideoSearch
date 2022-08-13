import { useState } from "react";
import youtube from "../../apis/youtube";
import SearchBar from "../appSearchbar/Searchbar";
import VideoList from "../videoList/VideoList";
import VideoDetail from "../videoDetail/VideoDetail";
import BgVideo from "../bgVideo/bgVideo";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSelectedVideo, setIsSelectedVideo] = useState(false);
  const [isPlay, setIsPlay] = useState(true);

  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,
      }
    });
    setVideos(response.data.items);
    // console.log("this is resp", response);
  }

  const togglePlay = (playValue) => {
    setIsPlay(isPlay => playValue);
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(selectedVideo => video);
    setIsSelectedVideo(true);

  }
  return (
    <div className="app_main">
      <div className="bgColor">
        <BgVideo />
      </div>

      <div className="inputSearch">
        <SearchBar handleFormSubmit={handleSubmit} togglePlay={togglePlay} isSelectedVideo={isSelectedVideo} />

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
            <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
