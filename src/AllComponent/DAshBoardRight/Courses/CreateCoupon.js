import React from "react";
import Box from "@mui/material/Box";
import CourseHeader from "../../Courses/CoursesHeader";
import CreateCouponForm from "./CreateCoupon.form";

const CreateCoupon = () => {
  return (
    <Box className="mainBox">
      <CourseHeader Heading={"Create coupon"} subHeading={""} />
      <CreateCouponForm />
    </Box>
  );
}

export default CreateCoupon;
