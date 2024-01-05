import React from "react";
import Box from "@mui/material/Box";
import Button from '@mui/material/Button';
import TextField from "@mui/material/TextField";

function CreateCoupon() {
  return (
    <div className="main-container">
      <div>
        <h3>Create Coupon</h3>
      </div>
<div className="allTheContent">
      <div className='discountTypediv'>
          Discount Type * 
        <input type="radio" name="discount" />
          Years / Months / Days
        <input type="radio" name="discount" />
          Percentage Discount
      </div>

      <div className="flatDiscountDiv">
        Flat Discount <span className="asterisk">*</span>
        {/* <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        </Box> */}
        <input type="number" placeholder="₹ Enter discount amount" className="inputFeildTwo"/>
      </div>

      <div className="StartnEndDiv">
        <span>
          Start Date <span className="asterisk">*</span>
          <input type="number" placeholder="22/12/2023" className="inputFeildOne" />
        </span>
        <span>
          End date <span className="asterisk">*</span>
          <input type="number" placeholder="01/01/2024" className="inputFeildOne" />
        </span>
      </div>

      <div className="minOrderDiv">
        Minimum Order Value <span className="asterisk">*</span>
        <input type="number" placeholder="₹ 1" className="inputFeildTwo"/>
      </div>
      <hr />

    
      {/* <Box sx={{ "& button": { m: 1 } }}> */}
           <Button className="createButton">
            Create
          </Button>
    </div>
    </div>

  );
}

export default CreateCoupon;
