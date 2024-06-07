import { useState } from 'react';
import API from '../Services/api'

const useApi = (urlObj) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const call = async (payLoad, type = '') => {
        setIsLoading(true);
        setResponse(null);
        setError("");
        try {
            let res = await API(urlObj, payLoad, type);
            setResponse(res.data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    }

    return { call, response, error, isLoading };
}

export default useApi;