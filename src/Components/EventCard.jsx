// // EventCard.jsx
// import React from "react";
// import { Link } from "react-router-dom";
// import { Calendar, MapPin } from "lucide-react";
// import { format } from "date-fns";

// const EventCard = ({ event }) => (
//   <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow">
//     <figure className="relative">
//       <img 
//         src={event.thumbnail} 
//         alt={event.title} 
//         className="h-52 w-full object-cover"
//         onError={(e) => {
//           e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09';
//         }}
//       />
//       <span className="absolute top-2 right-2 badge badge-primary">{event.eventType}</span>
//     </figure>
//     <div className="card-body">
//       <h2 className="card-title font-bold text-lg">{event.title}</h2>
//       <p className="text-gray-600 text-sm">
//         {event.description?.slice(0, 80)}{event.description?.length > 80 ? '...' : ''}
//       </p>
//       <div className="space-y-2 mt-2">
//         <p className="flex items-center gap-2 text-sm text-gray-600">
//           <Calendar className="w-4 h-4 text-primary" />
//           {format(new Date(event.eventDate), "PPP")}
//         </p>
//         <p className="flex items-center gap-2 text-sm text-gray-600">
//           <MapPin className="w-4 h-4 text-primary" />
//           {event.location}
//         </p>
//       </div>
//       <div className="card-actions justify-end mt-4">
//         <Link 
//           to={`/event/${event._id}`} 
//           className="btn btn-primary btn-sm">
//           View Details
//         </Link>
//       </div>
//     </div>
//   </div>
// );

// export default EventCard;








import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin } from "lucide-react";
import { format } from "date-fns";

const EventCard = ({ event }) => (
  <div className="card bg-base-100 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-[1.01] transition-all duration-300 ease-out overflow-hidden border border-base-200">
    <figure className="relative">
      <img
        src={event.thumbnail}
        alt={event.title}
        className="h-56 w-full object-cover rounded-t-2xl"
        onError={(e) => {
          e.target.src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09';
        }}
      />
      <span className="absolute top-4 right-4 badge badge-primary text-xs font-semibold px-4 py-2 rounded-full tracking-wider shadow">
        {event.eventType}
      </span>
    </figure>
    <div className="card-body p-7 flex flex-col justify-between">
      <div>
        <h2 className="card-title font-extrabold text-2xl mb-3 leading-tight text-black">
          {event.title}
        </h2>
        <p className="text-gray-500 text-sm line-clamp-3 mb-4">
          {event.description}
        </p>
      </div>
      <div className="space-y-3 mt-auto">
        <p className="flex items-center gap-3 text-sm text-gray-600">
          <Calendar className="w-5 h-5 text-primary-focus" />
          {format(new Date(event.eventDate), "do MMMM yyyy, p")}
        </p>
        <p className="flex items-center gap-3 text-sm text-gray-600">
          <MapPin className="w-5 h-5 text-primary-focus" />
          {event.location}
        </p>
      </div>
      <div className="card-actions justify-end mt-7">
        <Link
          to={`/event/${event._id}`}
          className="btn btn-primary w-full btn-lg font-bold rounded-lg transition-transform duration-200 hover:scale-[1.02]"
        >
          View Details
        </Link>
      </div>
    </div>
  </div>
);

export default EventCard;