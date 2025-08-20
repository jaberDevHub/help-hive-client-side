
import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const useUpcommingEvent = (filterType = "All", searchTerm = "") => {
    const [events, setEvents] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const fetch = useFetch();

    const loadEvents = async () => {
        try {
            setIsLoading(true);
            const params = new URLSearchParams();
            
            if (filterType !== "All") {
                params.append('eventType', filterType);
            }
            if (searchTerm) {
                params.append('search', searchTerm);
            }

            const queryString = params.toString();
            const url = queryString ? `/api/events?${queryString}` : '/api/events';
            
            const data = await fetch.get(url);
            setEvents(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setIsLoading(false);
        }
    };

    useEffect(() => {
        loadEvents();
    }, [filterType, searchTerm]);

    return { 
        events, 
        isLoading, 
        error, 
        refetch: loadEvents 
    };
};

export default useUpcommingEvent;
