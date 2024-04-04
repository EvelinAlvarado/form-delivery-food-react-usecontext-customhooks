import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import UserData from "./UserData";
import PersonalInformation from "./PersonalInformation";
import DeliveryDetails from "./DeliveryDetails";
import Complete from "./Complete";
import Stepper from "../Stepper";
import Step from "./Step";
/* Validations */
import { emailValidation, passwordValidation } from "./UserData/formValidation";

const Form = () => {
  const [step, setStep] = useState(1);
  /* const [newSteps, setNewSteps] = useState({}); */

  // step = 0 -> <UserData />
  // step = 1 -> <PersonalInformation />
  // step = 2 -> <DeliveryDetails /
  // step = 3 -> <Complete />

  /* const updateStep = (step) => {
    console.log("update step", step);
    setStep(step);
  }; */

  /* const steps = {
    0: <UserData updateStep={updateStep} />,
    1: <PersonalInformation updateStep={updateStep} />,
    2: <DeliveryDetails updateStep={updateStep} />,
    3: <Complete />,
  }; */

  const onSubmit = () => {};

  const handleChange = (element, position, currentStep, validator) => {
    const value = element.target.value;
    const validate = validator(value);
    console.log(value);
    console.log(validate);
    console.log("position: ", position);
    console.log("currentStep: ", currentStep);
    console.log("validator: ", validator);
  };

  const stepsFlow = {
    0: {
      inputs: [
        {
          label: "E-mail",
          type: "email",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText: "Enter a valid email address.",
          validator: emailValidation,
        },
        {
          label: "Password",
          type: "email",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText:
            "The password must be 8-16 characters long with no spaces, include at least one uppercase letter, one lowercase letter, one number from 0 to 9, and one non-alphanumeric character.",
          validator: passwordValidation,
        },
      ],
      buttonText: "Next",
      onSubmit: onSubmit,
    },
  };
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flexbox",
        flexDirection: "column",
      }}
    >
      <LogoSpace>
        <Img src={"/favicon.png"} />
        <Typography variant="h3">DeliveryFood</Typography>
      </LogoSpace>
      <FormSpace>
        {step < 3 && <Stepper step={step} />}
        {/* {steps[step]} */}
        <Step data={stepsFlow[step]} step={step} />
      </FormSpace>
    </Box>
  );
};

export default Form;
