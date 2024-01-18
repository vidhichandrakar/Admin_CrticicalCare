import React from "react";
import Header from "../../Courses/CoursesHeader"
import {AdditionalData, OfferData} from "../../../Data/JsonData"
import AdditionalCard from "./AdditionalCard";
import OfferCard from "./OfferCard";

const Dashboard = ({ OpenSidebar }) => {
  return (
    <main className="mainBox">
      <div className="DashBoardMAinBox">
         <Header Heading={"Hi 360 Critical Care,"} subHeading={"Welcome to your Dashboard"}/>
        <div className="AdditionalBox ">
          <h1 className="TextHeading">Additional Offerings</h1>
          <div className="Additionalmain-cards">
           <AdditionalCard Data = {AdditionalData}/>
          </div>
        </div>
        <div className="OurOfferBox ">
          <h1 className="TextHeading">Our Offerings</h1>
          <div className="Offer-main-cards">
            <OfferCard  Data= {OfferData}/>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
