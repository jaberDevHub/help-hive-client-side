import { toast } from 'react-toastify';
import api from '../api/axios';

const useFetch = () => {
    const customFetch = async (method, endpoint, body = null) => {
        try {
            const options = {
                method,
                url: endpoint,
                data: body,
            };
            const response = await api(options);
            return response.data;
        } catch (error) {
            console.error('Fetch error:', error);
            const errorMessage = error.response?.data?.message || error.message || 'Network error occurred';
            console.log("useFetch errorMessage:", errorMessage);
            if (errorMessage !== "something went wrong") {
                toast.error(errorMessage);
            }
            throw error;
        }
    };

    // Helper methods
    const get = (endpoint) => customFetch('get', endpoint);

    const post = (endpoint, body) => customFetch('post', endpoint, body);

    const patch = (endpoint, body) => customFetch('patch', endpoint, body);

    const remove = (endpoint) => customFetch('delete', endpoint);

    return {
        get,
        post,
        patch,
        delete: remove
    };
};

export default useFetch;