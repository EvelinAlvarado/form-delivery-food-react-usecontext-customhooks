import { Box, Typography } from "@mui/material";
import { LogoSpace, MainSpace, FormSpace, Img } from "./styles";
import UserData from "./UserData";
import PersonalInformation from "./PersonalInformation";
import DeliveryDetails from "./DeliveryDetails";
import Complete from "./Complete";
import Stepper from "../Stepper";

const Form = () => {
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
        <UserData />
        <PersonalInformation />
        <DeliveryDetails />
      </FormSpace>
    </Box>
  );
};

export default Form;
