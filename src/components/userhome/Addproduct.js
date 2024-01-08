import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { IconButton, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import AddIcon from "@mui/icons-material/Add";
import { useSelector } from "react-redux";

const Horizon = styled(Box)({
  display: "flex",
  alignItems: "flex-end",
});

const Addproduct = () => {
  const [formData, setFormData] = useState({
    productname: "",
    description: "",
    link: "",
    price: "",
    type: "",
    about: [],
  });

  const shopId = localStorage.getItem("shopId");
  const shop = useSelector((state) => state.ShopReducers);

  const [abouts, setAbouts] = useState([{ id: 1, value: "" }]);

  const navigate = useNavigate();

  const handleInputChange = (index, value) => {
    const newList = [...abouts];
    newList[index].value = value;
    setAbouts(newList);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleAddInput = () => {
    const newInput = { id: abouts.length + 1, value: "" };
    setAbouts([...abouts, newInput]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      ...formData,
      about: [...abouts],
      companyId: shop?._id || shopId.slice(1, shopId.length - 1),
    };

    // console.log(shop._id, " ", shop["email"]);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };

    await axios
      .post("/create-product", data, config)
      .then((res) => {
        console.log(res.data);
        setFormData({
          productname: "",
          description: "",
          link: "",
          price: "",
          type: "",
          about: [],
        });
      })
      .catch((err) => console.log(err));

    // console.log("Form submitted: ", formData, " ,Response : ", response);
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
          Add your product
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: "100%" }}>
          <TextField
            label="Product Name"
            name="productname"
            value={formData.productname}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
            multiline
          />
          <Horizon>
            <div>
              {abouts?.map((abt, i) => (
                <TextField
                  key={i}
                  label="About"
                  name="about"
                  value={abt.value}
                  onChange={(e) => handleInputChange(i, e.target.value)}
                  margin="normal"
                  variant="outlined"
                  fullWidth
                />
              ))}
            </div>
            <IconButton
              onClick={handleAddInput}
              sx={{ width: "60px", height: "60px" }}
            >
              <AddIcon />
            </IconButton>
          </Horizon>
          <TextField
            label="Image URL"
            name="link"
            type="url"
            value={formData.link}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
            required
            fullWidth
          />
          <TextField
            label="Price"
            name="price"
            value={formData.price}
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

export default Addproduct;
