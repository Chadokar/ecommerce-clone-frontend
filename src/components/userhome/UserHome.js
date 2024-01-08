import React from "react";
import HorizontalProductList from "./homecomponent/Recommendation";
import { Box } from "@mui/system";
import Carousel from "./homecomponent/utils/Carousel";
import { styled } from "@mui/material";
import Catagory from "./homecomponent/Catagory";

const Wrapper = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: 16,
  padding: 16,
  width: "100%",
  marginBlock: 16,
  padding: "20px 80px",
  boxShadow: "1",
});

export const UserHome = () => {
  return (
    <div>
      <Wrapper>
        <HorizontalProductList />
      </Wrapper>
      <Wrapper>
        <Carousel />
      </Wrapper>
      <Wrapper>
        <Catagory />
      </Wrapper>
    </div>
  );
};
