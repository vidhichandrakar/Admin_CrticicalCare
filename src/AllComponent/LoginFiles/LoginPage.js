import React from "react";
import LoginLeft from "./LoginLeft/LoginLeft";
import LoginEmail from "./LoginRight/LoginEmail";
import "../CSSFile/Login.css";
import { Box, Typography } from "@mui/material";

const LoginPage = () => {
  return (
    <>
      <Box className="MainBox">
        <Box className="loginBox">
          <LoginLeft />
          <LoginEmail />
        </Box>
      </Box>
    </>
  );
};

export default LoginPage;
