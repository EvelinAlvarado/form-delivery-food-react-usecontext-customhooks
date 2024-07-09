import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import {
  addressValidation,
  cityValidation,
  stateValidation,
} from "./formValidation";

const DeliveryDetails = ({ updateStep }) => {
  const [address, setAddress] = useState({ value: "", validate: null });
  const [city, setCity] = useState({ value: "", validate: null });
  const [inputState, setInputState] = useState({ value: "", validate: null });

  return (
    <Box
      component="form"
      autoComplete="off"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        updateStep(3);
        console.log(address, city, inputState);
      }}
    >
      <TextField
        label="Address"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={address.value}
        onChange={(input) => {
          const address = input.target.value;
          const validateBool = addressValidation(address);
          setAddress({ value: address, validate: validateBool });
        }}
        error={address.validate === false}
        helperText={address.validate === false && "Enter at less 4 characters."}
      />
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={city.value}
        onChange={(input) => {
          const city = input.target.value;
          const validateBool = cityValidation(city);
          setCity({ value: city, validate: validateBool });
        }}
        error={city.validate === false}
        helperText={city.validate === false && "Enter at less 4 characters."}
      />
      <TextField
        label="State"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
        value={inputState.value}
        onChange={(input) => {
          const inputState = input.target.value;
          const validateBool = stateValidation(inputState);
          setInputState({ value: inputState, validate: validateBool });
        }}
        error={inputState.validate === false}
        helperText={
          inputState.validate === false && "Enter at less 4 characters."
        }
      />
      <Button variant="contained" type="submit">
        Create Account
      </Button>
    </Box>
  );
};

export default DeliveryDetails;
