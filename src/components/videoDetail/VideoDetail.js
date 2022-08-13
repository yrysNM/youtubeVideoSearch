// import { Component, useState, useEffect } from "react";
import ReactPlayer from "react-player";

const VideoDetail = ({ video, togglePlay }) => {

    if (!video) {
        return (
            <div>

            </div>
        );
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    // const _onReady = (event) => {
    //     event.target.pauseVideo();
    // }

    return (
        <div className="detailImg__block">
            <div className="detailImg__iframe">


                <ReactPlayer
                    playing={togglePlay}
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