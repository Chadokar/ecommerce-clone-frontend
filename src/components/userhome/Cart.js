import { Box, Button, Container, IconButton, styled } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Itemwrp = styled(Box)({
  padding: "30px",
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  border: "1px solid #b8b8b8",
  cursor: "pointer",
});

const Horizon = styled(Box)({
  display: "flex",
  gap: "1rem",
  padding: "10px",
});

const Imgwpr = styled("div")({
  //   width: "8rem",
});

const Img = styled("img")({
  height: "200px",
});

const Deswpr = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
});

const products = [
  {
    productname: "Redmi 12(Jade Black, 128 GB)",
    link: "https://shorturl.at/pLM13",
    price: "120",
    about: [
      { value: "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB" },
      { value: "17.25 cm (6.79 inch) Full HD+ Display" },
      { value: "50MP + 8MP + 2MP | 8MP Front" },
      { value: "5000 mAh Battery" },
      { value: "Hello G88 Processor" },
    ],
  },
  {
    productname: "Redmi 12(Jade Black, 128 GB)",
    link: "https://shorturl.at/ekvwJ",
    price: "230",
    about: [
      { value: "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB" },
      { value: "17.25 cm (6.79 inch) Full HD+ Display" },
      { value: "50MP + 8MP + 2MP | 8MP Front" },
      { value: "5000 mAh Battery" },
      { value: "Hello G88 Processor" },
    ],
  },
  {
    productname: "Redmi 12(Jade Black, 128 GB)",
    link: "https://shorturl.at/CQU26",
    price: "230",
    about: [
      { value: "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB" },
      { value: "17.25 cm (6.79 inch) Full HD+ Display" },
      { value: "50MP + 8MP + 2MP | 8MP Front" },
      { value: "5000 mAh Battery" },
      { value: "Hello G88 Processor" },
    ],
  },
  {
    productname: "Redmi 12(Jade Black, 128 GB)",
    link: "https://shorturl.at/ijoAL",
    price: "230",
    about: [
      { value: "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB" },
      { value: "17.25 cm (6.79 inch) Full HD+ Display" },
      { value: "50MP + 8MP + 2MP | 8MP Front" },
      { value: "5000 mAh Battery" },
      { value: "Hello G88 Processor" },
    ],
  },
];

const ItemBox = ({ product, isStatic }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleClick = () => {
    // fetchproduct(product._id, dispatch, navigate);
    navigate(`/product/${product.product_id}`);
  };
  return (
    <Itemwrp onClick={handleClick}>
      <Imgwpr>
        <Img src={product?.imgurl || product?.link} />
        <Horizon>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              if (quantity > 1) setQuantity(quantity - 1);
            }}
          >
            <RemoveIcon />
          </IconButton>
          <h5
            style={{
              margin: 0,
              display: "flex",
              alignContent: "center",
              alignItems: "center",
              textAlign: "center",
              justifyContent: "center",
            }}
          >
            {quantity}
          </h5>
          <IconButton
            onClick={(e) => {
              e.stopPropagation();
              setQuantity(quantity + 1);
            }}
          >
            <AddIcon />
          </IconButton>
        </Horizon>
        {isStatic && (
          <p style={{ color: "red", fontSize: 10 }}>*this is static data</p>
        )}
      </Imgwpr>
      <Box sx={{ width: "70%" }}>
        <h5>{product?.productname || product?.product_name}</h5>
        <Deswpr>
          <ul>
            {(product?.decs || product?.about).map((des, i) => (
              <li key={i}>{des.value}</li>
            ))}
          </ul>
        </Deswpr>
      </Box>
      <Box>
        <h5>${product?.price * quantity} </h5>
        <Button
          variant="contained"
          sx={{ marginTop: 10 }}
          onClick={(e) => e.stopPropagation()}
        >
          buy now
        </Button>
      </Box>
    </Itemwrp>
  );
};

const Cart = () => {
  const user = useSelector((state) => state.UserReducers);
  // console.log("user : ", user);
  const cart = user?.card;

  return (
    <Container
      style={{
        background: "#fff",
        width: "100%",
        maxWidth: "95%",
        marginTop: "1rem",
        padding: "30px",
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        {cart &&
          Array.isArray(cart) &&
          cart.map((product, i) => (
            <ItemBox key={i} product={product} isStatic={false} />
          ))}
        {products.map((product, i) => (
          <ItemBox key={i} product={product} isStatic={true} />
        ))}
      </Box>
    </Container>
  );
};

export default Cart;
