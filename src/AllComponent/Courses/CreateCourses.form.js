import { Box, Typography, TextField } from "@mui/material";
import React from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import UploadIcon from "@mui/icons-material/Upload";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});
const CreateForm = ({}) => {
  return (
    <div className="formMain">
      <Typography fontWeight={600}>Name</Typography>
      <TextField
        inputProps={{ className: "textField" }}
        fullWidth
        size="small"
        placeholder="Enter course name"
        id="fullWidth"
        className="BoxShadow"
        // onChange={(event) => handleTextChange("emailId", event.target.value)}
      />
      <Typography fontWeight={600} sx={{ marginTop: "5%" }}>
        Description
      </Typography>
      <TextField
        inputProps={{ className: "textField" }}
        fullWidth
        id="outlined-multiline-static"
        multiline
        rows={4}
        placeholder="Enter course description area"
        className="BoxShadow"
        // onChange={(event) => handleTextChange("emailId", event.target.value)}
      />
      <Typography fontWeight={600} sx={{ marginTop: "5%" }}>
        Add Thumbnail
      </Typography>

      <Box className="thumbnailUpload">
        <Button
          component="label"
          variant="outlined"
          startIcon={<UploadIcon className="iconThumbicon" />}
          className="iconThumb"
        >
          Upload Thumbnail Image
          <VisuallyHiddenInput type="file" />
        </Button>
        <Typography sx={{ marginTop: "3%" }} className="fontRecommend">
          Recommended Image size : <b>800px x 600px, PNG or JPEG file</b>
        </Typography>
      </Box>
      <Box className="divider"></Box>
      <Box sx={{ marginTop: "5%", display: "flex", flexDirection: "row" }}>
        <Box>
          <Typography fontWeight={600}>Category</Typography>
          <FormControl
            sx={{ m: 1, minWidth: 240, marginLeft: "-2%", marginTop: "4%" }}
          >
            {/* <InputLabel id="demo-simple-select-helper-label"  className="labelDesign">
         360 Critcial Care</InputLabel> */}
            <Select
              // label="360 Critcial Care"
              // className="selectDesign"
              // placeholder=" 360 Critcial Care"
              displayEmpty
              size="small"
              renderValue={() => {
                return <em className="categorytext">Select Category</em>;
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
        <Box sx={{ marginLeft: "8%" }}>
          <Typography fontWeight={600}>Sub Category</Typography>
          <FormControl
            sx={{ m: 1, minWidth: 240, marginLeft: "-2%", marginTop: "4%" }}
          >
            <Select
              displayEmpty
              size="small"
              renderValue={() => {
                return <em className="categorytext">Select Category</em>;
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
      </Box>
      <Button variant="contained"  className="coursesButton">
       Edit price
      </Button>
    </div>
  );
};
export default CreateForm;
