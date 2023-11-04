
//http://localhost:5173/
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from "./navbar.jsx"
import Track from "./tracks.jsx"


import './index.css'

import {
  createBrowserRouter, 
  RouterProvider,
  Route,
  } from "react-router-dom";
//bla
const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <div>
        <NavBar />
      </div>
    ),
  },
  {
    path: '/home',
    element: (
      <div>
        <NavBar />
        <App />
      </div>
    ),
  },
  {
    path: '/track', 
    element: (
      <div>
        <NavBar />
        <Track/>
      </div>
    ),
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RouterProvider router={router} />
);
