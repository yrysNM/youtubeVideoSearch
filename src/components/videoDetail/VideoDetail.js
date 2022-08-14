
import ReactPlayer from "react-player";
import "./videoDetail.scss";

const VideoDetail = ({ video, play }) => {

    if (!video) {
        return (
            <div>

            </div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="detailImg__block">
            <div className="detailImg__iframe">


                <ReactPlayer
                    playing={play}
                    className='react-player'
                    url={videoSrc}
                    width='100%'
                    height='100%'
                    vimeoconfig={{ iframeParams: { fullscreen: 0 } }}
                />
            </div>

        </div>

    )



}


export default VideoDetail;