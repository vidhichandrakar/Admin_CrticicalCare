import { Box } from "@mui/material";
import React, { useState } from "react";
import Tracker from "./Tracker";
import CreateForm from "./CreateCourses.form";
import EditPrice from "./EditPrice";

const CreateCourses =({handleHeaderLabels})=>{
  const [trackerPage,setTackerPage]=useState(0);
  const handleTrackerPage =(page)=>{
    setTackerPage(page);
    handleHeaderLabels(page)
  }
  return(
    <Box className="courseMainTrack">
    <Tracker trackerPage={trackerPage} handleTrackerPage={handleTrackerPage}/>
     {trackerPage===0?<CreateForm handleTrackerPage={handleTrackerPage}/>:trackerPage===1?<EditPrice handleTrackerPage={handleTrackerPage}/>:""}
    </Box>
  )
}

export default CreateCourses;