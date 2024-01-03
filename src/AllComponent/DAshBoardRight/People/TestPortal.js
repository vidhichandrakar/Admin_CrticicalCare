import React from 'react'
import CourseHeader from '../../Courses/CoursesHeader'
import SearchIcon from '@mui/icons-material/Search';
// import StyledInputBase from '@mui/material/StyledInputBase';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';


const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    width: '100%',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
        '&:focus': {
          width: '20ch',
        },
      },
    },
  }));
function TestPortal() {
  return (
    <div className='main-container'>
        <div className='m20'>
            <CourseHeader/>
            <div className='TestPortalSearchBarSection'>
            <div className='searchnfilter'>
            <div>
            {/* <img src="https://assets.stickpng.com/images/585e4ae1cb11b227491c3393.png"/> */}
            <Search className='searchBar'>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase className='w100'
              placeholder="Search by name"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
           </div>
            <button className='filterButton'> <FilterAltIcon/> Filter</button>
        </div>
            <button className='addTestButton'> + Add Test </button>
            {/* <Button variant="contained" size="small" className='addTestButton'> + Add Test </Button> */}
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
