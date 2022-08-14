import { useState } from "react";
import youtube from "../../apis/youtube";
import SearchBar from "../appSearchbar/Searchbar";
import VideoList from "../videoList/VideoList";
import VideoDetail from "../videoDetail/VideoDetail";
import BgVideo from "../bgVideo/bgVideo";
import dataContext from "../../context/dataContext";


const { Provider, Consumer } = dataContext;

const App = () => {

  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isSelectedVideo, setIsSelectedVideo] = useState(false);
  // const [isPlay, setIsPlay] = useState(true);

  const [data, setData] = useState({
    play: false,
    togglePlay: togglePlay,
  })


  const handleSubmit = async (termFromSearchBar) => {
    const response = await youtube.get("/search", {
      params: {
        q: termFromSearchBar,

      }
    });

    setVideos(response.data.items);
  }

  function togglePlay(playValue) {

    setData({ ...data, play: playValue });
  };

  const handleVideoSelect = (video) => {
    setSelectedVideo(selectedVideo => video);
    setIsSelectedVideo(true);

  }
  return (
    <div className="app_main">
      <Provider value={data}>

        <div className="bgColor">
          <BgVideo />
        </div>



        <div className="inputSearch">

          <SearchBar handleFormSubmit={handleSubmit} isSelectedVideo={isSelectedVideo} />

        </div>

        <div className='app'>
          <div className="app_pos">
            <div className="detailImg">
              <VideoDetail video={selectedVideo} play={data.play} />
            </div>
            <div className="videoList">
              <VideoList handleVideoSelect={handleVideoSelect} videos={videos} />
            </div>
          </div>
        </div>
      </Provider>
    </div>
  );
}

export default App;
