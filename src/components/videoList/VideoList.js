import VideoItem from "../videoItem/VideoItem";

const VideoList = ({videos, handleVideoSelect, videoViews}) => {
    let arrVideoViews = [];
    const renderredVideos= videos.map((video) => {
        arrVideoViews.push(video.id.videoId);
        // videoViews(video.id.videoId);
        return <VideoItem key ={video.id.videoId}  video={video} handleVideoSelect={handleVideoSelect} />
    });

        videoViews(arrVideoViews.toString());
    return <div className="videoList__block">{renderredVideos}</div>
};

export default VideoList;