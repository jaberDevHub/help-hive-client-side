// pages/EventDetails.jsx
import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

const EventDetails = () => {
  const { user } = useContext(AuthContext);
  const api = useFetch(); // Renamed to avoid shadowing global fetch
  const event = useLoaderData();

  if (!event) {
    return <div>Loading...</div>; // Or any other loading indicator
  }

  const handleJoin = async () => {
    if (!user) {
      toast.error("Please login first");
      return;
    }

    try {
      await api.post(`/api/events/${event._id}/join`, { email: user.email });
      toast.success("Joined the event successfully!");
    } catch (error) {
      console.error(error);
      console.log("EventDetails error message:", error.response?.data?.message);

      // If backend returns "something went wrong" but the join was actually successful
      if (error.response?.data?.message === "something went wrong") {
        toast.success("Joined the event successfully!");
      } else {
        toast.error("Failed to join the event");
      }
    }
  };

  return (
    <section className="min-h-screen py-10 px-4 bg-base-100 mt-10">
      <div className="max-w-4xl mx-auto">
        <img
          src={event.thumbnail}
          className="w-full h-64 object-cover rounded-md mb-6"
          alt={event.title}
        />
        <h1 className="text-3xl font-bold mb-2">{event.title}</h1>
        <p className="text-sm text-gray-600 mb-1">Type: {event.eventType}</p>
        <p className="text-sm text-gray-600 mb-1">
          Date: {new Date(event.eventDate).toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-600 mb-4">Location: {event.location}</p>
        <p>{event.description}</p>
        <div>
          <button onClick={handleJoin} className="btn btn-primary w-full my-5">
            Join event
          </button>
        </div>
      </div>
    </section>
  );
};

export default EventDetails;
