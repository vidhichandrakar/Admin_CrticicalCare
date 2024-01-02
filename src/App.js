import { useState } from 'react'
import "./AllComponent/CSSFile/DashBoard.css"
// import Header from './AllCOmponents/Header'
import Sidebar from './AllComponent/AdminDashboardMain/SideBar'
import Home from './AllComponent/AdminDashboardMain/Main'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      {/* <Header OpenSidebar={OpenSidebar}/> */}
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Home />
    </div>
  )
}

export default App