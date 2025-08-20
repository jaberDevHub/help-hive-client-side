// // Login.jsx
// import React, { useContext } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import SocialLogin from "../Components/SocialLogin";
// import { AuthContext } from "../Provider/AuthProvider";
// import { toast } from "react-toastify";

// const Login = () => {
// const {LoginUser}=useContext(AuthContext)
//     const navigate = useNavigate()
//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const email = e.target.email.value;
//     const password = e.target.password.value;

//       LoginUser(email, password)
//             .then((result) => {
//                 const loggedUser = result.user;
//                 console.log("Logged in user:", loggedUser);

//                 toast.success("Login successful!");
//                 navigate("/"); 
//             })
//             .catch((error) => {
//                 console.error(error.message);
//                 toast.error("Login failed: " + error.message);
//             });
//   };

//   return (
//     <div className="min-h-screen flex justify-center items-center bg-gray-100 p-6">
//       <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold text-center text-primary mb-6">Login</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="email"
//             name="email"
//             required
//             placeholder="Email"
//             className="input input-bordered w-full"
//           />
//           <input
//             type="password"
//             name="password"
//             required
//             placeholder="Password"
//             className="input input-bordered w-full"
//           />
//           <button type="submit" className="btn btn-primary w-full">
//             Login
//           </button>
//         </form>
//         <SocialLogin></SocialLogin>

//         <p className="text-sm text-center mt-4">
//           Don't have an account?{" "}
//           <Link to="/register" className="text-primary font-semibold">
//             Register
//           </Link>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;




import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import SocialLogin from "../Components/SocialLogin";
import { AuthContext } from "../Provider/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const { LoginUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    LoginUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log("Logged in user:", loggedUser);

        toast.success("Login successful!");
        navigate("/");
      })
      .catch((error) => {
        console.error(error.message);
        toast.error("Login failed: " + error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transform hover:scale-[1.005] transition-transform duration-300 ease-in-out">
        <h2 className="text-3xl font-extrabold text-center text-gray-800 mb-8 tracking-tight">
          Welcome Back!
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="email"
            name="email"
            required
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out"
          />
          <input
            type="password"
            name="password"
            required
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg placeholder-gray-400 text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300 ease-in-out"
          />
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
          >
            Login to your account
          </button>
        </form>
        <div className="mt-6">
          <SocialLogin />
        </div>
        <p className="text-sm text-center mt-6 text-gray-600">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-indigo-600 font-semibold hover:underline hover:text-indigo-700 transition-colors duration-300"
          >
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;