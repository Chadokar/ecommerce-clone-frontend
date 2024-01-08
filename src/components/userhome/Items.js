import { Box, Container, styled } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import fetchproduct from "../auth/productData";

const Itemwrp = styled(Box)({
  padding: "30px",
  display: "flex",
  width: "90%",
  justifyContent: "space-between",
  border: "1px solid #b8b8b8",
  cursor: "pointer",
});

const Imgwpr = styled("div")({
  //   width: "8rem",
  width: "200px",
});

const Img = styled("img")({
  height: "200px",
  maxWidth: "200px",
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
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "17.25 cm (6.79 inch) Full HD+ Display",
      "50MP + 8MP + 2MP | 8MP Front",
      "5000 mAh Battery",
      "Hello G88 Processor",
    ],
  },
  {
    productname: "Redmi 12(Jade Black, 128 GB)",
    link: "https://shorturl.at/ekvwJ",
    price: "230",
    about: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "17.25 cm (6.79 inch) Full HD+ Display",
      "50MP + 8MP + 2MP | 8MP Front",
      "5000 mAh Battery",
      "Hello G88 Processor",
    ],
  },
  {
    productname: "Redmi 12(Jade Black, 128 GB)",
    link: "https://shorturl.at/CQU26",
    price: "230",
    about: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "17.25 cm (6.79 inch) Full HD+ Display",
      "50MP + 8MP + 2MP | 8MP Front",
      "5000 mAh Battery",
      "Hello G88 Processor",
    ],
  },
  {
    productname: "Redmi 12(Jade Black, 128 GB)",
    link: "https://shorturl.at/ijoAL",
    price: "230",
    about: [
      "4 GB RAM | 128 GB ROM | Expandable Upto 1 TB",
      "17.25 cm (6.79 inch) Full HD+ Display",
      "50MP + 8MP + 2MP | 8MP Front",
      "5000 mAh Battery",
      "Hello G88 Processor",
    ],
  },
];

const ItemBox = ({ product, isStatic }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    // fetchproduct(product._id, dispatch, navigate);
    navigate(`/product/${product._id}`);
  };

  return (
    <Itemwrp onClick={handleClick}>
      <Imgwpr>
        <Img src={product.link} />
      </Imgwpr>
      <Box sx={{ width: "70%" }}>
        <h5>{product.productname}</h5>
        <Deswpr>
          <ul>
            {product.about.map((des, i) => {
              return <li key={i}>{des?.value}</li>;
            })}
          </ul>
        </Deswpr>
        {isStatic && (
          <p style={{ color: "red", fontSize: 10 }}>*this is static data</p>
        )}
      </Box>
      <h5>${product.price} </h5>
    </Itemwrp>
  );
};

const Items = () => {
  const items = useSelector((state) => state.ItemReducers);

  const prods = Object.entries(items || []).map(([key, value]) => value);
  // const prods = Object.values(items);
  console.log(prods);

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
        {/* {products.map((product, i) => (
          <ItemBox key={i} product={product} />
        ))} */}
        {Array.isArray(prods) &&
          prods?.map((product, i) => (
            <ItemBox key={i} product={product} isStatic={false} />
          ))}
      </Box>
    </Container>
  );
};

export default Items;
