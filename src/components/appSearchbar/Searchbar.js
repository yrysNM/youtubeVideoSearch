import { Component } from "react";
import searchIcon from "../../icons/searchIcon.svg";

class Searchbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            term: "", 
            play: false,
            pause: false
        };

    }

    handleChange = (e) => {
        this.setState({
            term: e.target.value
        });
    }

    /**
     * 
     * @param {Search by Views} event 
     */
    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);
        this.props.handleFormSubmit(this.state.term);
    }

    videoPlay = () => {
        this.setState(({play}) => {
            return {
                play: !play
            }
        })
    }

    videoPause = () => {
        this.setState(({pause}) => {
            return {
                pause: !pause
            }
        })
    }

    render() {



        return (
            <div className="container">

                <div className="inputSearch__cnt">

                    <div className="inputSearch__header">

                        <h2 style={{ textAlign: "center" }}>YouTube Easy Search</h2>
                    </div>

                    <div className='inputSearch__subheader'>
                        <form onSubmit={this.handleSubmit} className='inputSearch__form'>
                            <div className='field'>
                                <label htmlFor="video-search">Video Search</label>
                                <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.." />
                                <img src={searchIcon} alt="icon" width={30} height={30} className="searchIcon" />
                            </div>
                        </form>
                    </div>

                    <div className="playPauseVideo">
                        <button className="playPauseVideo__btnPlay" onClick={this.videoPlay}>Play</button>
                        <button className="playPauseVideo__btnPause" onClick={this.videoPause}>pause</button>
                    </div>

                </div>
            </div>
        );
    }


}
export default Searchbar;