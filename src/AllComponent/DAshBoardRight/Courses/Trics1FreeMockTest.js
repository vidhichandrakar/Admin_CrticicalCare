import React from "react";
import { Select, Box, Typography, TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UnpublishedIcon from "@mui/icons-material/Unpublished";
import FolderIcon from "@mui/icons-material/Folder";
import Popover from "@mui/material/Popover";
import DoctorsImage from "../../../Media/Images/db7187e8-b7cf-47ed-8900-6de89dabde06.png";


function Trics1FreeMockTest() {
  const [anchorEl, setAnchorEl] = React.useState(null);

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
      <div className="another-main-container">
        <div>
          <h3>TRICS 1 FREE MOCK TEST FOR EDIC-1</h3>
        </div>

        <div className="completeTricsBox">
          <span className="leftSideRow">
            <p className="blackPara">Course Name</p>
            <p className="greyPara">TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
            <hr />

            <p className="blackPara">Description</p>
            <p className="greyPara">
              This course section consist of one free mock exam & several free
              videos of 360 critical care.
            </p>
            <hr />

            <div className="PricenOfferPrice">
              <span>
                <p className="blackPara">Price</p>
                <p className="greyPara"> ₹ 1000/-</p>
              </span>
              <span className="offerPrice">
                <p className="blackPara">Offer Price</p>
                <p className="greyPara">₹ 499/-</p>
              </span>
            </div>
            <hr />

            <div className="CatagorynSubCatagory">
              <span>
                <p className="blackPara">Catagory</p>
                <p className="greyPara">OTHERS</p>
              </span>
              <span className="subCatagory">
                <p className="blackPara">Sub Catagory</p>
              </span>
            </div>
            <hr />

            <p className="blackPara">Course Duration</p>
            <p className="greyPara">1 year</p>
            <hr />

            <div className="StuEnrViewAll">
              <span>
                {" "}
                <p className="blackPara">Student Enrolled</p>
              </span>
              <span className="blueViewAll">View All</span>
            </div>
            <p className="greyPara">44</p>
          </span>

          <span>
            <img src={DoctorsImage} className="rightSideRow" />
          </span>
        </div>

        <div className="sideContentRightMost">
          <Box className="HeaderRightofTrics">
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

          <div className="whiteBoxOfContent">
            <div className="contentOneContent">
              <span>
                <FolderIcon className="folderIcon" />
              </span>
              <span>
                <p className="blackPara">Content</p>
                <p className="greyPara">1 Content</p>
              </span>
            </div>

            <Button
              aria-describedby={id}
              variant="contained"
              onClick={handleClick}
              className="catagorytextofTrics"
            >
              <MoreHorizIcon />
              <p>More Options </p>
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
              <MenuItem value={10} className="greyPara">
                {" "}
                <EditIcon />
                Edit
              </MenuItem>
              <MenuItem value={20} className="greyPara">
                {" "}
                <DeleteIcon />
                Delete
              </MenuItem>
              <MenuItem value={30} className="greyPara">
                {" "}
                <UnpublishedIcon />
                Unpublish
              </MenuItem>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trics1FreeMockTest;
