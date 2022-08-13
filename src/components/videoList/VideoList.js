import VideoItem from "../videoItem/VideoItem";
import { useEffect, useState } from "react";
import youtubeStatistics from "../../apis/youtubeStatistics";
import { getSpaceUntilMaxLength } from "@testing-library/user-event/dist/utils";

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
        console.log(response.data);
        setVideoViews(videoViews => [...videoViews, response.data.items]);
    }

    useEffect(() => {
        videos.map((video) => {
            return metadata(video.id.videoId);
            // setVideoViews(metadata(video.id.videoId));
        })

    }, [videos]);
    const renderredVideos = videos.map((video) => {
        // metadata(video.id.videoId);
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
    });


    return <div className="videoList__block">{renderredVideos}</div>


};

export default VideoList;