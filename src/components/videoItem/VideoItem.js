import { useContext } from "react";
import dataContext from "../../context/dataContext";
import "../../styles/video.css";

const VideoItem = ({ video, handleVideoSelect, }) => {

    const context = useContext(dataContext);

    return (
        <div
            onClick={() => handleVideoSelect(video)}
            className='videoList__item'
            style={{ opacity: `${(context.play ? "0.1" : "1")}`, transition: "all 0.6s" }}>
            <div className='videoList__item_title'>
                <div className='videoList__item_titleText'>{video.snippet.title.slice(0, 70)}...</div>
            </div>
            <img className='videoList__item_img' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
        </div>
    );
};

export default VideoItem;