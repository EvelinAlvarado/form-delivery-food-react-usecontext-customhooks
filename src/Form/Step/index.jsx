import { TextField, Button, Box } from "@mui/material";
import { useContext } from "react";
import { CounterContext } from "../../Context";

const Step = ({ data, step, newSteps }) => {
  const { inputs, buttonText, onSubmit } = data;

  /* const counterData = useContext(CounterContext);
  console.log(counterData); */

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
      onSubmit={(e) => onSubmit(e, step, newSteps)}
    >
      {/* <strong>The value is: {counterData.count}</strong> */}
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
            helperText={validate === false && helperText}
            value={value}
            onChange={(e) => onChange(e, i, step, validator, newSteps)}
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
