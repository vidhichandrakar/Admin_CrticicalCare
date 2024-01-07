import { Box, Button, Typography } from "@mui/material";
import React from "react";

const CouponHeader =({})=>{
  return(
    <Box className="couponHedaerBox">
      <Typography className="couponHeaderText">Coupon Codes</Typography>
      <Box className="couponHeaderButton"><Button variant="contained"  className="couponButton">
       Create Coupon
      </Button>
      </Box>
    </Box>
  )
}
export default CouponHeader;