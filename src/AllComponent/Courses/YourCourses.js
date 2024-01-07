import React from 'react'
import "../CSSFile/YourCourses.css"
import cardimg from '../../Media/Images/db7187e8-b7cf-47ed-8900-6de89dabde06.png'
import CourseHeader from './CoursesHeader'
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FolderCopyRoundedIcon from '@mui/icons-material/FolderCopyRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import Button from '@mui/material/Button';
import Folder from "../../Media/Images/folder.avif"

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "20%",
    },
  }));
  
  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "20ch",
        "&:focus": {
          width: "20ch",
        },
      },
    },
  }));
  
function YourCourses() {
  return (
    <div className='main-container margin20'> 
      <CourseHeader Heading={"Your Courses (3)"} subHeading={"Add/View courses of your brand"} />
      <Search className="searchBar">
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                className="w100"
                placeholder="Search by name"
                inputProps={{ "aria-label": "search" }}
              />
        </Search>
       
        <div className="Add-main-cards">
        <div className="card">
          <div className='AddCourses'>
            <img src={Folder} className='FolderImg'/>
            <Button variant="contained" className='AddBtn'>
      Add New Courese  <AddRoundedIcon />
    </Button>
          </div>
          </div>
        <div className="card">
            <img src={cardimg} className="cardImage" />
            <div className='CardData'>
                <p className='Headp'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
                <p className='Namep'>Created by: Jitendra</p>
                <p className='Yearp'> 1 year</p>
                <p className='Pricep'>$1</p>
            </div>
          </div>
        <div className="card">
            <img src={cardimg} className="cardImage" />
            <div className='CardData'>
                <p className='Headp'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
                <p className='Namep'>Created by: Jitendra</p>
                <p className='Yearp'> 1 year</p>
                <p className='Pricep'>$1</p>
            </div>
          </div>
        <div className="card">
            <img src={cardimg} className="cardImage" />
            <div className='CardData'>
                <p className='Headp'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
                <p className='Namep'>Created by: Jitendra</p>
                <p className='Yearp'> 1 year</p>
                <p className='Pricep'>$1</p>
            </div>
          </div>
        <div className="card">
            <img src={cardimg} className="cardImage" />
            <div className='CardData'>
                <p className='Headp'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
                <p className='Namep'>Created by: Jitendra</p>
                <p className='Yearp'> 1 year</p>
                <p className='Pricep'>$1</p>
            </div>
          </div>
        
          </div>
    </div>
  )
}

export default YourCourses
