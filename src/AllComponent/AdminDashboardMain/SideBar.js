import React from 'react'
import {Link} from 'react-router-dom';
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
                <Link to="/" >
                    <div>
                      <p className='hoverrr'><DashboardIcon className='icon'/>DashBoard</p>
                      </div>
                </Link>
                <Link to="/AllCourses">
                  <p className='hoverrr'> <MenuBookIcon className='icon'/>Courses</p> 
                </Link>
                <Link to="">
                   <p className='hoverrr'> <AssignmentIcon className='icon'/>Test Portal</p>
                </Link>
                <Link to="/AboutUs">
                    <p className='hoverrr'><ForumIcon className='icon'/>Chats</p>
                </Link>
                <Link to="/Analytics">
                <p className='hoverrr'> <SignalCellularAltIcon  className='icon'/>Analytics</p>
                </Link>
                <Link to="/User">
                <p className='hoverrr'> <PersonIcon className='icon'/> People</p>
                </Link>
                <Link to="/PrivacyPolicy">
        <p className='hoverrr'>  <PersonIcon className='icon'/>Push Notification</p>
                </Link>
        </div>
        
       
        </div>
    </aside>
  )
}

export default SideBar