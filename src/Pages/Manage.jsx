// // pages/ManageEvents.jsx
// import React from "react";


// import { Link } from "react-router-dom";
// import Loading from "../Components/Loading";
// import useMyEvent from "../hooks/useMyEvent";

// const ManageEvents = () => {
//   const { events, isLoading, error } = useMyEvent();

//   if (isLoading) return <Loading />;
  
//   return (
//     <section className="min-h-screen py-12 px-4 bg-base-200">
//       <div className="max-w-6xl mx-auto">
//         <h2 className="text-3xl font-bold text-center mb-8">Manage My Events</h2>

//         {events.length === 0 ? (
//           <p className="text-center text-3xl text-red-400">You haven’t created any events yet.</p>
//         ) : (
//           <div className="overflow-x-auto">
//             <table className="table w-full table-zebra">
//               <thead>
//                 <tr>
//                   <th>Thumbnail</th>
//                   <th>Title</th>
//                   <th>Type</th>
//                   <th>Date</th>
//                   <th>Action</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {events.map((event) => (
//                   <tr key={event._id}>
//                     <td>
//                       <img
//                         src={event.thumbnail}
//                         alt={event.title}
//                         className="w-16 h-16 object-cover rounded"
//                       />
//                     </td>
//                     <td>{event.title}</td>
//                     <td>{event.eventType}</td>
//                     <td>
//                       {new Date(event.eventDate).toLocaleString()}
//                     </td>
//                     <td>
//                       <Link
//                         to={`/update-event/${event._id}`}
//                         className="btn btn-xs btn-primary"
//                       >
//                         Update
//                       </Link>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         )}

//       </div>
//     </section>
//   );
// };

// export default ManageEvents;









import React from "react";
import { Link } from "react-router-dom";
import Loading from "../Components/Loading";
import useMyEvent from "../hooks/useMyEvent";
const API_BASE = import.meta.env.VITE_API_BASE_URL; // Ensure this is set in your .env file


const ManageEvents = () => {
  const { events, isLoading, error } = useMyEvent();

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    return (
      <section className="min-h-screen py-12 px-4 bg-gradient-to-br from-base-100 to-base-200 flex items-center justify-center">
        <div className="card w-full max-w-md bg-error text-error-content shadow-xl rounded-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-bold">Error Loading Events</h2>
            <p className="text-lg mt-2">{error.message || "Failed to retrieve events. Please try again later."}</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen py-12 px-4 bg-gradient-to-br from-base-100 to-base-200">
      <div className="max-w-6xl mx-auto p-6 bg-base-100 rounded-2xl shadow-2xl border border-base-300">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-primary mb-10 tracking-tight leading-tight">
          Manage My Events
        </h2>

        {events.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <p className="text-5xl md:text-6xl font-bold text-gray-400 mb-4 animate-bounce">
              😕
            </p>
            <p className="text-2xl md:text-3xl font-semibold text-base-content mb-8">
              You haven’t created any events yet.
            </p>
            <Link to="/create-event" className="btn btn-primary btn-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              Create Your First Event
            </Link>
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl shadow-lg border border-base-200">
            <table className="table w-full table-zebra table-lg">
              <thead className="bg-base-300 text-base-content uppercase tracking-wider text-sm">
                <tr>
                  <th className="py-4 px-6 rounded-tl-xl">Thumbnail</th>
                  <th className="py-4 px-6">Title</th>
                  <th className="py-4 px-6">Type</th>
                  <th className="py-4 px-6">Date</th>
                  <th className="py-4 px-6 text-center rounded-tr-xl">Action</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event) => (
                  <tr key={event._id} className="hover:bg-base-200 transition-colors duration-200">
                    <td className="py-3 px-6">
                      <img
                        src={event.thumbnail}
                        alt={event.title}
                        className="w-20 h-20 object-cover rounded-lg shadow-md"
                      />
                    </td>
                    <td className="py-3 px-6 font-medium text-base-content text-lg">
                      {event.title}
                    </td>
                    <td className="py-3 px-6 text-base">
                      <span className="badge badge-outline badge-primary text-base px-3 py-2">
                        {event.eventType}
                      </span>
                    </td>
                    <td className="py-3 px-6 text-base text-gray-500">
                      {new Date(event.eventDate).toLocaleString(undefined, {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true
                      })}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <Link
                        to={`/update-event/${event._id}`}
                        className="btn btn-sm btn-primary btn-outline transition-all duration-200 hover:scale-105"
                      >
                        Update
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default ManageEvents;