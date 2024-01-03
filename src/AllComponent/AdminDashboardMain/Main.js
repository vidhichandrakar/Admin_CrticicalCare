import React from "react";
import Dashboard from "../DAshBoardRight/Dashboard";
import User from "../DAshBoardRight/People/User";
import Transaction from "../DAshBoardRight/Analytics/Transaction";
import MainCourses from "../Courses/MainCourses.component";
import MyTeam from "../DAshBoardRight/People/MyTeam";

function Main() {
  return (
    <main className="main-container">
      {/* <Dashboard /> */}
      {/* <User/> */}
      {/* <Transaction/> */}
      <MyTeam/>
      {/* <MainCourses/> */}
    </main>
  );
}

export default Main;
