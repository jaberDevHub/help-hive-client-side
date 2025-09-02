import Loading from "../Components/Loading";
import useMyJoinEvent from "../hooks/useMyJoinEvent";
import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa"; // Re-purposed for button icon

const MyJoinedEvents = () => {
  const { events, isLoading } = useMyJoinEvent();

  if (isLoading) return <Loading />;

  return (
    <section className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center mb-12 text-primary tracking-tight">My Joined Events</h2>

        {events.length === 0 ? (
          <div className="flex flex-col items-center justify-center p-10 bg-base-100 rounded-xl shadow-lg border border-dashed border-gray-400">
            <p className="text-3xl font-semibold text-gray-600 mb-4 animate-fadeIn">You haven't joined any events yet.</p>
            <p className="text-lg text-gray-500 text-center max-w-md mb-6">
              Discover and join exciting events to see them showcased here!
            </p>
            <Link to="/events" className="btn btn-primary btn-lg transform hover:scale-105 transition-transform duration-300 shadow-md">
              Browse All Events
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[...events]
              .sort(
                (a, b) =>
                  new Date(a.event.eventDate) - new Date(b.event.eventDate)
              )
              .map((joinedEvent) => (
              <div
                key={joinedEvent._id}
                className="card card-compact bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 rounded-lg overflow-hidden"
              >
                <figure className="h-52 w-full overflow-hidden">
                  <img
                    src={joinedEvent.event.thumbnail}
                    alt={joinedEvent.event.title}
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-500"
                  />
                </figure>
                <div className="card-body p-6">
                  <h3 className="card-title text-2xl font-bold  mb-2 line-clamp-2 leading-tight">
                    {joinedEvent.event.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-lg text-gray-600 mb-3">
                    <span className="badge badge-lg badge-outline badge-primary font-medium tracking-wide">
                      {joinedEvent.event.eventType}
                    </span>
                    <span className="text-base font-medium text-gray-500 flex items-center gap-1">
                      {new Date(joinedEvent.event.eventDate).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default MyJoinedEvents;