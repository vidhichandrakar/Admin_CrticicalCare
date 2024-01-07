import React, {useState} from 'react'
// import Search from '@mui/material/Search';
// import SearchIconWrapper from '@mui/material/SaerchIconWrapper';
// import SearchIcon from '@mui/icons-material/Search';
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
import { Box, Select } from '@mui/material';
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SearchIcon from '@mui/icons-material/Search';



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
        {/* <span><button className='rightDropDown'>360 Critical Care</button></span> */}
        <Box className="HeaderRightofUser">
            <FormControl sx={{ m: 1, minWidth: 240 }}>
              <Select
                className="selectDesign"
                displayEmpty
                renderValue={() => {
                  return <em className="labelDesign">360 Critcial Care</em>;
                }}
                inputProps={{ "aria-label": "Without label" }}
                startAdornment={
                  <div className="logoDesign">
                    <Typography className="logoText">3CC</Typography>
                  </div>
                }
              >
                <MenuItem value={""}>
                  <em>360 Critcial Care</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </Box>

        <div className='searchnfilter'>
            <div>
            <Search className='searchBar'>
            <SearchIconWrapper>
              <SearchIcon className='searchIconLogo'/>
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
            {/* <div className='hrLine'></div> */}

    
            <tr>
                <td><div className='bluePara'>Sheikhshoeb194@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='sheikh'>Sheikh Shoeb</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>jitendra.chandrakar@gmail.com</div> <div className='phNumber'>+911234567890</div></td>
                <td><p className='jitendra'>Jitendra Chandrakar</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>pranab.raj@gmail.com</div> <div className='phNumber'>+917583808083</div></td>
                <td><p className='pranab'>Pranab Raj</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>saniakhan@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='sania'>Sania Khan</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>ruhulamin@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='rahul'>Ruhul Amin</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>menka@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='menka'>Menka</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>ramesh@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='ramesh'>Ramesh</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>rakeshpal825@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='rakesh'>Rakesh Pal</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>ashutosh.a@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='ashutosh'>Ashutosh</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
            <tr>
                <td><div className='bluePara'>pixelinsource@gmail.com</div> <div className='phNumber'>+918889844180</div></td>
                <td><p className='pixel'>Pixel Insource</p></td>
                <td><p>19/Dec/2023</p></td>
                <td><MoreVertIcon/></td>
            </tr>
        </table>
      
    </div>
    </div>

  )
}

export default User
