import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CourseHeader from "../../Courses/CoursesHeader";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
// import FilterAltIcon from '@mui/icons-material/FilterAlt';
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';

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
    width: "auto",
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

function MyTeam() {
  const [action, setAction] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const actionsOptions = (e) => {
    setAction(true);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="main-container">
      <div className=" m20">
        <CourseHeader />

        <div className="searchnfilter">
          <div>
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
          </div>
          <button>
            {" "}
            <FilterAltIcon /> Filter
          </button>
        </div>

        <table className="myTeamCompleteTable">
          <tr className="transactionTableHeading">
            <th>User Info</th>
            <th>Full Name</th>
            <th>Access Level</th>
            <th>Actions</th>
          </tr>
          <hr className="myTeamhrLine" />

          <tr>
            <td>
              <p className="bluePara">Sheikhshoeb194@gmail.com</p>{" "}
              <p>+918889844180</p>
            </td>
            <td>
              <p>Sheikh Shoeb</p>
            </td>
            <td>
              <p>Super Admin</p>
            </td>
            {/* <button onClick={(e)=>actionsOptions(e)}> <td><MoreVertIcon/></td> </button>  */}
            <div className="moreVertIcon">
              <Button
                aria-describedby={id}
                variant="contained"
                onClick={handleClick}
              >
                <MoreVertIcon/>
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }} className="redDelete">
                  <DeleteIcon/> Delete
                </Typography>
                <Typography sx={{ p: 2 }} className="blueBlockUser">
                  <BlockIcon/> Block User
                </Typography>
              </Popover>
            </div>
          </tr>

          <tr>
            <td>
              <p className="bluePara">jitendra.chandrakar@gmail.com</p>{" "}
              <p>+911234567890</p>
            </td>
            <td>
              <p>Jitendra Chandrakar</p>
            </td>
            <td>
              <p>Admin</p>
            </td>
           <td><MoreVertIcon/></td>
          </tr>

          <tr>
            <td>
              <p className="bluePara">pranab.raj@gmail.com</p>{" "}
              <p>+917583808083</p>
            </td>
            <td>
              <p>Pranab Raj</p>
            </td>
            <td>
              <p>Admin</p>
            </td>
            <td><MoreVertIcon/></td>
          </tr>

          <tr>
            <td>
              <p className="bluePara">saniakhan@gmail.com</p>{" "}
              <p>+918889844180</p>
            </td>
            <td>
              <p>Sania Khan</p>
            </td>
            <td>
              <p>Admin</p>
            </td>
            <td><MoreVertIcon/></td>
          </tr>

          <tr>
            <td>
              <p className="bluePara">ruhulamin@gmail.com</p>{" "}
              <p>+918889844180</p>
            </td>
            <td>
              <p>Ruhul Amin</p>
            </td>
            <td>
              <p>Admin</p>
            </td>
            <td><MoreVertIcon/></td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyTeam;
