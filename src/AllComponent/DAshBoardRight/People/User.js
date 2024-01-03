import React, {useState} from 'react'
// import Search from '@mui/material/Search';
// import SearchIconWrapper from '@mui/material/SaerchIconWrapper';
import SearchIcon from '@mui/icons-material/Search';
// import StyledInputBase from '@mui/material/StyledInputBase';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import MoreVertIcon from '@mui/icons-material/MoreVert';
// import SearchIcon from '@mui/icons-material/Search';


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
function User() {

    const [action, setAction] = useState(false);
    const actionsOptions=(e)=>{
          setAction(true)
    }
  return (
    <div className='main-container'>
    <div className=' m20'>
        <span className='userHead'>
            <h3>Users (357)</h3>
            <p>View, Filter & Manage all your users</p>
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

        <table className='completeTable'>
            <tr className='tableHeading'>
                <th>
                    User Info
                </th>
                <th>
                    Full Name
                </th>
                <th>
                    Date of Registration
                </th>
                <th>
                    Actions
                </th>
            </tr>
            <hr className='hrLine'/>

    
            <tr>
                <td><p className='bluePara'>Sheikhshoeb194@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Sheikh Shoeb</p></td>
                <td><p>19/Dec/2023</p></td>
                <button onClick={(e)=>actionsOptions(e)}> <td><MoreVertIcon/></td> </button> 
            </tr>
            <tr>
                <td><p className='bluePara'>jitendra.chandrakar@gmail.com</p> <p>+911234567890</p></td>
                <td><p>Jitendra Chandrakar</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>pranab.raj@gmail.com</p> <p>+917583808083</p></td>
                <td><p>Pranab Raj</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>saniakhan@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Sania Khan</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>ruhulamin@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Ruhul Amin</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>menka@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Menka</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>ramesh@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Ramesh</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>rakeshpal825@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Rakesh Pal</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>ashutosh.a@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Ashutosh</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><p className='bluePara'>pixelinsource@gmail.com</p> <p>+918889844180</p></td>
                <td><p>Pixel Insource</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
        </table>
      
    </div>
    </div>

  )
}

export default User
