import React from "react";
// import Header from "../outlines/Headers";
import { Outlet } from "react-router-dom";
import { Box, Paper } from "@mui/material";
import Navbar from "../outlines/Navbar";
import Header from "../outlines/Headers";

export const Home = () => {
  const token = localStorage.getItem("userToken");
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#f5f5f5",
        padding: 0,
      }}
    >
      {/* Use the Header component */}
      {token ? <Navbar /> : <Header />}

      {/* Form component */}
      <Outlet />
    </Box>
  );
};
