import React from "react";
import "../../CSSFile/Analytics.css";
import CourseHeader from "../../Courses/CoursesHeader";
import { Box, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SmallCard from "./AnalyticsCard/SmallCard";
import BigCard from "./AnalyticsCard/BigCard";
import { AnalyticsSmallData, AnalyticsBigData} from "../../../DAta/Analytics";

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
         <SmallCard Data ={AnalyticsSmallData}/>
          
        </Box>
        <Box className="CardsCol">
            <BigCard Data={AnalyticsBigData}/>  
              {/* <div className="CardCol">
                <div className="row">
                    <SignalCellularAltIcon className="SignalIcon"/>
                    <div className="col">
                        <h4 >Google Analytics</h4>
                        <p>View all your activities of website and app on the Google Analytics</p>
                    </div>
                </div>
                <ChevronRightIcon className="RightIcon" />
              </div> */}
        </Box>
      </div>
    </main>
  );
}

export default Analytics;
