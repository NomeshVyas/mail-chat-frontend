import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_API;

const API = async (urlObj, payLoad, type) => {
    return await axios({
        method: urlObj.method,
        url: `${API_URL}/${urlObj.endpoint}/${type}`,
        data: payLoad
    })
}

export default API;