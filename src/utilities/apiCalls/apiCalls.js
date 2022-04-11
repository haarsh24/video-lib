import axios from 'axios';

const getVideosDataFromServer = async () => {
    try {
        const response = await axios.get('/api/videos');
        console.log(response);
        return response.data.videos;
        
    } catch {
        console.log(error);
    }
}

const authLogin = async (email, password) => {
}
export {
    getVideosDataFromServer,
    authLogin
};