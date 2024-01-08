import { Box, Button, styled } from "@mui/material";
import React from "react";

const Wrapper = styled(Box)({
  backgroundColor: "#f6f6f6",
  borderRadius: 1,
  padding: 2,
  width: "100%",
  marginBlock: 16,
  padding: "10px",
  boxShadow: "1",
  display: "flex",
  justifyContent: "space-between",
  marginTop: 4,
  marginBottom: 4,
});

const ImgBox = styled(Button)({
  width: "6rem",
  background: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
});

const Img = styled("img")({
  height: "6rem",
});

const ContentBox = styled("div")({
  width: "30%",
  height: "80%",
  overflow: "hidden",
  display: "-webkit-box",
  WebkitBoxOrient: "vertical",
  WebkitLineClamp: 3,
  textOverflow: "ellipsis",
});

const oreders = [
  {
    imgurl: "https://shorturl.at/cxzQ1",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Jan 21, 2023",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/mBHW7",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Dec 9, 2023",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/cdiqM",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Oct 2, 2023",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/bknqI",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Feb 12, 2023",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/aENW1",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Jan 21, 2025",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/cxzQ1",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Jan 21, 2023",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/cxzQ1",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Jan 21, 2023",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/cxzQ1",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Jan 21, 2023",
    price: "$40",
  },
  {
    imgurl: "https://shorturl.at/cxzQ1",
    des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cumque voluptatem quos aliquid, numquam distinctio asperiores dolores, doloribus fugiat nemo ut saepe itaque veritatis tempore autem cum alias, eius quasi.",
    date: "Delivered on Jan 21, 2023",
    price: "$40",
  },
];

export const Orders = () => {
  return (
    <Box>
      {oreders.map((order) => (
        <Wrapper>
          <ImgBox>
            <Img src={order.imgurl} alt="" />
          </ImgBox>
          <ContentBox>{order.des}</ContentBox>
          <p>{order.price}</p>
          <h6>{order.date}</h6>
        </Wrapper>
      ))}
    </Box>
  );
};
