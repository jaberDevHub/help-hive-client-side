// import { Link } from "react-router-dom";
// import { useContext, useState } from "react";
// import Logo from '../assets/images/logo.png';
// import LogoTow from '../assets/images/footer-logo.png';
// import { AuthContext } from "../Provider/AuthProvider";
// import useTheme from "../hooks/useTheme";
// import { FaMoon, FaSun } from "react-icons/fa";
// const Navbar = () => {
//   const { user, logOut } = useContext(AuthContext)

//   const { theme, toggleTheme } = useTheme();
//   const menuItems = (
//     <>
//       <li><Link to="/">Home</Link></li>
//       <li><Link to="/upcoming-events">All Upcoming Events</Link></li>
//       {!user && <li><Link to="/login">Login</Link></li>}
//       {user && <>
//         <li><Link to="/create-event">Create Event</Link></li>
//         <li><Link to="/manage-events">Manage Events</Link></li>
//         <li><Link to="/joined-events">Joined Events</Link></li>
//       </>}
//     </>
//   );

//   const profileDropdown = (
//     <ul className="menu menu-sm dropdown-content right-0 z-[1] mt-3 w-[150px] rounded-box bg-base-100 p-2 shadow">
//       <li><button className="bg-red-500 text-white" onClick={logOut}>Logout</button></li>
//     </ul>
//   );

//   return (
//     <div className="navbar bg-base-100 shadow-sm fixed z-30 w-full top-0">
//       {/* Navbar Start - Mobile */}
//       <div className="navbar-start">
//         <div className="dropdown">
//           <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
//               viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
//                 d="M4 6h16M4 12h8m-8 6h16" />
//             </svg>
//           </div>
//           <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 w-52 rounded-box bg-base-100 p-2 shadow">
//             {menuItems}
//           </ul>
//         </div>
//         <Link to="/" className="btn btn-ghost text-xl">{theme === 'light' ? <img src={Logo} width={100} alt="" /> : <img src={LogoTow} width={100} alt="" />}</Link>
//       </div>

//       {/* Navbar Center - Desktop */}
//       <div className="navbar-center hidden lg:flex">
//         <ul className="menu menu-horizontal px-1">{menuItems}</ul>
//       </div>

//       {/* Navbar End - Profile/Logout */}
//       <div className="navbar-end space-x-3">
//         {user ? (
//           <div className="dropdown dropdown-end">
//             <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
//               <div className="w-10 rounded-full">
//                 <img src={user?.photoURL} alt="Profile" title={user?.displayName} />
//               </div>
//             </div>
//             {profileDropdown}
//           </div>
//         ) : (
//           <></>
//         )}
//         <button onClick={toggleTheme} className="btn w-[100px] btn-outline rounded-full">
//           {theme === "dark" ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
//           <span className="ml-2">{theme === "dark" ? "Light" : "Dark"}</span>
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;






import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Logo from '../assets/images/logo.png';
import LogoTow from '../assets/images/footer-logo.png';
import { AuthContext } from "../Provider/AuthProvider";
import useTheme from "../hooks/useTheme";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const { theme, toggleTheme } = useTheme();

  const menuItems = (
    <>
      <li><Link to="/" className="font-medium hover:text-primary transition-colors duration-200">Home</Link></li>
      <li><Link to="/upcoming-events" className="font-medium hover:text-primary transition-colors duration-200">All Upcoming Events</Link></li>
      {!user && <li><Link to="/login" className="font-medium hover:text-primary transition-colors duration-200">Login</Link></li>}
      {user && (
        <>
          <li><Link to="/create-event" className="font-medium hover:text-primary transition-colors duration-200">Create Event</Link></li>
          <li><Link to="/manage-events" className="font-medium hover:text-primary transition-colors duration-200">Manage Events</Link></li>
          <li><Link to="/joined-events" className="font-medium hover:text-primary transition-colors duration-200">Joined Events</Link></li>
        </>
      )}
    </>
  );

  const profileDropdown = (
    <ul className="menu menu-sm dropdown-content z-[1] mt-3 p-3 shadow-lg bg-base-100 rounded-lg border border-base-200 w-40">
      <li>
        <button
          onClick={logOut}
          className="w-full text-left py-2 px-4 rounded-md text-white bg-error hover:bg-error-focus transition-colors duration-200"
        >
          Logout
        </button>
      </li>
    </ul>
  );

  return (
    <div className="navbar fixed z-30 w-full top-0 bg-base-100/95 backdrop-blur-sm border-b border-base-200 py-3 px-4 md:px-8 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-lg bg-base-100 rounded-lg border border-base-200 w-52">
            {menuItems}
          </ul>
        </div>
        <Link to="/" className="flex items-center">
          <img
            src={theme === 'light' ? Logo : LogoTow}
            alt="Logo"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {menuItems}
        </ul>
      </div>

      <div className="navbar-end space-x-3">
        {user && (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 h-10 rounded-full overflow-hidden">
                <img src={user?.photoURL} alt="Profile" title={user?.displayName} className="w-full h-full object-cover" />
              </div>
            </div>
            {profileDropdown}
          </div>
        )}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 rounded-full bg-base-200 hover:bg-base-300 transition-colors duration-200 border border-base-300 text-base-content gap-2"
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <FaSun className="text-yellow-400 text-lg" /> : <FaMoon className="text-gray-800 text-lg" />}
          <span className="hidden md:inline">{theme === "dark" ? "Light" : "Dark"}</span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;