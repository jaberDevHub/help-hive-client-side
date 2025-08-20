import React, { useState } from 'react';
import useUpcomingEvents from '../hooks/useUpcommingEvent';
import EventCard from './EventCard';


const HighLight = () => {
      const [filterType, setFilterType] = useState("");
        const [searchTerm, setSearchTerm] = useState("");
    const { events, isLoading } = useUpcomingEvents(filterType,searchTerm)
    return (
        <div className='py-12'>
            <h2 className="text-3xl font-bold text-center my-10">🌟 Highlighted Events</h2>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3'>
                {
                    events?.map(event => (
                       <EventCard event={event}></EventCard>
                    ))
                }
            </div>
        </div>
    );
};

export default HighLight;