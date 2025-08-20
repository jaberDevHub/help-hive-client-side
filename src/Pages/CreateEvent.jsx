// // // CreateEvent.jsx
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import DatePicker from "react-datepicker";
// // import "react-datepicker/dist/react-datepicker.css";
// // import { useContext } from "react";
// // import { AuthContext } from "../Provider/AuthProvider";
// // import { toast } from "react-toastify";
// // import useAxiosSecure from "../hooks/useAxiosSecure";

// // const CreateEvent = () => {
// //   const { user } = useContext(AuthContext);
// //   const [eventDate, setEventDate] = useState(null);
// //   const axiousSecure = useAxiosSecure()
// //   const navigate = useNavigate();

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const form = e.target;
// //     const title = form.title.value;
// //     const description = form.description.value;
// //     const eventType = form.eventType.value;
// //     const thumbnail = form.thumbnail.value;
// //     const location = form.location.value;

// //     if (!eventDate || eventDate < new Date()) {
// //       return toast.error("Please select a valid future date.");
// //     }

// //     const newEvent = {
// //       title,
// //       description,
// //       eventType,
// //       thumbnail,
// //       location,
// //       eventDate: eventDate.toISOString(),
// //       email: user?.email,
// //     };

// //     axiousSecure.post('/api/events', newEvent).then((data => {
// //       if (data.data.message === 'Event created successfully' || data.status === 200) {
// //         toast.success(" Event created successfully!");
// //         form.reset();
// //         setEventDate(null);
// //         navigate("/upcoming-events");
// //       }
// //     }))
// //     console.log("Event created:", newEvent);


// //   };
// import React, { useState, useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";
// import { AuthContext } from "../Provider/AuthProvider";
// import { toast } from "react-toastify";
// import useFetch from "../hooks/useFetch";

// const CreateEvent = () => {
//   const { user } = useContext(AuthContext);
//   const [eventDate, setEventDate] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const fetch = useFetch();
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const form = e.target;
//     const title = form.title.value;
//     const description = form.description.value;
//     const eventType = form.eventType.value;
//     const thumbnail = form.thumbnail.value;
//     const location = form.location.value;

//     if (!eventDate || eventDate < new Date()) {
//       return toast.error("Please select a valid future date.");
//     }

//     const newEvent = {
//       title,
//       description,
//       eventType,
//       thumbnail,
//       location,
//       eventDate: eventDate.toISOString(),
//       email: user?.email,
//       createdAt: new Date().toISOString()
//     };

//     setLoading(true);
//     try {
//       const data = await fetch.post('/api/events', newEvent);
//       if (data.message === 'Event created successfully') {
//         toast.success("Event created successfully!");
//         form.reset();
//         setEventDate(null);
//         navigate("/upcoming-events");
//       } else {
//         toast.error(data.message || "Failed to create event");
//       }
//     } catch (error) {
//       console.error("Error creating event:", error);
//       toast.error(error.message || "Something went wrong, please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };


//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center py-10">
//       <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl">
//         <h2 className="text-2xl font-bold mb-6 text-center text-primary">Create New Event</h2>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="title"
//             required
//             placeholder="Event Title"
//             className="input input-bordered w-full"
//           />
//           <textarea
//             name="description"
//             required
//             placeholder="Event Description"
//             className="textarea textarea-bordered w-full"
//             rows="4"
//           ></textarea>

//           <select name="eventType" required className="select select-bordered w-full">
//             <option value="">Select Event Type</option>
//             <option value="Cleanup">Cleanup</option>
//             <option value="Plantation">Plantation</option>
//             <option value="Awareness Campaign">Awareness Campaign</option>
//             <option value="Donation">Donation</option>
//           </select>

//           <input
//             type="url"
//             name="thumbnail"
//             required
//             placeholder="Thumbnail Image URL"
//             className="input input-bordered w-full"
//           />
//           <input
//             type="text"
//             name="location"
//             required
//             placeholder="Location"
//             className="input input-bordered w-full"
//           />

