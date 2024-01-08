// Navbar.jsx

import React from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const Header = () => {
  const navigate = useNavigate();

  const navigator = (e) => {
    e.preventDefault();
    navigate("/signup");
  };

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#ffffff",
        width: "100%",
      }}
    >
      <Typography
        variant="h4"
        component="div"
        style={{
          fontWeight: "bold",
          color: "#007BFF",
          cursor: "pointer",
          background: "linear-gradient(to right, #007BFF, #00BFFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          transition: "background 0.3s ease",
          "&:hover": {
            background: "linear-gradient(to right, #00BFFF, #A0CBFF)",
          },
        }}
      >
        <a href="/">Company Name</a>
      </Typography>
      <Box sx={{ gap: "30px", display: "flex" }}>
        <Button
          variant="contained"
          color="primary"
          style={{
            backgroundColor: "#4caf50",
            "&:hover": {
              backgroundColor: "#45a049",
            },
          }}
          onClick={navigator}
        >
          Registration
        </Button>
        <Link to="/login">
          <Button
            variant="contained"
            color="primary"
            style={{
              backgroundColor: "#4caf50",
              "&:hover": {
                backgroundColor: "#45a049",
              },
            }}
          >
            Sign In
          </Button>
        </Link>
      </Box>
    </div>
  );
};

export default Header;
