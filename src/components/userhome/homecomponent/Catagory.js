import { Grid, Paper, styled } from "@mui/material";
import React from "react";

const Catagory = () => {
  const items = [
    {
      id: 1,
      name: "Item 1",
      description: "Description for Item 1",
      imageSrc: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: 2,
      name: "Item 2",
      description: "Description for Item 2",
      imageSrc: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: 3,
      name: "Item 3",
      description: "Description for Item 2",
      imageSrc: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: 4,
      name: "Item 4",
      description: "Description for Item 2",
      imageSrc: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: 5,
      name: "Item 5",
      description: "Description for Item 2",
      imageSrc: "https://via.placeholder.com/150", // Replace with your image URL
    },
    {
      id: 6,
      name: "Item 6",
      description: "Description for Item 2",
      imageSrc: "https://via.placeholder.com/150", // Replace with your image URL
    },
  ];

  const ItemStyle = styled(Paper)({
    padding: "16px",
    textAlign: "center",
    color: "black",
    border: "1px solid #ccc",
    transition: "border-color 0.3s ease-in-out",
    "&:hover": {
      borderColor: "blue",
    },
    boxShadow: "none",
  });

  const imageStyle = {
    maxWidth: "100%",
    height: "auto",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
      <h4>Best of Catagory</h4>
      <Grid container spacing={2}>
        {items.map((item) => (
          <Grid item xs={12} sm={3} md={2} key={item.id}>
            <ItemStyle>
              <img src={item.imageSrc} alt={item.name} style={imageStyle} />
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </ItemStyle>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Catagory;
