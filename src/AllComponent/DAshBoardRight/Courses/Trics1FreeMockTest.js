import React from 'react'
import { Select,Box, Typography, TextField, Button } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import UnpublishedIcon from '@mui/icons-material/Unpublished';
import FolderIcon from '@mui/icons-material/Folder';


function Trics1FreeMockTest() {
  return (
    <div className='main-container'>
      <div className='another-main-container'>
        <div>
            <h3>TRICS 1 FREE MOCK TEST FOR EDIC-1</h3>
        </div>


<div className='completeTricsBox'>
    <span className='leftSideRow'>
       <p className='blackPara'>Course Name</p>
       <p className='greyPara'>TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
       <hr/>

       <p className='blackPara'>Description</p>
       <p className='greyPara'>This course section consist of one free mock exam & several free videos of 360 critical care.</p>
       <hr/>

    <div className='PricenOfferPrice'>
       <span><p className='blackPara'>Price</p>
       <p className='greyPara'> ₹ 1000/-</p></span>
       <span className='offerPrice'><p className='blackPara'>Offer Price</p>
       <p className='greyPara'>₹ 499/-</p></span>
       </div>
       {/* <Typography fontWeight={600} className="editFirstText">Duration</Typography>
          <TextField
          sx={{width:240,marginTop:"4% !important"}}
        inputProps={{ className: "textField" }}
        fullWidth
        size="small"
        placeholder="1"
        id="fullWidth"
        className="BoxShadow"
        // onChange={(event) => handleTextChange("emailId", event.target.value)}
      />
      <Typography fontWeight={600} className="editFirstText">Years / Months / Days</Typography>
          <FormControl
            sx={{ m: 1, minWidth: 240}} 
          >
            <Select
              displayEmpty
              size="small"
              renderValue={() => {
                return <em className="categorytext">Year(s)</em>;
              }}
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={""}>
                <em>360 Critcial Care</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}
       <hr/>

    <div className='CatagorynSubCatagory'>
       <span><p className='blackPara'>Catagory</p>
       <p className='greyPara'>OTHERS</p></span>
       <span className='subCatagory'><p className='blackPara'>Sub Catagory</p></span>
       </div>
       <hr/>

       <p className='blackPara'>Course Duration</p>
       <p className='greyPara'>1 year</p>
       <hr/>

<div className='StuEnrViewAll'>
      <span> <p className='blackPara'>Student Enrolled</p></span>
      <span className='blueViewAll'>View All</span>
      </div>
      <p className='greyPara'>44</p>
    </span>
    


    <span className='rightSideRow'>
        {/* <img src={db7187e8-b7cf-47ed-8900-6de89dabde06.png}/> */}
    </span>
</div>

<div className='sideContentRightMost'>
<Box className="marginscndBox">
          {/* <Typography fontWeight={600} className="editFirstText">360 Critical Care</Typography> */}
          <FormControl
            sx={{ m: 1, minWidth: 240}} 
          >
            <Select
              displayEmpty
              size="small"
              renderValue={() => {
                return <em className="categorytext">360 Critical Care</em>;
              }}
              inputProps={{ "aria-label": "Without label" }}
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

        <div className='whiteBoxOfContent'>
          <div className="contentOneContent">
            <span><FolderIcon className='folderIcon'/></span>
            <span><p className='blackPara'>Content</p>
            <p className='greyPara'>1 Content</p></span>
          </div>

          <Box className="marginscndBoxofTrics">
          {/* <Typography fontWeight={600} className="editFirstText">360 Critical Care</Typography> */}
          <FormControl
            sx={{ m: 1, minWidth: 240}} 
          >
            <Select
              displayEmpty
              size="small"
              renderValue={() => {
                return <em className="categorytextofTrics"> More Options</em>;
              }}
              inputProps={{ "aria-label": "Without label" }}
              startAdornment={<MoreHorizIcon/>}
              endAdornment={null}
              
            >
              <MenuItem value={10} className='greyPara'> <EditIcon/>Edit</MenuItem>
              <MenuItem value={20} className='greyPara'> <DeleteIcon/>Delete</MenuItem>
              <MenuItem value={30} className='greyPara'> <UnpublishedIcon/>Unpublish</MenuItem>
            </Select>
          </FormControl>
        </Box>

        </div>
</div>

      </div>
    </div>
  )
}

export default Trics1FreeMockTest
