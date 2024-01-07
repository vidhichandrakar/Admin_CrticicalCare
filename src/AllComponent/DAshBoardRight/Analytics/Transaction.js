import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CourseHeader from '../../Courses/CoursesHeader';


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
function Transaction() {
  return (
    <div className='main-container'>
    <div className=' m20'>
        <CourseHeader/>

        <div className='searchnfilter'>
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

       <div className='transactionCards'> 
        <div className='boxNoOne'>
            <span className='boxValue'>Transactions</span>
            <span className='boxNumber'>2</span>
        </div>
        <div className='boxNoTwo'>
            <span className='boxValue'>Transactions Amount</span>
            <span className='boxNumber'>₹2</span>
        </div>
        <div className='boxNoThree'>
            <span className='boxValue'>Avg Order Value</span>
            <span className='boxNumber'>₹1</span>
        </div>
        </div>

        <table className='transactionCompleteTable'>
            <tr className='transactionTableHeading'>
                <th>
                    Student Name
                </th>
                <th className='courseName'>
                    Course Name
                </th>
                <th>
                    Transaction Date
                </th>
                <th>
                    Transaction Amount
                </th>
            </tr>
            <hr className='hrLine'/>

    
            <tr>
                <td><h4>Pranab Raj</h4> <h4 className='greyboldnumbers'>+918889844180</h4></td>
                <td><p className='firstCourseName'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p></td>
                <td><p className='transactionDate'>19/Dec/2023</p></td>
                <td className='transactionAmount'> ₹1.00</td> 
            </tr>
            <tr>
                <td><h4>Sania Khan</h4> <h4 className='greyboldnumbers'>+918889844180</h4></td>
                <td><p className='firstCourseName'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p></td>
                <td><p className='transactionDate'>19/Dec/2023</p></td>
                <td className='transactionAmount'> ₹1.00</td> 
            </tr>
        </table>
      
    </div>
    </div>

  )
}

export default Transaction
