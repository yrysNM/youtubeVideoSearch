import axios from 'axios';
const KEY = 'AIzaSyBFuoKvDQD46B--9zCW2dsvcfx2tmb4Xgg'; // mention your youtube API key here

    // axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=Qq7mpb-hCBY&key=${KEY}`).then(function(response) {
    //     console.log(response);
    // });

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})