import { useState, useContext, useEffect } from "react";
import dataContext from "../../context/dataContext";
import searchIcon from "../../icons/searchIcon.svg";
import "./searchBar.scss";

const Searchbar = ({ handleFormSubmit, isSelectedVideo }) => {

    const context = useContext(dataContext)
    const [term, setTerm] = useState("");
    const [isPlay, setIsPlay] = useState(context.play);


    useEffect(() => {
        console.log("render");
        context.togglePlay(isPlay);

    }, [isPlay]);

    useEffect(() => {
        setIsPlay(context.play);
    }, [context.play]);


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


    }

    const Show_Btns = () => {

        return (
            <div className="playPauseVideo">
                <button className="playPauseVideo__btnPlay" onClick={videoPlay}>
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border">
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    <span> {(isPlay) ? "Pause" : "Play"}</span>
                </button>
            </div>
        );
    }



    return (


        <div className="inputSearch__cnt" style={{ opacity: `${context.play || isPlay ? "0.3" : "1"}` }}>

            <div className="inputSearch__header">

                <h2 style={{ textAlign: "center" }}>YouTube Easy Search</h2>
            </div>

            <div className='inputSearch__subheader'>
                <form onSubmit={handleSubmit} className='inputSearch__form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video search in only KZ net </label>
                        <input onChange={handleChange} autoComplete="off" name='video-search' type="text" placeholder="Search.." />
                        <button type="submit" style={{ border: "none" }}>

                            <img src={searchIcon} alt="icon" width={30} height={30} className="searchIcon" />
                        </button>
                    </div>
                </form>
            </div>
            {(isSelectedVideo) ? Show_Btns() : null}

        </div>

    );
}




export default Searchbar;