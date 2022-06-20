import { Component } from "react";
import ReactPlayer from "react-player";

class VideoDetail extends Component {
    constructor(props) {
        super(props); 
        this.state = {};
    }
 
    // videoViews = (URL) => {
    //     axios.get(URL).then((reponse) => {
    //         console.log(reponse);
    //     })
    // }

    render() {
        const {video} = this.props;
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
                        playing
                        className='react-player'
                        url={videoSrc}
                        width='100%'
                        height='100%'
                        />
                </div>

            </div>

        );
    }

    _onReady(event) {
        event.target.pauseVideo();
    }
}


export default VideoDetail;