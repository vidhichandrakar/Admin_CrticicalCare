import { Typography,Box } from "@mui/material";
import React from "react";
import "../CSSFile/Courses.css"
import CourseHeader from "./CoursesHeader";
import CreateCourses from "./CreateCourse";

const MainCourses = ({})=>{
  return(
    <Box className="mainBox">
       <CourseHeader/>
       <CreateCourses/>
    </Box>
  )
}

export default MainCourses;