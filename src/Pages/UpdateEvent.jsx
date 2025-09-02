import React, { useEffect, useState } from "react";
import { useNavigate, useLoaderData } from "react-router-dom";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

const UpdateEvent = () => {


  const event = useLoaderData();
  const api = useFetch(); // renamed
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    eventType: "Cleanup",
    thumbnail: "",
    location: "",
    eventDate: new Date(),
  });

  useEffect(() => {
    if (event) {
      setFormData({
        title: event.title || "",
        description: event.description || "",
        eventType: event.eventType || "Cleanup",
        thumbnail: event.thumbnail || "",
        location: event.location || "",
        eventDate: event.eventDate ? new Date(event.eventDate) : new Date(),
      });
    }
  }, [event]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { _id, ...updatePayload } = formData;
      // safer to use event._id
      await api.patch(`/api/events/${event._id}`, updatePayload);
      toast.success("Event updated successfully");
      navigate("/manage-events");
    } catch (err) {
      console.error(err);
      toast.error("Failed to update event");
    }
  };

  if (!event) {
    return <div>Loading...</div>;
  }

  return (
    <section className="min-h-screen py-10 px-4 bg-base-100">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Update Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Title"
            className="input input-bordered w-full"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            required
          />
          <textarea
            placeholder="Description"
            className="textarea textarea-bordered w-full"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            required
          ></textarea>
          <select
            className="select select-bordered w-full"
            value={formData.eventType}
            onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
          >
            <option>Cleanup</option>
            <option>Plantation</option>
            <option>Donation</option>
          </select>
          <input
            type="text"
            placeholder="Thumbnail Image URL"
            className="input input-bordered w-full"
            value={formData.thumbnail}
            onChange={(e) => setFormData({ ...formData, thumbnail: e.target.value })}
            required
          />
          <input
            type="text"
            placeholder="Location"
            className="input input-bordered w-full"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            required
          />
          <DatePicker
            selected={formData.eventDate}
            onChange={(date) => setFormData({ ...formData, eventDate: date })}
            className="input input-bordered w-full"
            minDate={new Date()}
            required
          />
          <button type="submit" className="btn btn-primary w-full">
            Update Event
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateEvent;
