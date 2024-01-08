import { List, ListItem, styled } from "@mui/material";
import React from "react";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  cursor: "pointer",
  transition: "background-color 0.3s",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
  },
}));

const AnimatedList = () => {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4"];

  return (
    <>
      <List>
        {items.map((item, index) => (
          <StyledListItem
            key={index}
            onClick={() => console.log(`Clicked on ${item}`)}
          >
            {item}
          </StyledListItem>
        ))}
      </List>
    </>
  );
};

export default AnimatedList;
