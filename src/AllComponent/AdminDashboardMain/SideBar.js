import React from 'react'
import Logo from "../../Media/Logo.png"
import MenuBookIcon from '@mui/icons-material/MenuBook';
import ForumIcon from '@mui/icons-material/Forum';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssignmentIcon from '@mui/icons-material/Assignment';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import PersonIcon from '@mui/icons-material/Person';

function SideBar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": "" } >
        
        <div className='Sider-Box'>
            <div className='sidebar-title'>
            <div className='sidebar-brand'>
            <img src={Logo} className="SideBarLogo"/>
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <div className='sidebar-list sidebar-list-item BottomLine'>
                <a href="/AllCourses" >
                    <div>
                      <p className='hoverrr'><DashboardIcon className='icon'/>DashBoard</p>
                      </div>
                </a>
                <a href="/AllCourses">
                  <p className='hoverrr'> <MenuBookIcon className='icon'/>Courses</p> 
                </a>
                <a href="">
                   <p className='hoverrr'> <AssignmentIcon className='icon'/>Test Portal</p>
                </a>
                <a href="/AboutUs">
                    <p className='hoverrr'><ForumIcon className='icon'/>Chats</p>
                </a>
                <a href="/ContactUs">
                <p className='hoverrr'> <SignalCellularAltIcon  className='icon'/>Analytics</p>
                </a>
                <a href="/PrivacyPolicy">
                <p className='hoverrr'> <PersonIcon className='icon'/> People</p>
                </a>
                <a href="/PrivacyPolicy">
        <p className='hoverrr'>  <PersonIcon className='icon'/>Push Notification</p>
                </a>
        </div>
        
        {/* <ul className='sidebar-list'>
            <li className='sidebar-list-item BottomLine'>
                <a href="/AllCourses">
                    <DashboardIcon className='icon'/>DashBoard
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="/AllCourses">
                    <MenuBookIcon className='icon'/>Courses
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="">
                    <AssignmentIcon className='icon'/>Test Portal
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="/AboutUs">
                    <ForumIcon className='icon'/>Chats
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="/ContactUs">
                    <SignalCellularAltIcon  className='icon'/>Analytics
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="/PrivacyPolicy">
                    <PersonIcon className='icon'/> People
                </a>
            </li>
            <li className='sidebar-list-item BottomLine'>
                <a href="/PrivacyPolicy">
                    <PersonIcon className='icon'/>Push Notification
                </a>
            </li>
          
        </ul> */}
        </div>
    </aside>
  )
}

export default SideBar