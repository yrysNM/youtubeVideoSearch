import "../../styles/video.css";

const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <div onClick={() => handleVideoSelect(video)} className='videoList__item'>
            <div className='videoList__item_title'>
                <div className='videoList__item_titleText'>{video.snippet.title}</div>
            </div>
            <img className='videoList__item_img' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
        </div>
    );
};

export  default VideoItem;