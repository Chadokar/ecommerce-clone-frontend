import React, { useEffect, useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { setItem, setProduct } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shopId = localStorage.getItem("shopId");
  const user = useSelector((state) => state.UserReducers);

  const handleKeyPress = async (event) => {
    if (event.key === "Enter") {
      console.log("Input Value:", inputValue);
      await axios
        .get(`/product-search/${inputValue}`)
        .then((res) => {
          console.log(res.data.products);
          const products = [...res?.data?.products];
          dispatch(setItem([...products]));
          navigate("/items");
        })
        .catch((err) => console.log(err));
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
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
      <div style={{ display: "flex", alignItems: "center" }}>
        <img
          src="/path/to/logo.png"
          alt="Logo"
          style={{ width: "50px", marginRight: "10px" }}
        />
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
          <Link to="/user">Company Name</Link>
        </Typography>
      </div>
      <div style={{ marginRight: "20px" }}>
        <div
          style={{
            position: "relative",
            borderRadius: "20px",
            backgroundColor: "#e6e6e6",
            display: "flex",
            alignItems: "center",
            width: "300px",
            transition: "background-color 0.3s ease",
            "&:hover": {
              backgroundColor: "#d9d9d9",
            },
          }}
        >
          <SearchIcon style={{ margin: "0 10px" }} />
          <InputBase
            placeholder="Search boat, saree, bicycle..."
            inputProps={{ "aria-label": "search" }}
            value={inputValue}
            onChange={handleChange}
            onKeyPress={handleKeyPress}
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "14px",
              color: "#333",
            }}
          />
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Link to="/account">
          <Button
            color="primary"
            startIcon={<AccountCircleIcon style={{ fontSize: "24px" }} />}
            style={{ margin: "0px 20px" }}
          >
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {user?.firstName + " " + user?.lastName}
            </Typography>
          </Button>
        </Link>
        <Link to="/cart">
          <Button color="primary" startIcon={<ShoppingCartIcon />}>
            Cart
          </Button>
        </Link>
        {user?.shopId ? (
          <Link to="/addproduct">
            <Button color="primary" startIcon={<StorefrontIcon />}>
              Add Product
            </Button>
          </Link>
        ) : (
          <Link to="/register-seller">
            <Button color="primary" startIcon={<StorefrontIcon />}>
              Become a Seller
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
