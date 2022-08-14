import axios from 'axios';
const KEY = 'AIzaSyBFuoKvDQD46B--9zCW2dsvcfx2tmb4Xgg'; // mention your youtube API key here


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 6,
        location: "48.16275430490416, 66.93669446510226",
        locationRadius: "1000km",
        type: "video",
        key: KEY
    }
})