import { useState } from 'react'
import "./AllComponent/CSSFile/DashBoard.css"
import Sidebar from './AllComponent/AdminDashboardMain/SideBar'
import Home from './AllComponent/AdminDashboardMain/Main'
import LoginPage from './AllComponent/LoginFiles/LoginPage'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
    // <>
    //   <LoginPage />
    // </>
  )
}

export default App