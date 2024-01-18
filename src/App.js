import { useState } from 'react'
import "./AllComponent/CSSFile/DashBoard.css"
import Sidebar from './AllComponent/AdminDashboardMain/SideBar'
import Home from './AllComponent/AdminDashboardMain/Main'
import LoginPage from './AllComponent/LoginFiles/LoginPage'
import RouterMain from './AllComponent/RouterMainFile/RouterMain'

function App() {

  return (
    <div className='grid-container'>
      <Sidebar />
      <Home />
    </div>
    // <>
    //    <RouterMain />
    // </>
  )
}

export default App