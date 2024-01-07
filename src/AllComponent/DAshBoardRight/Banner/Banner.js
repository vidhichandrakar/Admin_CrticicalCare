import React from "react";
import "../../CSSFile/Banner.css";
import CourseHeader from "../../Courses/CoursesHeader";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img from "../../../Media/Images/banner2.jpg";
import Typography from "@mui/material/Typography";
import ModeIcon from '@mui/icons-material/Mode';
import BannerCard from "./BannerCard";
import {BannerData} from "../../../DAta/JsonData";

function Banner() {
  return (
    <div className="main-container">
      <div className="BannerMain">
        <CourseHeader
          Heading="Manage Banners"
          subHeading="Show banners to users"
        />
        <div className="BannerBox">
          <div className="HeadText">
            <h2>Your Banner (3)</h2>
            {/* <div class="middle"> */}
                    {/* <button class="text"> <ModeIcon className="PencilIcon"/>change</button> */}
                  {/* </div> */}
          </div>

          <Card className="MainBox">
            
              <BannerCard Data = {BannerData}/>
          
           
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Banner;

{
  /* <div className='Banner'>
                        <div className='BannerHead'>
                            <h3>image</h3>
                            <button>Delete</button>
                        </div>

                    </div> */
}