//           <div className="w-full">
//             <DatePicker
//               selected={eventDate}
//               onChange={(date) => setEventDate(date)}
//               minDate={new Date()}
//               placeholderText="Select Future Date"
//               className="input input-bordered w-full"
//               required
//             />
//           </div>

//           <button 
//             type="submit" 
//             className="btn btn-primary w-full" 
//             disabled={loading}
//           >
//             {loading ? 'Creating Event...' : 'Create Event'}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CreateEvent;





import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";
import useFetch from "../hooks/useFetch";

const CreateEvent = () => {
  const { user } = useContext(AuthContext);
  const [eventDate, setEventDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetch = useFetch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const eventType = form.eventType.value;
    const thumbnail = form.thumbnail.value;
    const location = form.location.value;

    if (!eventDate || eventDate < new Date()) {
      return toast.error("Please select a valid future date.");
    }

    const newEvent = {
      title,
      description,
      eventType,
      thumbnail,
      location,
      eventDate: eventDate.toISOString(),
      email: user?.email,
      createdAt: new Date().toISOString(),
    };

    setLoading(true);
    try {
      const data = await fetch.post("/api/events", newEvent);
      if (data.message === "Event created successfully") {
        toast.success("Event created successfully!");
        form.reset();
        setEventDate(null);
        navigate("/upcoming-events");
      } else {
        toast.error(data.message || "Failed to create event");
      }
    } catch (error) {
      console.error("Error creating event:", error);
      toast.error(error.message || "Something went wrong, please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-800 bg-opacity-70 backdrop-filter backdrop-blur-md border border-gray-700 p-10 rounded-3xl shadow-2xl shadow-indigo-500/20 w-full max-w-2xl transform transition-all duration-300 hover:scale-[1.005]">
        <h2 className="text-4xl font-extrabold mb-8 text-center text-white tracking-tight leading-tight">
          Craft New Event
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            required
            placeholder="Event Title"
            className="w-full p-4 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:border-indigo-400"
          />
          <textarea
            name="description"
            required
            placeholder="Event Description"
            className="w-full p-4 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:border-indigo-400"
            rows="5"
          ></textarea>

          <select
            name="eventType"
            required
            className="w-full p-4 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:border-indigo-400 appearance-none pr-8 cursor-pointer"
          >
            <option value="" className="bg-gray-700 text-white">
              Select Event Type
            </option>
            <option value="Cleanup" className="bg-gray-700 text-white">
              Cleanup
            </option>
            <option value="Plantation" className="bg-gray-700 text-white">
              Plantation
            </option>
            <option
              value="Awareness Campaign"
              className="bg-gray-700 text-white"
            >
              Awareness Campaign
            </option>
            <option value="Donation" className="bg-gray-700 text-white">
              Donation
            </option>
          </select>

          <input
            type="url"
            name="thumbnail"
            required
            placeholder="Thumbnail Image URL"
            className="w-full p-4 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:border-indigo-400"
          />
          <input
            type="text"
            name="location"
            required
            placeholder="Location"
            className="w-full p-4 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:border-indigo-400"
          />

          <div className="w-full relative">
            <DatePicker
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              minDate={new Date()}
              placeholderText="Select Future Event Date"
              className="w-full p-4 bg-gray-700/50 text-white placeholder-gray-400 border border-gray-600 rounded-xl focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all duration-300 ease-in-out hover:border-indigo-400 cursor-pointer"
              required
              dateFormat="MMMM d, yyyy h:mm aa"
              showTimeSelect
              timeFormat="HH:mm"
              timeIntervals={15}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-indigo-500/50 hover:from-indigo-700 hover:to-purple-700 hover:scale-105 transition-all duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
            disabled={loading}
          >
            {loading ? "Creating Event..." : "Create Event"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateEvent;