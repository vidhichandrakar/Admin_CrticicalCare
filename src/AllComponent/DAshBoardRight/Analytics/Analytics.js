import React from "react";
import "../../CSSFile/Analytics.css";
import CourseHeader from "../../Courses/CoursesHeader";
import { Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

function Analytics() {
  return (
    <main className="main-container m20">
      <CourseHeader
        Heading={"Analytics"}
        subHeading={
          "Analyze your sales and traffic to know your brand’s growth"
        }
      />
      <div>
        <Box className="TodayDropDown">
          <FormControl
            sx={{ m: 0, minWidth: 120 }}
            className="FromControlDropDown"
          >
            <Select
              className="selectDesign"
              displayEmpty
              renderValue={() => {
                return <em className="labelDesign">Today</em>;
              }}
              inputProps={{ "aria-label": "Without label" }}
              sx={{ textAlign: "left" }}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box className="CardsRow">
          <div className="Card">
            <div className="margin20">
              <h4>Buy Now Clicks</h4>
              <h1>5</h1>
              <p>on last 7 days</p>
            </div>
          </div>
          <div className="Card">
            <div className="margin20">
              <h4>Transactions</h4>
              <h1>2</h1>
              <p>on last 7 days</p>
            </div>
          </div>
          <div className="Card">
            <div className="margin20">
              <h4>Total Revenue (INR)</h4>
              <h1>1000</h1>
              <p>on last 7 days</p>
            </div>
          </div>
          <div className="Card">
            <div className="margin20">
              {" "}
              <h4>Average Order Value</h4>
              <h1>1000</h1>
              <p>on last 7 days</p>
            </div>
          </div>
        </Box>
        <Box className="CardsCol">
              <div className="CardCol">
                <div className="row">
                    <CurrencyRupeeIcon className="RupeeIcon"/>
                    <div className="col">
                        <h4 >View All Transactions</h4>
                        <p>View all your previous transaction</p>
                    </div>
                </div>
                <ChevronRightIcon className="RightIcon" />
              </div>
              <div className="CardCol">
                <div className="row">
                    <SignalCellularAltIcon className="SignalIcon"/>
                    <div className="col">
                        <h4 >Google Analytics</h4>
                        <p>View all your activities of website and app on the Google Analytics</p>
                    </div>
                </div>
                <ChevronRightIcon className="RightIcon" />
              </div>
        </Box>
      </div>
    </main>
  );
}

export default Analytics;
