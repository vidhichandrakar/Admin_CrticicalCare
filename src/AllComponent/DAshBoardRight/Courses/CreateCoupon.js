import React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";
import CourseHeader from "../../Courses/CoursesHeader";
import CreateCouponForm from "./CreateCoupon.form";


function CreateCoupon() {
  return (
    <Box className="mainBox">
    <CourseHeader Heading = {"Create coupon"} subHeading = {""}/>
    <CreateCouponForm/>
 </Box>
  );
}

export default CreateCoupon;
