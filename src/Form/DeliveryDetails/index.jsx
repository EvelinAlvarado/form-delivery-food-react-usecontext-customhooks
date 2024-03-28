import { TextField, Button, Box } from "@mui/material";

const DeliveryDetails = () => {
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
        label="Address"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="City"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
      />
      <TextField
        label="State"
        variant="outlined"
        fullWidth
        margin="dense"
        type="text"
      />
      <Button variant="contained" type="submit">
        Create Account
      </Button>
    </Box>
  );
};

export default DeliveryDetails;
