import { Box } from "@mui/material";
import React from "react";
import Tracker from "./Tracker";
import CreateForm from "./CreateCourses.form";

const CreateCourses =({})=>{
  return(
    <Box className="courseMainTrack">
    <Tracker/>
    <CreateForm/>
    </Box>
  )
}

export default CreateCourses;