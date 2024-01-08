import {
  Box,
  Button,
  Chip,
  Container,
  styled,
  IconButton,
  TextField,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import EditIcon from "@mui/icons-material/Edit";
import React, { useState } from "react";

const Horizon = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "4rem",
});

const AddButton = styled(Button)({
  width: "100%",
  borderRadius: "1px",
  background: "none",
  border: "1px solid #b4b4b4",
  justifyContent: "flex-start",
  display: "flex",
  padding: "10px",
  marginTop: "1rem",
  marginBottom: "1rem",
});

const AddContainer = styled(Box)({
  width: "100%",
  padding: "10px",
  border: "1px solid #b4b4b4",
});

const AddressesBox = styled(Box)({
  marginTop: "3rem",
});

const InputAddress = ({ setShowEdit }) => {
  const [place, setPlace] = useState("home");
  const handlePlaceChange = (event) => {
    setPlace(event.target.value);
  };
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <Horizon>
        <TextField sx={{ width: "40%" }} label="Name" variant="outlined" />
        <TextField
          sx={{ width: "40%" }}
          type="number"
          label="Contact"
          variant="outlined"
        />
      </Horizon>
      <Horizon>
        <TextField sx={{ width: "40%" }} label="Locality" variant="outlined" />
        <TextField
          sx={{ width: "40%" }}
          type="number"
          label="Pincode"
          variant="outlined"
        />
      </Horizon>
      <TextField
        label="Address (Area & Street)"
        multiline
        variant="outlined"
        sx={{ width: "100%", maxHeight: "300px" }}
      />
      <RadioGroup
        row
        aria-label="place"
        name="place"
        value={place}
        onChange={handlePlaceChange}
      >
        <FormControlLabel value="home" control={<Radio />} label="Home" />
        <FormControlLabel value="work" control={<Radio />} label="Work" />
      </RadioGroup>
      <Horizon sx={{ gap: "2rem" }}>
        <Button variant="outlined" onClick={() => setShowEdit(false)}>
          Save
        </Button>
        <Button variant="contained" onClick={() => setShowEdit(false)}>
          Cancel
        </Button>
      </Horizon>
    </Box>
  );
};

export const Address = () => {
  const [showAdd, setShowAdd] = useState(false);

  const AddressBox = () => {
    const [showEdit, setShowEdit] = useState(false);
    return (
      <AddContainer>
        {showEdit ? (
          <InputAddress setShowEdit={setShowEdit} />
        ) : (
          <>
            <Horizon sx={{ justifyContent: "space-between" }}>
              <Chip label="Home" />
              <IconButton
                onClick={() => setShowEdit(!showEdit)}
                sx={{ borderRadius: "4px" }}
              >
                <EditIcon />
              </IconButton>
            </Horizon>
            <Box>
              <h6>John Doe 1234567890</h6>
              <p style={{ fontSize: 12 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
                officiis!
              </p>
            </Box>
          </>
        )}
      </AddContainer>
    );
  };

  return (
    <Container>
      <h5>Manage Address</h5>
      <p style={{ color: "red", fontSize: 9 }}>
        {" "}
        *This is static data. Update comming soon
      </p>
      <AddButton
        onClick={() => setShowAdd(!showAdd)}
        startIcon={<AddOutlinedIcon />}
      >
        add a new address
      </AddButton>
      {showAdd && <InputAddress setShowEdit={setShowAdd} />}
      <AddressesBox>
        <AddressBox />
        <AddressBox />
        <AddressBox />
        <AddressBox />
        <AddressBox />
      </AddressesBox>
    </Container>
  );
};
