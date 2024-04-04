import { TextField, Button, Box } from "@mui/material";

const Step = ({ data, step }) => {
  const { inputs, buttonText, onSubmit } = data;

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
      onSubmit={onSubmit}
    >
      {inputs.map((input, i) => {
        const {
          label,
          type,
          validate,
          value,
          onChange,
          helperText,
          validator,
        } = input;

        return (
          <TextField
            key={i}
            label={label}
            variant="outlined"
            fullWidth
            margin="dense"
            type={type}
            error={validate === false}
            helperText={validate === false && { helperText }}
            value={value}
            onChange={(e) => onChange(e, i, step, validator)}
          />
        );
      })}

      <Button variant="contained" type="submit">
        {buttonText}
      </Button>
    </Box>
  );
};

export default Step;
