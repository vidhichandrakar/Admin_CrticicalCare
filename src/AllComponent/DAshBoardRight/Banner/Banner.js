import React from "react";
import "../../CSSFile/Banner.css";
import CourseHeader from "../../Courses/CoursesHeader";
import Card from "@mui/material/Card";
import BannerCard from "./BannerCard";
import { BannerData } from "../../../Data/JsonData";
import { Fragment } from "react";

function Banner() {
  return (
    <Fragment>
      <div className="BannerMain main-container">
        <CourseHeader
          Heading="Manage Banners"
          subHeading="Show banners to users"
        />
        <div className="BannerBox">
          <div className="HeadText">
            <h2>Your Banner (3)</h2>
          </div>

          <Card className="MainBox">
            <BannerCard Data={BannerData} />
          </Card>
        </div>
      </div>
    </Fragment>
  );
}

export default Banner;

