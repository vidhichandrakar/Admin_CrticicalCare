import { useState } from 'react'
import "./AllComponent/CSSFile/DashBoard.css"
import Sidebar from './AllComponent/AdminDashboardMain/SideBar'
import Home from './AllComponent/AdminDashboardMain/Main'
import LoginPage from './AllComponent/LoginFiles/LoginPage'
import RouterMain from './AllComponent/RouterMainFile/RouterMain'
import Dashboard from './AllComponent/DAshBoardRight/Dashboard/Dashboard'

function App() {

  return (
<<<<<<< HEAD
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    // <>
    //   <LoginPage />
    // </>
=======
    <>
       <RouterMain />
       {/* <Dashboard /> */}
    </>
>>>>>>> 599c393c10bfafe90897f36c831e7459335607f8
  )
}

export default App