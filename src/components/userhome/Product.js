import { Box, Button, Container, styled } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import fetchproduct from "../auth/productData";
import axios from "axios";
import { setData } from "../redux/Action";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../auth/userData";

// const Leftwpr = styled(Box)({

// })

const Horizon = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "2rem",
});

const ImgBox = styled(Box)({
  height: "400px",
  width: "100%",
});

const Img = styled("img")({
  height: "400px",
});

// const product = {
//   about: [
//     { value: "Bank Offer5% Cashback on Flipkart Axis Bank Card" },
//     { value: "Bank Offer5% Cashback on Flipkart Axis Bank Card" },
//     { value: "Bank Offer5% Cashback on Flipkart Axis Bank Card" },
//     { value: "Bank Offer5% Cashback on Flipkart Axis Bank Card" },
//   ],
//   description:
//     "This Redmi 12 is a smartphone with various advantages. It comes with 128 GB of storage that can be expanded up to 1 TB, as well as 12 GB of RAM that helps to run the phone seamlessly. This phone is IP53 rated and has Corning Gorilla glass which makes the phone highly durable. It is powered by a MediaTek G88 processor that helps enhance the overall performance. The crystal clear50 MP camera lets you capture incredible photos and videos. With an exquisite glass finish, MIUI Dialer, and a powerful 5000 mAh battery, this phone lets you stay productive all the time.",
//   link: "https://shorturl.at/eiBU8",
//   price: 200,
//   productname: "REDMI 12 (Jade Black, 128 GB) ",
// };

const Product = () => {
  // const product = useSelector((state) => state.ProductReducers);
  const [product, setProduct] = useState();
  // const location = useLocation();
  const { productId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  React.useEffect(() => {
    // console.log("useffect entered : ", productId);

    if (productId) fetchproduct(productId, setProduct, navigate);
  }, []);

  const user = useSelector((state) => state.UserReducers);
  let cart = user?.card;

  let isPresent = false;
  if (cart && Array.isArray(cart))
    isPresent = cart.some((obj) => obj.product_id === productId);

  async function RemoveCart(e) {
    e.preventDefault();
    cart = cart.filter((ele) => ele.product_id !== productId);

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };

    await axios
      .put("/remove-cart", { cart }, config)
      .then((res) => {
        // setShop(res.data?.shop);
        // console.log(res.data.user);
        fetchUserData(dispatch);
        navigate("/cart");
      })
      .catch((err) => console.log(err));
  }

  async function AddtoCart(e) {
    e.preventDefault();

    const data = {
      product_id: productId,
      product_name: product.productname,
      about: product.about,
      imgurl: product.link,
      price: product.price,
    };

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };

    await axios
      .put("/add-cart", data, config)
      .then((res) => {
        // setShop(res.data?.shop);
        // console.log(res.data.user);
        fetchUserData(dispatch);
        navigate("/cart");
      })
      .catch((err) => console.log(err));
  }

  if (!product) return <h1>Loading......</h1>;

  return (
    <Container
      style={{
        maxWidth: "90%",
        margin: "30px",
        background: "#fff",
        padding: "20px",
        display: "flex",
        gap: "40px",
      }}
    >
      <div style={{ width: "40%" }}>
        <ImgBox>
          <Img src={product?.link} />
        </ImgBox>
        <Horizon sx={{ marginTop: "2rem" }}>
          {isPresent ? (
            <Button variant="contained" onClick={RemoveCart}>
              Remove from cart
            </Button>
          ) : (
            <Button variant="contained" onClick={AddtoCart}>
              add to cart
            </Button>
          )}
          <Button style={{ minWidth: "100px" }}>Buy Now</Button>
        </Horizon>
      </div>
      <Box>
        <h4>{product?.productname}</h4>
        <h5 style={{ color: "#0d6efd" }}>${product?.price}</h5>
        <h5 style={{ fontSize: "14px", color: "#6d68fd" }}>
          Available offers/Details
        </h5>
        <ul>
          {product &&
            product?.about?.map((ele, i) => <li key={i}>{ele?.value}</li>)}
        </ul>
        <h5 style={{ fontSize: "14px", color: "#6d68fd" }}>Description</h5>
        <p>{product?.description}</p>
      </Box>
    </Container>
  );
};

export default Product;
