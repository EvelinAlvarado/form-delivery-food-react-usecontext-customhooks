import React from "react";
import { TextField, Button, Box } from "@mui/material";

class UserData extends React.Component {
  render() {
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
      >
        <TextField
          label="E-mail"
          variant="outlined"
          fullWidth
          margin="dense"
          type="email"
          error={false}
          helperText={false && "Enter a valid email address"}
        />
        <TextField
          label="Password"
          variant="outlined"
          fullWidth
          margin="dense"
          type="password"
        />
        <Button variant="contained" type="submit">
          Next
        </Button>
      </Box>
    );
  }
}

export default UserData;
