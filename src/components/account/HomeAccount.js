import { Avatar, Box, Button, Container, styled } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MapsHomeWorkIcon from "@mui/icons-material/MapsHomeWork";
import AddCardIcon from "@mui/icons-material/AddCard";
import PaymentsIcon from "@mui/icons-material/Payments";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Link, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

const Wrapper = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: 4,
  marginBlock: 16,
  padding: "20px",
  boxShadow: "1",
});

const SideButton = styled(Button)({
  width: "100%",
  display: "flex",
  justifyContent: "flex-start",
  fontWeight: "600",
  fontSize: 16,
  background: "#f5f5f5",
  padding: 10,
});

const HomeAccount = () => {
  const user = useSelector((state) => state.UserReducers);

  return (
    <Container
      sx={{
        display: "flex",
        gap: "32px",
      }}
    >
      <Box sx={{ width: "30%" }}>
        <Wrapper
          sx={{
            display: "flex",
            gap: 4,
          }}
        >
          <Avatar
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
          <Box>
            <h6>Hello</h6>
            <h2>{user?.firstName + " " + user?.lastName}</h2>
          </Box>
        </Wrapper>
        <Wrapper sx={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          <Link style={{ textDecoration: "none" }} to="/account/order">
            <SideButton
              startIcon={
                <ShoppingCartOutlinedIcon style={{ fontSize: "24px" }} />
              }
            >
              MY ORDERS
            </SideButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/account/profile">
            <SideButton
              startIcon={<AccountCircleIcon style={{ fontSize: "24px" }} />}
            >
              Profile Information
            </SideButton>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/account/address">
            <SideButton
              startIcon={<MapsHomeWorkIcon style={{ fontSize: "24px" }} />}
            >
              Manage Addresses
            </SideButton>
          </Link>
          <SideButton startIcon={<AddCardIcon style={{ fontSize: "24px" }} />}>
            PAN card Information
          </SideButton>
          <SideButton startIcon={<PaymentsIcon style={{ fontSize: "24px" }} />}>
            Payments
          </SideButton>
          <SideButton
            startIcon={
              <NotificationsOutlinedIcon style={{ fontSize: "24px" }} />
            }
          >
            All Notifications
          </SideButton>
          <SideButton
            sx={{ fontWeight: "normal", background: "none", fontSize: "14px" }}
            startIcon={<LogoutOutlinedIcon style={{ fontSize: "24px" }} />}
          >
            Logout
          </SideButton>
        </Wrapper>
      </Box>
      <Wrapper sx={{ flex: 1 }}>
        <Outlet />
      </Wrapper>
    </Container>
  );
};

export default HomeAccount;
