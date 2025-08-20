// pages/UpcomingEvents.jsx
import React, { useState } from "react";
import useUpcomingEvents from "../hooks/useUpcommingEvent";
import EventCard from "../Components/EventCard";
import Loading from "../Components/Loading";
const eventTypes = [
    "All", "Cleanup", "Plantation", "Awareness Campaign", "Donation",
];

const sortOptions = [
    { label: "Latest Date", value: "desc" },
    { label: "Oldest Date", value: "asc" },
];

const UpcomingEvents = () => {
    const [filterType, setFilterType] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    const [sortOrder, setSortOrder] = useState("desc");

    const { events, isLoading, error } = useUpcomingEvents(filterType, searchTerm);

    // Sort events by date
    const sortedEvents = [...events].sort((a, b) => {
        const dateA = new Date(a.eventDate);
        const dateB = new Date(b.eventDate);
        return sortOrder === "desc" ? dateB - dateA : dateA - dateB;
    });

    return (
        <section className="min-h-screen bg-base-200 py-12 px-4">
            <div className="max-w-6xl mx-auto">
                <h1 className="text-3xl font-bold mb-6 text-center">Upcoming Events</h1>

                {/* Controls */}
                <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
                    <input
                        type="text"
                        placeholder="Search by title"
                        className="input input-bordered w-full sm:max-w-xs"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <select
                        className="select select-bordered w-full sm:w-40"
                        value={filterType}
                        onChange={(e) => setFilterType(e.target.value)}
                    >
                        {eventTypes.map((t) => (
                            <option key={t} value={t==='All'?'':t}>{t}</option>
                        ))}
                    </select>
                    <select
                        className="select select-bordered w-full sm:w-40"
                        value={sortOrder}
                        onChange={(e) => setSortOrder(e.target.value)}
                    >
                        {sortOptions.map((opt) => (
                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                        ))}
                    </select>
                </div>

                {/* Status & Cards */}
                {isLoading && <Loading></Loading>}
                {error && <p className="text-center text-red-500">Error loading events</p>}
                {!isLoading && sortedEvents.length === 0 && <p className="text-center text-red-500 font-semibold text-2xl">No events found.</p>}

                <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                    {sortedEvents.map((event) => (
                        <EventCard key={event._id} event={event} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UpcomingEvents;
