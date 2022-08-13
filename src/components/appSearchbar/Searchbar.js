import { useState } from "react";
import searchIcon from "../../icons/searchIcon.svg";

const Searchbar = ({ handleFormSubmit, togglePlay, isSelectedVideo }) => {


    const [term, setTerm] = useState("");
    const [isPlay, setIsPlay] = useState(false);

    const handleChange = (e) => {
        setTerm(e.target.value);
    }

    /**
     * 
     * @param {Search by Views} event 
     */
    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(this.state.term);
        handleFormSubmit(term);
    }

    const videoPlay = () => {


        setIsPlay(isPlay => !isPlay);

        togglePlay(isPlay);
    }

    const Show_Btns = () => {

        return (
            <div className="playPauseVideo">
                <button className="playPauseVideo__btnPlay" onClick={videoPlay}>{(isPlay) ? "Play" : "Pause"}</button>
            </div>
        );
    }

    return (
        <div className="container">

            <div className="inputSearch__cnt">

                <div className="inputSearch__header">

                    <h2 style={{ textAlign: "center" }}>YouTube Easy Search</h2>
                </div>

                <div className='inputSearch__subheader'>
                    <form onSubmit={handleSubmit} className='inputSearch__form'>
                        <div className='field'>
                            <label htmlFor="video-search">Video Search</label>
                            <input onChange={handleChange} name='video-search' type="text" placeholder="Search.." />
                            <img src={searchIcon} alt="icon" width={30} height={30} className="searchIcon" />
                        </div>
                    </form>
                </div>
                {(isSelectedVideo) ? Show_Btns() : null}

            </div>
        </div>
    );
}




export default Searchbar;