import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Main from './layout/Main.jsx';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Register from './components/Register.jsx';
import AuthProviders from './providers/authProviders.jsx';
import Orders from './components/Orders.jsx';
import PrivateRoutes from './routes/PrivateRoutes.jsx';
import Profile from './components/Profile.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>

  </React.StrictMode>,
)
