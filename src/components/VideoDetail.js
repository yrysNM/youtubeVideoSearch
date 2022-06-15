import { Component } from "react";


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
                    <h1>Enter search keyword to load...</h1>
                    <br></br>
                    <p style={{ fontSize: '25px' }}>
                        Use the API to search for videos matching specific search terms, topics, locations, publication dates, and much more. The APIs search.list method also supports searches for playlists and channels.
        
                        With the YouTube Data API, you can add a variety of YouTube features to your application. Use the API to upload videos, manage playlists and subscriptions, update channel settings, and more.
        
                    </p>
                </div>
            );
        }
        
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
        console.log(typeof video, video);
        // console.log(this.videoViews(videoSrc));
        return (
            <div>
                <div className="ui embed">
                    <iframe src={videoSrc} allowFullScreen title="Video player" />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{video.snippet.title}</h4>
                    <p>{video.snippet.description}</p>
                </div>
            </div>
        );
    }
}


export default VideoDetail;