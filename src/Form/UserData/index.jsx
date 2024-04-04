import { useState } from "react";
import { TextField, Button, Box } from "@mui/material";
import { emailValidation, passwordValidation } from "./formValidation";

const UserData = ({ updateStep }) => {
  const [email, setEmail] = useState({
    value: "",
    validate: null,
  });
  const [password, setPassword] = useState({
    value: "",
    validate: null,
  });

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
      onSubmit={(event) => {
        event.preventDefault();
        if (email.validate && password.validate) {
          console.log(email, password);
          console.log("next form");
          updateStep(1);
        } else {
          console.log("writing...");
        }
      }}
    >
      <TextField
        label="E-mail"
        variant="outlined"
        fullWidth
        margin="dense"
        type="email"
        error={email.validate === false}
        helperText={email.validate === false && "Enter a valid email address."}
        value={email.value}
        onChange={(input) => {
          const email = input.target.value;

          setEmail({ value: email, validate: emailValidation(email) });
        }}
      />
      <TextField
        label="Password"
        variant="outlined"
        fullWidth
        margin="dense"
        type="password"
        value={password.value}
        error={password.validate === false}
        helperText={
          password.validate === false &&
          "The password must be 8-16 characters long with no spaces, include at least one uppercase letter, one lowercase letter, one number from 0 to 9, and one non-alphanumeric character."
        }
        onChange={(input) => {
          const password = input.target.value;
          passwordValidation(password);
          setPassword({
            value: input.target.value,
            validate: passwordValidation(password),
          });
        }}
      />
      <Button variant="contained" type="submit">
        Next
      </Button>
    </Box>
  );
};

export default UserData;
