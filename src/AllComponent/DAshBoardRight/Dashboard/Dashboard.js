import React from "react";
import Header from "../../Courses/CoursesHeader"
import CollectionsIcon from "@mui/icons-material/Collections";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import BookmarkAddedIcon from "@mui/icons-material/BookmarkAdded";
import EastIcon from "@mui/icons-material/East";

function Dashboard({ OpenSidebar }) {
  return (
    <main className="main-container">
      <div className="DashBoardMAinBox">
         <Header Heading={"Hi 360 Critical Care,"} subHeading={"Welcome to your Dashboard"}/>
        <div className="AdditionalBox ">
          <h1 className="TextHeading">Additional Offerings</h1>
          <div className="Additionalmain-cards">
            <div className="Addcard">
              <CollectionsIcon className="AdditionalIcon" />
              <h1>Banners</h1>
            </div>
            <div className="Addcard">
              <LoyaltyIcon className="AdditionalIcon" />
              <h1>Coupons</h1>
            </div>
            <div className="Addcard">
              <BookmarkAddedIcon className="AdditionalIcon" />
              <h1>Zoom</h1>
            </div>
          </div>
        </div>
        <div className="OurOfferBox ">
          <h1 className="TextHeading">Our Offerings</h1>
          <div className="Offer-main-cards">
            <div className="Offer-card">
              <div className="CardRow">
                <div>
                  <CollectionsIcon className="OfferIcon" />
                </div>
                <div className=" OfferCardText">
                  <h3>Course</h3>
                  <p>3 Published Course</p>
                </div>
              </div>
              <div className="OfferButton">
              <span>Create Course</span> 
              <EastIcon className="ArrowIcon"/>
              </div>
            </div>
            <div className="Offer-card">
              <div className="CardRow">
                <div>
                  <CollectionsIcon className="OfferIcon" />
                </div>
                <div className=" OfferCardText">
                  <h3>Test Portal</h3>
                  <p>15 Tests Created</p>
                </div>
              </div>
              <div className="OfferButton">
              <span>Test Portal</span> 
              <EastIcon className="ArrowIcon"/>
              </div>
            </div>
            <div className="Offer-card">
              <div className="CardRow">
                <div>
                  <CollectionsIcon className="OfferIcon" />
                </div>
                <div className=" OfferCardText">
                  <h3>Total Transactions</h3>
                  <p>3 </p>
                </div>
              </div>
              <div className="OfferButton">
              <span>Total Transactions</span> 
              <EastIcon className="ArrowIcon"/>
              </div>
            </div>
            <div className="Offer-card">
              <div className="CardRow">
                <div>
                  <CollectionsIcon className="OfferIcon" />
                </div>
                <div className=" OfferCardText">
                  <h3>Total Revenue</h3>
                  <p>50000</p>
                </div>
              </div>
              <div className="OfferButton">
              <span>Total Revenue</span> 
              <EastIcon className="ArrowIcon"/>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
