import { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { LogoSpace, FormSpace, Img } from "./styles";
import UserData from "./UserData";
import PersonalInformation from "./PersonalInformation";
import DeliveryDetails from "./DeliveryDetails";
import Complete from "./Complete";
import StepperComponent from "../Stepper/StepperComponent.jsx";
import Step from "./Step";
/* Validations */
import { emailValidation, passwordValidation } from "./UserData/formValidation";
import {
  firstNameValidation,
  lastNameValidation,
  phoneNumberValidation,
} from "./PersonalInformation/formValidation.js";
import {
  addressValidation,
  cityValidation,
  stateValidation,
} from "./DeliveryDetails/formValidation.js";

const Form = () => {
  const [step, setStep] = useState(0);
  const [newSteps, setNewSteps] = useState({}); /* -----way 3----- */

  // ----- WAY 1 -------
  /* step = 0 -> <UserData />
  step = 1 -> <PersonalInformation />
  step = 2 -> <DeliveryDetails /
  step = 3 -> <Complete /> */

  // -----WAY 2------------
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

  // --------WAY 3--------

  const onSubmit = (e, step, newSteps) => {
    console.log("step", step);
    e.preventDefault();
    let nextStep = step + 1;
    console.log("nextStep", nextStep);
    setStep(nextStep);
    if (nextStep === 3) {
      console.log("Sending data to backend", newSteps);
    }
  };

  const handleChange = (
    element,
    position,
    currentStep,
    validator,
    newSteps
  ) => {
    const value = element.target.value;
    const valid = validator(value);
    console.log(value);
    console.log(valid);
    console.log("position: ", position);
    console.log("currentStep: ", currentStep);
    console.log("validator: ", validator);
    const cp = { ...newSteps };
    cp[currentStep].inputs[position].value = value;
    cp[currentStep].inputs[position].validate = valid;

    setNewSteps(cp);
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
          type: "text",
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
    1: {
      inputs: [
        {
          label: "First Name",
          type: "text",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText:
            "Enter a minimum of 2 characters and a maximum of 30 characters",
          validator: firstNameValidation,
        },
        {
          label: "Last Name",
          type: "text",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText:
            "Enter a minimum of 2 characters and a maximum of 50 characters.",
          validator: lastNameValidation,
        },
        {
          label: "Phone Number",
          type: "number",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText: "Enter a minimum of 8 digits and a maximum of 14 digits.",
          validator: phoneNumberValidation,
        },
      ],
      buttonText: "Next",
      onSubmit: onSubmit,
    },
    2: {
      inputs: [
        {
          label: "Address",
          type: "text",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText: "Enter at less 4 characters.",
          validator: addressValidation,
        },
        {
          label: "City",
          type: "text",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText: "Enter at less 4 characters.",
          validator: cityValidation,
        },
        {
          label: "State",
          type: "text",
          value: "",
          validate: null,
          onChange: handleChange,
          helperText: "Enter at less 4 characters.",
          validator: stateValidation,
        },
      ],
      buttonText: "Create Account",
      onSubmit: onSubmit,
    },
  };

  useEffect(() => {
    setNewSteps(stepsFlow);
  }, []);

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
        {step < 3 && <StepperComponent step={step} />}
        {/* {steps[step]} */} {/* ---WAY 2----- */}
        {/* ---WAY 3----- */}
        {step < 3 && newSteps[step] && (
          <Step data={newSteps[step]} step={step} newSteps={newSteps} />
        )}
        {step === 3 && <Complete />}
      </FormSpace>
    </Box>
  );
};

export default Form;
