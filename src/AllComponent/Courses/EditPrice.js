import { Select, Box, Typography, TextField, Button } from "@mui/material";
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const EditPrice = ({ handleTrackerPage }) => {
  return (
    <div className="formMain">
      <Box sx={{ mt: "5%" }} className="editFirstBox">
        <Box>
          <Typography fontWeight={600} className="editFirstText">
            Duration
          </Typography>
          <TextField
            sx={{ width: 240, marginTop: "4% !important" }}
            inputProps={{ className: "textField" }}
            fullWidth
            size="small"
            placeholder="1"
            id="fullWidth"
            className="BoxShadow"
          // onChange={(event) => handleTextChange("emailId", event.target.value)}
          />
        </Box>
        <Box className="marginscndBox">
          <Typography fontWeight={600} className="editFirstText">
            Years / Months / Days
          </Typography>
          <FormControl sx={{ m: 1, minWidth: 240 }}>
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
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ marginTop: "5%" }} className="editFirstBox">
        <Box>
          <Typography fontWeight={600} className="editFirstText">
            Regular Price
          </Typography>
          <TextField
            sx={{ width: 240, marginTop: "4% !important" }}
            inputProps={{ className: "textField" }}
            fullWidth
            size="small"
            placeholder="₹ 1000"
            id="fullWidth"
            className="BoxShadow"
          // onChange={(event) => handleTextChange("emailId", event.target.value)}
          />
        </Box>
        <Box className="marginscndBox">
          <Typography fontWeight={600} className="editFirstText">
            Offer Price
          </Typography>
          <TextField
            sx={{ width: 240, marginTop: "4% !important" }}
            inputProps={{ className: "textField" }}
            fullWidth
            size="small"
            placeholder="₹ 500"
            id="fullWidth"
            className="BoxShadow"
          // onChange={(event) => handleTextChange("emailId", event.target.value)}
          />
        </Box>
      </Box>
      <Box className="divider"></Box>
      <Button
        variant="contained"
        className="coursesButton"
        onClick={() => handleTrackerPage(2)}
      >
        Add Content
      </Button>
    </div>
  );
};

export default EditPrice;
