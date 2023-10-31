import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import NavBar from "./navbar.jsx"; 
import Track from './Track.jsx'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <NavBar />
    <App />
  </React.StrictMode>,
)

ReactDOM.createRoot(document.getElementById('trackAI')).render(
  <React.StrictMode>
      <NavBar />
      <Track />
  </React.StrictMode>,
)
