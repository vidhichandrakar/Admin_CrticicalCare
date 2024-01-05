import React from "react";
import Dashboard from "../DAshBoardRight/Dashboard";
import User from "../DAshBoardRight/People/User";
import Transaction from "../DAshBoardRight/Analytics/Transaction";
import MainCourses from "../Courses/MainCourses.component";
import MyTeam from "../DAshBoardRight/People/MyTeam";
import TestPortal from "../DAshBoardRight/People/TestPortal";
import Testimonial from "../DAshBoardRight/Testimonial/Testimonial";
import CreateCoupon from "../DAshBoardRight/Courses/CreateCoupon";
import Trics1FreeMockTest from "../DAshBoardRight/Courses/Trics1FreeMockTest";

function Main() {
  return (
    <main className="main-container">
      {/* <Dashboard /> */}
      {/* <User/> */}
      {/* <Transaction/> */}
      {/* <MyTeam/> */}
      {/* <TestPortal/> */}
      {/* <Testimonial/> */}
      <CreateCoupon/>
      {/* <Trics1FreeMockTest/> */}
      {/* <MainCourses/> */}
    </main>
  );
}

export default Main;
