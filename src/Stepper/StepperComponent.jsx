import { Box, Stepper, Step, StepLabel } from "@mui/material";

const StepperComponent = (props) => {
  const stepsUser = ["User", "Personal Information", "Delivery Information"];

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={props.step}>
        {stepsUser.map((step) => (
          <Step key={step}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default StepperComponent;
