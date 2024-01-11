import React, { useState, Fragment } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import CourseHeader from "../../Courses/CoursesHeader";
// import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import BlockIcon from '@mui/icons-material/Block';
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchBar from "../../../Util/SearchBar";
import Popover from "@mui/material/Popover";
import CourseHeader from "../../Courses/CoursesHeader";

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
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const actionsOptions = (e) => {
  //   setAction(true);
  // };

  // const handleClick = (event) => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  // const open = Boolean(anchorEl);
  // const id = open ? "simple-popover" : undefined;



  const columns = [
    {
      id: "User_Info",
      label: "User Info",
      // minWidth: 170
    },
    {
      id: "Full_Name",
      label: "Full Name",
      align: "center",
    },
    {
      id: "Access_Level",
      label: "Access Level",
      align: "center",
    },
    {
      id: "Actions",
      label: "Actions",
      align: "center",
    },
  ];

  function createData(User_Info, Full_Name, Access_Level, Actions) {

    return { User_Info, Full_Name, Access_Level, Actions };
  }

  const rows = [
    createData(
      { name: "sheikhshoeb194@gmail.com", phone: "7589576" },
      "Sheikh Shoeb",
      "Super Admin",
      <MoreVertIcon
        onClick={(event) =>
          handleClick(event, "id1", {
            User_Info: { name: "sheikhshoeb194@gmail.com", phone: "7589576" },
            full_name: "Sheikh Shoeb",
            date: "12/10/23",
          })
        }
      />
    ),
    createData(
      { name: "jitendra.chandrakar@gmail.com", phone: "7589576" },
      "Jitendra Chandrakar",
      "Admin",
      <MoreVertIcon
        onClick={(event) =>
          handleClick(event, "id2", {
            User_Info: { name: "sheikhshoeb194@gmail.com", phone: "7589576" },
            full_name: "Jitendra Chandrakar",
            date: "12/10/23",
          })
        }
      />
    ),
    createData(
      { name: "pranab.raj@gmail.com", phone: "7589576" },
      "Pranab Raj",
      "Admin",
      <MoreVertIcon
        onClick={(event) =>
          handleClick(event, "id2", {
            User_Info: { name: "sheikhshoeb194@gmail.com", phone: "7589576" },
            full_name: "Pranab Raj",
            date: "12/10/23",
          })
        }
      />
    ),
    createData(
      { name: "saniakhan@gmail.com", phone: "7589576" },
      "Sania Khan",
      "Admin",
      <MoreVertIcon
        onClick={(event) =>
          handleClick(event, "id2", {
            User_Info: { name: "sheikhshoeb194@gmail.com", phone: "7589576" },
            full_name: "Sania Khan",
            date: "12/10/23",
          })
        }
      />
    ),
    createData(
      { name: "rahulamin@gmail.com", phone: "7589576" },
      "Rahul Amin",
      "Admin",
      <MoreVertIcon
        onClick={(event) =>
          handleClick(event, "id2", {
            User_Info: { name: "sheikhshoeb194@gmail.com", phone: "7589576" },
            full_name: "Rahul Amin",
            date: "12/10/23",
          })
        }
      />
    ),
  ];

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [openId, setOpenId] = React.useState(0);
  const [openData, setOpenData] = React.useState("");
  const handleClick = (event, id, data) => {
    setAnchorEl(event.currentTarget);
    setOpenId(id);
    setOpenData(data);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="main-container">
      <div className=" m20">
        <CourseHeader Heading={"My Team (5)"} subHeading={"View, Filter & Manage all your users"} />


        <div className="searchnfilter">
        <SearchBar/>
          <button>
            {" "}
            <FilterAltIcon /> Filter
          </button>
        </div>

        {/* <table className="myTeamCompleteTable">
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
              <p className="searchIconLogo">+918889844180</p>
            </td>
            <td>
              <p>Sheikh Shoeb</p>
            </td>
            <td>
              <p>Super Admin</p>
            </td>
            {/* <button onClick={(e)=>actionsOptions(e)}> <td><MoreVertIcon/></td> </button>  */}
            {/* <div className="moreVertIcon">
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
              <p className="searchIconLogo">+911234567890</p>
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
              <p className="searchIconLogo">+917583808083</p>
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
              <p className="searchIconLogo">+918889844180</p>
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
              <p className="searchIconLogo">+918889844180</p>
            </td>
            <td>
              <p>Ruhul Amin</p>
            </td>
            <td>
              <p>Admin</p>
            </td>
            <td><MoreVertIcon/></td>
          </tr>
        </table> */} 
        


        <Paper
        sx={{ width: "100%", overflow: "hidden" }}
        className="completeTable"
      >
        <TableContainer sx={{ maxHeight: 540 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody className="parentTable">
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        console.log(row, Object.keys(row), column.id);
                        return (
                          <Fragment>
                            {column.id === "User_Info" ? (
                              <TableCell key={column.id} align={column.align}>
                                <Typography className="bluePara">
                                 {value.name}
                                </Typography>
                                <Typography className="phNumber">
                                 
                                 { value.phone}
                                </Typography>
                              </TableCell>
                            ) : (
                              <TableCell key={column.id} align={column.align}>
                              { value}
                              </TableCell>
                            )}
                          </Fragment>
                        );
                      })}
                    </TableRow>
                  );
                })}
              <Popover
                id={openId}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
              >
                <Typography sx={{ p: 1 }}>{openData.full_name}</Typography>
                <Typography sx={{ p: 1 }}>Edit </Typography>
                <Typography sx={{ p: 1 }}>Delete</Typography>
              </Popover>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      </div>
    </div>
  );
}

export default MyTeam;
