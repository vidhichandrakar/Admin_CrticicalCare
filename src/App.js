// import { useState } from 'react'
// import "./AllComponent/CSSFile/DashBoard.css"
// import Sidebar from './AllComponent/AdminDashboardMain/SideBar'
// import Home from './AllComponent/AdminDashboardMain/Main'
// import SideBar from './AllComponent/AdminDashboardMain/SideBarNew'

// function App() {
//   const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

//   const OpenSidebar = () => {
//     setOpenSidebarToggle(!openSidebarToggle)
//   }

//   return (
//     <div className='grid-container'>
//       {/* <Header OpenSidebar={OpenSidebar}/> */}
//       {/* <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/> */}
//       <SideBar />
//       <Home />
//     </div>
//   )
// }

// export default App

import Sidebar from './AllComponent/AdminDashboardMain/SideBarNew'
import "./AllComponent/CSSFile/DashBoard.css"
function App() {
  return (
    <div className="main">
      <Sidebar />
      <div className="container">
        <h1 className="title">My React App</h1>
        <p className="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        <button className="btn">Explore now</button>
      </div>
    </div>
  )
}

export default App