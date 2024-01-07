import React from "react";
import "../CSSFile/Banner.css";
import CourseHeader from "../Courses/CoursesHeader";
import Card from "@mui/material/Card";
import DeleteIcon from '@mui/icons-material/Delete';
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import img from "../../Media/Images/banner2.jpg"
import Typography from "@mui/material/Typography";

function Banner() {
  return (
    <div className="main-container">
      <div className="BannerMain">
        <CourseHeader Heading = "Manage Banners" subHeading = "Show banners to users"/>
        <div className="BannerBox">
          <div className="HeadText">
            <h2>Your Banner (3)</h2>
          </div>
          
            <Card className="MainBox">
              <div className="InsideBannerBox">
              <main className="InsideMainBox">
              <CardActions className="BannerHead">
                <Typography >Images</Typography>
                <Button className="Deletebtn" ><DeleteIcon  className="Deleteicon"/>Delete</Button>
              </CardActions>
              <CardMedia
                component="img"
                alt="green iguana"
                className="BannerImage"
                image={img}
              />
              <CardContent>
                <p  className="fontSize1">
                Select screen to open on tapping banner
                </p>
              </CardContent>
              <div className="BannerHead BorderBottom">
              <p>
              None (no action on tapping banner) 
                </p>
                <Button className="changeBtn">Change</Button>
              </div>


              </main>
              </div>
              <div className="InsideBannerBox">
              <main className="InsideMainBox">
              <CardActions className="BannerHead">
                <Typography >Images</Typography>
                <Button className="Deletebtn"><DeleteIcon  className="Deleteicon"/>Delete</Button>
              </CardActions>
              <CardMedia
                component="img"
                alt="green iguana"
                className="BannerImage"
                image={img}
              />
              <CardContent>
                <p  className="fontSize1">
                Select screen to open on tapping banner
                </p>
              </CardContent>
              <div className="BannerHead BorderBottom">
              <p>
              Specific Course 
                </p>
                <Button className="changeBtn">Change</Button>
              </div>


              </main>
              </div>
              <div className="InsideBannerBox">
              <main className="InsideMainBox">
              <CardActions className="BannerHead">
                <p >Images</p>
                <Button className="Deletebtn"><DeleteIcon  className="Deleteicon"/>Delete</Button>
              </CardActions>
              <CardMedia
                component="img"
                alt="green iguana"
                className="BannerImage"
                image={img}
              />
              <CardContent>
                <p className="fontSize1">
                Select screen to open on tapping banner
                </p>
              </CardContent>
              <div className="BannerHead BorderBottom">
              <p>
              Zoom Class Link
                </p>
                <Button className="changeBtn">Change</Button>
              </div>


              </main>
              </div>
              <div className="InsideBannerBox">
              <main className="InsideMainBox">
              <CardActions className="BannerHead">
                <p >Images</p>
                <Button className="Deletebtn"><DeleteIcon  className="Deleteicon"/>Delete</Button>
              </CardActions>
              <CardMedia
                component="img"
                alt="green iguana"
                className="BannerImage"
                image={img}
              />
              <CardContent>
                <p  className="fontSize1">
                Select screen to open on tapping banner
                </p>
              </CardContent>
              <div className="BannerHead BorderBottom">
              <p>
              External Link (sheikhshoeb.com)
                </p>
                <Button className="changeBtn">Change</Button>
              </div>


              </main>
              </div>
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
