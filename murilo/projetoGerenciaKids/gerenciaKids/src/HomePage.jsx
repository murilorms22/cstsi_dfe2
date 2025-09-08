import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './HomePage.css'
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Dashboard from './components/Dashboard/Dashboard.jsx'

function HomePage() {
  return (
    <>
    <body>

    <Sidebar />
    <Dashboard />
    
    </body>
    </>
  )
}

export default HomePage;