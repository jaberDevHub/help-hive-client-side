import { toast } from 'react-toastify';

const BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:5000';

const useFetch = () => {
    const customFetch = async (endpoint, options = {}) => {
        const url = `${BASE_URL}${endpoint}`;
        const defaultHeaders = {
            'Content-Type': 'application/json'
        };

        const config = {
            ...options,
            headers: {
                ...defaultHeaders,
                ...options.headers
            }
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            return data;
        } catch (error) {
            console.error('Fetch error:', error);
            toast.error(error.message || 'Network error occurred');
            throw error;
        }
    };

    // Helper methods
    const get = (endpoint) => customFetch(endpoint);

    const post = (endpoint, body) => customFetch(endpoint, {
        method: 'POST',
        body: JSON.stringify(body)
    });

    const patch = (endpoint, body) => customFetch(endpoint, {
        method: 'PATCH',
        body: JSON.stringify(body)
    });

    const remove = (endpoint) => customFetch(endpoint, {
        method: 'DELETE'
    });

    return {
        get,
        post,
        patch,
        delete: remove
    };
};

export default useFetch;
