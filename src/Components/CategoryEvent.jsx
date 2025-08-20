import React, { useState } from 'react';
import useUpcomingEvents from '../hooks/useUpcommingEvent';
import EventCard from './EventCard';

const categories = [
  "All",
  "Cleanup",
  "Plantation",
  "Awareness Campaign",
  "Donation"
];

const CategoryEvent = () => {
  const [filterType, setFilterType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const { events, isLoading } = useUpcomingEvents(filterType, searchTerm);

  return (
    <div className="px-4 py-10">
      <h2 className="text-3xl font-bold text-center my-8">🌟 Browse Events</h2>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-8">
        <input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="input input-bordered w-full"
        />
      </div>

      {/* Tab Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilterType(category)}
            className={`px-4 py-2 rounded-full border ${
              filterType === category
                ? "bg-primary text-white border-primary"
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-100"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Events Grid */}
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-6">
        {isLoading ? (
          <p className="text-center col-span-full">Loading events...</p>
        ) : events.length === 0 ? (
          <p className="text-center col-span-full">No events found.</p>
        ) : (
          events.map((event) => <EventCard key={event._id} event={event} />)
        )}
      </div>
    </div>
  );
};

export default CategoryEvent;
