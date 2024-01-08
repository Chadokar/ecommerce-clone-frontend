import {
  Box,
  Button,
  Container,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserData } from "../auth/userData";

const Horizon = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
  gap: "4rem",
  // paddingBottom: "1rem",
});

const EditButton = styled(Button)({
  background: "none",
});

export const Profile = () => {
  const [editModeInfo, setEditModeInfo] = useState(false);
  const [editNumber, setNumber] = useState(false);
  const [editEmail, setEditEmail] = useState(false);
  // const [gender, setGender] = useState("male");

  const user = useSelector((state) => state.UserReducers);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    contact: user?.contact || "",
    gender: user?.gender || "male",
  });

  React.useEffect(() => {
    setFormData({
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
      email: user?.email || "",
      contact: user?.contact || "",
      gender: user?.gender || "male",
    });
  }, [user]);

  // console.log(user);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEditClick = async (edit, setEdit) => {
    setEdit(!edit);
    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("userToken")}`,
      },
    };

    if (edit) {
      await axios
        .put("user/", { data: { ...formData } }, config)
        .then((res) => {
          console.log(res.data.user);
          fetchUserData(dispatch);
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Container>
      <Horizon>
        <h5>Personal Information</h5>
        <EditButton
          onClick={() => handleEditClick(editModeInfo, setEditModeInfo)}
        >
          {editModeInfo ? "Save" : "Edit"}
        </EditButton>
      </Horizon>
      <Horizon>
        <TextField
          sx={{ width: "40%" }}
          label="First Name"
          value={formData?.firstName}
          name="firstName"
          variant="outlined"
          disabled={!editModeInfo}
          onChange={handleChange}
        />
        <TextField
          sx={{ width: "40%" }}
          label="Last Name"
          name="lastName"
          value={formData?.lastName}
          variant="outlined"
          disabled={!editModeInfo}
          onChange={handleChange}
        />
      </Horizon>
      <Horizon sx={{ paddingTop: "1rem" }}>
        <p style={{ margin: "0" }}>Gender</p>
      </Horizon>
      <Horizon>
        <RadioGroup
          row
          aria-label="gender"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        >
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            disabled={!editModeInfo}
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            disabled={!editModeInfo}
          />
        </RadioGroup>
      </Horizon>
      <Horizon>
        <h5>Mobile Number</h5>
        <EditButton onClick={() => handleEditClick(editNumber, setNumber)}>
          {editNumber ? "Save" : "Edit"}
        </EditButton>
      </Horizon>
      <Horizon>
        <TextField
          sx={{ width: "40%" }}
          label="Contact"
          name="contact"
          variant="outlined"
          value={formData.contact}
          type="number"
          disabled={!editNumber}
          onChange={handleChange}
        />
      </Horizon>
      <Horizon sx={{ marginTop: 2 }}>
        <h5>Email Address</h5>
        <EditButton onClick={() => handleEditClick(editEmail, setEditEmail)}>
          {editEmail ? "Save" : "Edit"}
        </EditButton>
      </Horizon>
      <Horizon>
        <TextField
          sx={{ width: "40%" }}
          label="Email"
          name="email"
          value={formData.email}
          type="email"
          variant="outlined"
          disabled={!editEmail}
          onChange={handleChange}
        />
      </Horizon>
      <Box sx={{ marginTop: 2 }}>
        <h5>FAQs</h5>
        <h6>What happens when I update my email address (or mobile number)?</h6>
        <p>
          Your login email id (or mobile number) changes, likewise. You'll
          receive all your account related communication on your updated email
          address (or mobile number).
        </p>
        <h6>
          When will my Flipkart account be updated with the new email address
          (or mobile number)?
        </h6>
        <p>
          It happens as soon as you confirm the verification code sent to your
          email (or mobile) and save the changes.
        </p>
        <h6>
          What happens to my existing Flipkart account when I update my email
          address (or mobile number)?
        </h6>
        <p>
          Updating your email address (or mobile number) doesn't invalidate your
          account. Your account remains fully functional. You'll continue seeing
          your Order history, saved information and personal details.
        </p>
        <h6>
          Does my Seller account get affected when I update my email address?
        </h6>
        <p>
          Flipkart has a 'single sign-on' policy. Any changes will reflect in
          your Seller account also.
        </p>
      </Box>
    </Container>
  );
};
