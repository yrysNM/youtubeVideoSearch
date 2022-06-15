import { Component } from "react";
import IMG from "./assets/youtube.png";


class Searchbar extends Component {
    constructor(props) {
        super(props); 

        this.state ={
            term: ""
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
        console.log(this.state.term);
        this.props.handleFormSubmit(this.state.term);
    }

    render() {
        return(
            <>
            <h2  style={{textAlign:"center"}}><img style={{width:'200px', height:'100px',justifyContent:'center'}} src={IMG} alt="youtube logo"></img></h2>
            <div className='search-bar ui segment'>
                <form onSubmit={this.handleSubmit} className='ui form'>
                    <div className='field'>
                        <label htmlFor="video-search">Video Search</label>
                        <input onChange={this.handleChange} name='video-search' type="text" placeholder="Search.."/>
                    </div>
                </form>
            </div>
            </>
        );
    }


}
export default Searchbar;