import React from "react";
import Dashboard from "../DAshBoardRight/Dashboard";
import User from "../DAshBoardRight/People/User";
import Transaction from "../DAshBoardRight/Analytics/Transaction";

function Main() {
  return (
    <main className="main-container">
      {/* <Dashboard /> */}
      {/* <User/> */}
      <Transaction/>
    </main>
  );
}

export default Main;
