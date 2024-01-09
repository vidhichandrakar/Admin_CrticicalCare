import React from "react";
import "../CSSFile/YourCourses.css";
import cardimg from "../../Media/Images/db7187e8-b7cf-47ed-8900-6de89dabde06.png";
import CourseHeader from "./CoursesHeader";
import FolderCopyRoundedIcon from "@mui/icons-material/FolderCopyRounded";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import Button from "@mui/material/Button";
import Folder from "../../Media/Images/folder.avif";
import SearchBar from "../../Util/SearchBar";

function YourCourses() {
  return (
    <div className="main-container margin20">
      <CourseHeader
        Heading={"Your Courses (3)"}
        subHeading={"Add/View courses of your brand"}
      />

      <SearchBar />
      <div className="Add-main-cards">
        <div className="card">
          <div className="AddCourses">
            <img src={Folder} className="FolderImg" />
            <Button variant="contained" className="AddBtn">
              Add New Courses <AddRoundedIcon />
            </Button>
          </div>
        </div>
        <div className="card">
          <img src={cardimg} className="cardImage" />
          <div className="CardData">
            <p className="Headp">TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
            <p className="Namep">Created by: Jitendra</p>
            <p className="Yearp"> 1 year</p>
            <p className="Pricep">$1</p>
          </div>
        </div>
        <div className="card">
          <img src={cardimg} className="cardImage" />
          <div className="CardData">
            <p className="Headp">TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
            <p className="Namep">Created by: Jitendra</p>
            <p className="Yearp"> 1 year</p>
            <p className="Pricep">$1</p>
          </div>
        </div>
        <div className="card">
          <img src={cardimg} className="cardImage" />
          <div className="CardData">
            <p className="Headp">TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
            <p className="Namep">Created by: Jitendra</p>
            <p className="Yearp"> 1 year</p>
            <p className="Pricep">$1</p>
          </div>
        </div>
        <div className="card">
          <img src={cardimg} className="cardImage" />
          <div className="CardData">
            <p className="Headp">TRICS 1 FREE MOCK TEST FOR EDIC-1</p>
            <p className="Namep">Created by: Jitendra</p>
            <p className="Yearp"> 1 year</p>
            <p className="Pricep">$1</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YourCourses;
