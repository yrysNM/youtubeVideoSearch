import { useEffect, useState } from "react";
import youtubeStatistics from "../../apis/youtubeStatistics";
import VideoItem from "../videoItem/VideoItem";

const VideoList = ({ videos, handleVideoSelect }) => {
    const [videoViews, setVideoViews] = useState([]);
    
    /**
     * @param {modiled} videoViews 
    */
   async function metadata(videoId) {

       const response = await youtubeStatistics.get("/videos", {
           params: {
               id: videoId,
           }
       });
       setVideoViews(response.data.items);
   }

   
   // function videoStatictics(videoId) {
       // }
       
       let arrVideoViews = [];
       const renderredVideos = videos.map((video) => {
           arrVideoViews.push(video.id.videoId);
           // videoViews(video.id.videoId);
           return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        });
        
    useEffect(() => {
        metadata(arrVideoViews.toString());
    });
    // metadata(arrVideoViews.toString());
    return <div className="videoList__block">{renderredVideos}</div>
};

export default VideoList;