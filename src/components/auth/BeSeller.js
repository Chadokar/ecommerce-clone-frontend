import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShop } from "../redux/Action";

const BeSeller = () => {
  const user = useSelector((state) => state.UserReducers);
  const dispatch = useDispatch();
  // console.log(user);

  const [formData, setFormData] = useState({
    shopname: "",
    address: "",
    email: "",
    pin: "",
    userId: user?._id,
  });
  // const [shop, setShop] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };

    await axios
      .post("/createshop", formData, config)
      .then((res) => {
        // setShop(res.data?.shop);
        localStorage.setItem("shopId", JSON.stringify(res?.data?.shop?._id));
        dispatch(setShop(res?.data?.shop));
        navigate("/addproduct");
      })
      .catch((err) => console.log(err));
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
        backgroundColor: "#f5f5f5",
        marginTop: "5%",
      }}
    >
      <Paper
        elevation={5}
        sx={{
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: "400px",
          width: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <Typography
          variant="h5"
          sx={{ marginBottom: "20px", color: "#1565c0" }}
        >
          Company/Shop Registration
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Company/Shop Name"
            name="shopname"
            value={formData.shopname}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            multiline
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Pin/Zip code"
            name="pin"
            value={formData.pin}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            type="number"
            required
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ marginTop: "16px", backgroundColor: "#4caf50" }}
          >
            Submit
          </Button>
        </form>
      </Paper>
    </Box>
  );
};

export default BeSeller;
