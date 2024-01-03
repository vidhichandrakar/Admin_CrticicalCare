import React from "react";
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
const steps = [
  'Basic Information',
  'Edit price',
  'Add Content',
];
const Tracker =({})=>{
  return(
   <Box className="createBoxHeader trackerBox">
   
   <Box className="trackerMainBox"> <Stepper className="trackerStep"  alternativeLabel>
      {steps.map((label) => (
        <Step key={label}>
          <StepLabel className="trackerStepText">{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
    </Box>
  </Box>
  )
}
export default Tracker;