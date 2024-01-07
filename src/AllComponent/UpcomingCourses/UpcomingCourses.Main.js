import React from "react";
import CourseHeader from "../Courses/CoursesHeader";
import { Box } from "@mui/material";
import UpcomingCourseBox from "./UpcomingCoursesBox";

const UpcomingCoursesMain =({})=>{
  return(
    <Box className="mainBox">
    <CourseHeader Heading = {"Create Upcoming Courses / Blog"} subHeading = {"Add / view content of your cours"}/>
    <UpcomingCourseBox/>
 </Box>
  )
}
export default UpcomingCoursesMain;