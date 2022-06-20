// function onYoutubeIframeAPIReady() {
//     let player;
//     player = new YT.PLayer('ytplayer', {
//         videoId: "EGOBLZNBiVM",
//         playerVars: { "autoplay": 1, "controls": 0 },
//         events: {
//             'onReady': onPlayerReady,
//             'onPlaybackQualityChange': onPlayerPlaybackQualityChange,
//             'onStateChange': onPlayerStateChange,
//             'onError': onPlayerError
//         }
//     });
// }

const BgVideo = () => {

    return (
        <div className="defaultVideo" id="ytplayer">
            

        </div>
    );

};

export default BgVideo;