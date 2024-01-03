import React from "react";
import Dashboard from "../DAshBoardRight/Dashboard";
import User from "../DAshBoardRight/People/User";
import Transaction from "../DAshBoardRight/Analytics/Transaction";
import MainCourses from "../Courses/MainCourses.component";
import MyTeam from "../DAshBoardRight/People/MyTeam";
import TestPortal from "../DAshBoardRight/People/TestPortal";
import Testimonial from "../DAshBoardRight/Testimonial/Testimonial";

function Main() {
  return (
    <main className="main-container">
      {/* <Dashboard /> */}
      {/* <User/> */}
      {/* <Transaction/> */}
      {/* <MyTeam/> */}
      {/* <TestPortal/> */}
      <Testimonial/>
      {/* <MainCourses/> */}
    </main>
  );
}

export default Main;
