import React from "react";
import { Box } from "@mui/material";
import Dropdown from "./utils/dropdown";

const ProductList = [
  {
    id: 1,
    name: "Grocery",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/29327f40e9c4d26b.png?q=100",
  },
  {
    id: 2,
    name: "Mobiles",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/22fddf3c7da4c4f4.png?q=100",
  },
  {
    id: 3,
    name: "Fashion",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0d75b34f7d8fbcb3.png?q=100",
  },
  {
    id: 4,
    name: "Electronics",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/69c6589653afdb9a.png?q=100",
  },
  {
    id: 5,
    name: "Home & Furniture",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/ab7e2b022a4587dd.jpg?q=100",
  },
  {
    id: 6,
    name: "Appliances",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/0139228b2f7eb413.jpg?q=100",
  },
  {
    id: 7,
    name: "Travel",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/71050627a56b4693.png?q=100",
  },
  {
    id: 8,
    name: "Beauty, Toys & More",
    image:
      "https://rukminim1.flixcart.com/flap/80/80/image/dff3f7adcf3a90c6.png?q=100",
  },
  {
    id: 9,
    name: "Beauty, Toys & More",
    image:
      "https://rukminim1.flixcart.com/fk-p-flap/80/80/image/05d708653beff580.png?q=100",
  },
  // Add more products as needed
];

const HorizontalProductList = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {ProductList.map((product, i) => (
        <Dropdown key={i} product={product} />
      ))}
    </Box>
  );
};

export default HorizontalProductList;
