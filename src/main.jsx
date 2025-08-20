import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Register from './Pages/Register';
import AuthProvider from './Provider/AuthProvider';
import { ToastContainer } from 'react-toastify';
import CreateEvent from './Pages/CreateEvent';
import UpcomingEvents from './Pages/UpcomingEvents';
import Private from './Private/Private';
import ManageEvents from './Pages/Manage';
import EventDetails from './Pages/EventDetails';
import UpdateEvent from './Pages/UpdateEvent';
import MyJoinedEvents from './Pages/MyJoinedEvents';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/create-event',
        element: <Private><CreateEvent></CreateEvent></Private>
      },
      {
        path: '/manage-events',
        element: <Private><ManageEvents></ManageEvents></Private>
      },
      {
        path: '/event/:id',
        loader:({params})=>fetch(`http://localhost:5000/api/events/${params.id}`),
        element: <Private><EventDetails></EventDetails></Private>
      },
      {
        path: '/update-event/:id',
        loader:({params})=>fetch(`https://server-11-helpy.vercel.app/api/event/${params.id}`),
        element: <Private><UpdateEvent></UpdateEvent></Private>
      },
      {
        path: '/upcoming-events',
        element: <UpcomingEvents></UpcomingEvents>
      },
      {
        path: '/joined-events',
        element: <Private><MyJoinedEvents></MyJoinedEvents></Private>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
          <AuthProvider>
      <RouterProvider router={router} />
      <ToastContainer />
    </AuthProvider>
    </QueryClientProvider>

  </StrictMode>,
)
