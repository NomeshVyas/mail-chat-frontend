import axios from 'axios';

const API_URL = process.env.REACT_APP_BACKEND_API;

const API_GMAIL = async (urlObj, payLoad) => {
    return await axios({
        method: urlObj.method,
        url: `${API_URL}/${urlObj.endpoint}`,
        data: payLoad
    })
}

export default API_GMAIL;