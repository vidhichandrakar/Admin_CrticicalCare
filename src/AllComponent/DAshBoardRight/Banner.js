import React from "react";
import "../CSSFile/Banner.css";
import CourseHeader from "../Courses/CoursesHeader";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img from "../../Media/Logo.png"
import Typography from "@mui/material/Typography";

function Banner() {
  return (
    <div className="main-container">
      <div className="BannerMain">
        <CourseHeader />
        <div className="BannerBox">
          <div className="HeadText">
            <h1>Banner</h1>
          </div>
            <Card className="MainBox">
              <CardActions className="BannerHead">
                <Typography >Image</Typography>
                <Button size="small">Delete</Button>
              </CardActions>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image={img}
              />
              <CardContent>
                
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over
                  6,000 species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
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
