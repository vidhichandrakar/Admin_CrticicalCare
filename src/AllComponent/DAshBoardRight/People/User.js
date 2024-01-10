import React, { useState } from "react";
// import Search from '@mui/material/Search';
// import SearchIconWrapper from '@mui/material/SaerchIconWrapper';
// import SearchIcon from '@mui/icons-material/Search';
// import StyledInputBase from '@mui/material/StyledInputBase';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import BlockIcon from "@mui/icons-material/Block";
import { Box, Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import { MockDataForTable } from "../../../Data/mockDataForTable";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import SearchBar from "../../../Util/SearchBar";


function User() {
  const columns = [
    { id: "User_Info", label: "User Info", minWidth: 170 },
    { id: "Full_Name", label: "Full Name", minWidth: 100 },
    {
      id: "Date_of_Registration",
      label: "Date of registration",
      minWidth: 170,
      // align: 'right',
      // format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: "Actions",
      label: "Actions",
      minWidth: 170,
      align: "center",
      // format: (value) => value.toLocaleString('en-US'),
    },
  ];

  function createData(User_Info, Full_Name, Date_of_Registration, Actions) {
    // const density = population / size;
    
    return { User_Info, Full_Name, Date_of_Registration, Actions };
  }

  const rows = [
    createData(
      {name:"sheikhshoeb194@gmail.com",phone:"7589576"},
      "Sheikh Shoeb",
      "19/Dec/2023",
      <MoreVertIcon />
    ),
    createData(
      {name:"sheikhshoeb194@gmail.com",phone:"7589576"},
      "Jitendra Chandrakar",
      "19/Dec/2023",
      <MoreVertIcon />
    ),
    createData(
      {name:"sheikhshoeb194@gmail.com",phone:"7589576"},
      "Pranab Raj",
      "19/Dec/2023",
      <MoreVertIcon />
    ),
    createData(
      {name:"sheikhshoeb194@gmail.com",phone:"7589576"},
      "Sania Khan",
      "19/Dec/2023",
      <MoreVertIcon />
    ),
    createData(
      {name:"sheikhshoeb194@gmail.com",phone:"7589576"},
      "Rahul Amin",
      "19/Dec/2023",
      <MoreVertIcon />
    ),
    createData({name:"sheikhshoeb194@gmail.com",phone:"7589576"}, "Menka", "19/Dec/2023", <MoreVertIcon />),
    createData({name:"sheikhshoeb194@gmail.com",phone:"7589576"}, "Ramesh", "19/Dec/2023", <MoreVertIcon />),
    createData(
      {name:"sheikhshoeb194@gmail.com",phone:"7589576"},
      "Rakesh Pal",
      "19/Dec/2023",
      <MoreVertIcon />
    ),
    createData(
      "ashutosh.a@gmail.com",
      "Ashutosh",
      "19/Dec/2023",
      <MoreVertIcon />
    ),
    createData(
      "pixelinsource@gmail.com",
      "Pixel Insource",
      "19/Dec/2023",
      <MoreVertIcon />
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

  return (
    <div className=" m20">
      <span className="userHead">
        <h3>Users (357)</h3>
        <p>View, Filter & Manage all your users</p>
      </span>
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

      <div className="searchnfilter">
    
        <SearchBar/>
        <button className="filterButton">
          <FilterAltIcon className="filterIcon" /> Filter
        </button>
      </div>
     
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
                        console.log(row,Object.keys(row),column.id)
                        return (
                         column.id==="User_Info"? <TableCell key={column.id} align={column.align}>
                           <Typography>{column.format && typeof value === "number"
                              ? column.format(value.name)
                              : value.name} </Typography> 
                            <Typography>  {
                                column.format && typeof value === "number"
                              ? column.format(value.phone)
                              : value.phone
                              }</Typography> 
                          </TableCell>: <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default User;
