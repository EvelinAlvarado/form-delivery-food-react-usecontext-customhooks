import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  firstNameValidation,
  lastNameValidation,
  phoneNumberValidation,
} from "./formValidation";

const PersonalInformation = ({ updateStep }) => {
  const [firstName, setFirstName] = useState({ value: "", validate: null });
  const [lastName, setLastName] = useState({ value: "", validate: null });
  const [phoneNumber, setPhoneNumber] = useState({ value: "", validate: null });

  return (
    <Box
      component="form"
      autocomplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        updateStep(2);
      }}
    >
      <TextField
        label="First Name"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={firstName.value}
        onChange={(input) => {
          const firstNameValue = input.target.value;
          const validateBool = firstNameValidation(firstNameValue);
          setFirstName({
            value: firstNameValue,
            validate: validateBool,
          });
          console.log(firstNameValue, validateBool);
        }}
        error={firstName.validate === false}
        helperText={
          firstName.validate === false &&
          "Enter a minimum of 2 characters and a maximum of 30 characters"
        }
      />
      <TextField
        label="Last Name"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={lastName.value}
        onChange={(input) => {
          const lastNameValue = input.target.value;
          const validateBool = lastNameValidation(lastNameValue);
          setLastName({
            value: lastNameValue,
            validate: validateBool,
          });
          console.log(lastNameValue, validateBool);
        }}
        error={lastName.validate === false}
        helperText={
          lastName.validate === false &&
          "Enter a minimum of 2 characters and a maximum of 50 characters."
        }
      />
      <TextField
        label="Phone Number"
        variant="outlined"
        fullWidth
        margin="dense"
        type="number"
        inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
        value={phoneNumber.value}
        onChange={(input) => {
          const numberPhoneValue = input.target.value;
          const validateBool = phoneNumberValidation(numberPhoneValue);
          setPhoneNumber({
            value: numberPhoneValue,
            validate: validateBool,
          });
          console.log(numberPhoneValue, validateBool);
        }}
        error={phoneNumber.validate === false}
        helperText={
          phoneNumber.validate === false &&
          "Enter a minimum of 8 digits and a maximum of 14 digits."
        }
      />
      <Button variant="contained" type="submit">
        Next
      </Button>
    </Box>
  );
};

export default PersonalInformation;
