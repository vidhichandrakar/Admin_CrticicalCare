import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';


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
        <span className='userHead'>
            <h3>Transaction Dashboard</h3>
        </span>
        <span><button className='rightDropDown'>360 Critical Care</button></span>

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
            <button> <FilterAltIcon/> Filter</button>
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

        <table className='completeTable'>
            <tr className='transactionTableHeading'>
                <th>
                    Student Name
                </th>
                <th>
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
                <td><p className='bluePara'>Pranab Raj</p> <p>+918889844180</p></td>
                <td><p>TRICS 1 FREE MOCK TEST FOR EDIC-1</p></td>
                <td><p>19/Dec/2023</p></td>
                <td> ₹1.00</td> 
            </tr>
            <tr>
                <td><p className='bluePara'>Sania Khan</p> <p>+918889844180</p></td>
                <td><p>TRICS 1 FREE MOCK TEST FOR EDIC-1</p></td>
                <td><p>19/Dec/2023</p></td>
                <td> ₹1.00</td> 
            </tr>
        </table>
      
    </div>
    </div>

  )
}

export default Transaction
