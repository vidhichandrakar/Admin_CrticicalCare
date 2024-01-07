import React from "react";
import CourseHeader from "../Courses/CoursesHeader";
import { Box } from "@mui/material";

const UpcomingCoursesMain =({})=>{
  return(
    <Box className="mainBox">
    <CourseHeader Heading = {"Create Upcoming Courses / Blog"} subHeading = {"Add / view content of your cours"}/>
    
 </Box>
  )
}
export default UpcomingCoursesMain;