import React from 'react'
import CourseHeader from '../../Courses/CoursesHeader'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchBar from '../../../Util/SearchBar';



function TestPortal() {
  return (
    <div className='main-container'>
        <div className='m20'>
            <CourseHeader Heading={"Test Portal"} subHeading={"Only published tests are shown here"}/>
            <div className='TestPortalSearchBarSection'>
            <div className='searchnfilter'>
           
          <SearchBar />
           
            <button className='filterButton'> <FilterAltIcon/> Filter</button>
        </div>
            <button className='addTestButton'> + Add Test </button>
             </div>


        <table className='TestPortalcompleteTable'>
            <tr className='tableHeading'>
                <th>
                    Tests
                </th>
                <th>
                    Date
                </th>
                <th>
                    Actions
                </th>
            </tr>
            <hr className='TestPortalhrLine'/>

    
            <tr>
                <td><p>Module 9 Neuromonitoring</p></td>
                <td><p>19/Dec/2023</p></td>
                {/* <button onClick={(e)=>actionsOptions(e)}> <td><MoreVertIcon/></td> </button>  */}
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p>Module 7 Resuscitation & initial management of Critically</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p>Module 6-Trauma, Toxicology, Pregnancy, Endocrine-Mock Test</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p>Module 5-Gastroeneterology</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p>Module 4-Infection & Antimicrobials</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td className='lastData'><span><p>TRICS 1 FREE MOCK TEST FOR EDIC-1</p></span>
                    <span><button className='freeTestButton'>FREE TEST</button></span>
                </td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            </table>
      
    </div>
    </div>
  )
}

export default TestPortal
