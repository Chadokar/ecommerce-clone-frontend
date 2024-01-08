import React from "react";
import { Box, Button, Popover, Typography } from "@mui/material";
import { styled } from "@mui/system";
import AnimatedList from "./HoverList";

const Dropdown = ({ product }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const ProductIcon = styled("img")({
    width: "50px",
    height: "50px",
    objectFit: "cover",
  });

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <>
      <Box
        aria-describedby={product.id}
        variant="contained"
        onClick={handleClick}
        sx={{ marginRight: 2 }}
      >
        <Button
          //   onClick={handleButtonClick}
          sx={{ display: "flex", flexDirection: "column" }}
        >
          <ProductIcon src={product.image} alt={product.name} />
          <Box color={"#333"} sx={{ marginTop: 1, fontWeight: "560" }}>
            {product.name}
          </Box>
        </Button>
      </Box>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>The content of the Popover.</Typography>
        <AnimatedList />
      </Popover>
    </>
  );
};

export default Dropdown;
