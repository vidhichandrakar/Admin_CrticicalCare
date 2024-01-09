import React from "react";
import CourseHeader from "../Courses/CoursesHeader";
import { Box } from "@mui/material";
import CouponHeader from "./CouponHeader";
import CouponBox from "./CouponBox";
const CouponMain =({})=>{
  return(
   <Box className="mainBox">
    <CourseHeader Heading = {"Manage Coupons"} subHeading = {""}/>
    <CouponHeader/>
    <CouponBox/>
 </Box>
  )
}
export default CouponMain;