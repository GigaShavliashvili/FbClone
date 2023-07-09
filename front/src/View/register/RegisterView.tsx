import {
  Button,
  FormControlLabel,
  FormLabel,
  Modal,
  Radio,
  RadioGroup,
  Stack,
} from "@mui/material";
import React from "react";
import ModalHeader from "../../components/Modal/ModalHeader";
import TextFields from "../../components/Inputs/TextFields";
import DefaultSelector from "../../components/Selector/DefaultSelector";
import { month } from "../../assets/StaticData/SelectorData";
import FbText from "../../components/FbText/FbText";
import { AuthServices, RegisterBody } from "../../service/AuthService";

interface RegistrationModalProps {
  open: boolean;
  setRegisterModal: (value: boolean) => void;
}


const RegisterView: React.FC<RegistrationModalProps> = (props) => {
  const registerHandler = (e:any) =>{
    e.preventDefault();
   const loginData:RegisterBody = {
    firstName:e.target[0].value,
    lastName:e.target[2].value, 
     email:e.target[4].value,  //yup formiki 
    password:e.target[6].value,
    birthDate:e.target[8].value + "/" + e.target[10].value + "/" + e.target[12].value,
     gender:e.target[14].value,
   }
   AuthServices.register(loginData).then((res) => console.log(res))
    }
    const formRef = React.useRef<HTMLFormElement | null>(null);
  return (
    <Modal
      open={props.open}
      onClose={() => props.setRegisterModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal">
        <ModalHeader title="Sign Up" minTitle="It’s quick and easy." />
        <form onSubmit={(e) => registerHandler(e)} ref={formRef}>
          <Stack direction="column" gap={2}>
            <Stack direction="row" gap={2}>
              <TextFields label="First name" size="small" width="191px" />
              <TextFields label="Last name" size="small" width="191px" />
            </Stack>
            <Stack direction="column" gap={2}>
              <TextFields
                label="Mobile number or email"
                size="small"
                width="399px"
              />
              <TextFields label="New password" size="small" width="399px" />
            </Stack>
            <div>
              <FormLabel id="birthDate">birthDate</FormLabel>
              <Stack direction="row" gap={2} style={{ marginTop: "8px" }}>
                <DefaultSelector
                  label="month"
                  defaultValue={1}
                  options={month.map((el: string, index: number) => {
                    return {
                      label: el,
                      values: index + 1,
                    };
                  })}
                  size="small"
                  width="122px"
                />
                <DefaultSelector
                  label="date"
                  defaultValue={1}
                  options={new Array(30)
                    .fill("cont")
                    .map((el: string, index: number) => {
                      return {
                        label: index + 1,
                        values: index + 1,
                      };
                    })}
                  size="small"
                  width="122px"
                />
                <DefaultSelector label="year" size="small" width="122px" />
              </Stack>
            </div>
            <div>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="2"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="1"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="3"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </div>
          </Stack>
        </form>
        <FbText style={{ width: "400px" }} fontSize={"11px"} lineQuantity="2">
          People who use our service may have uploaded your contact information
          to Facebook. Learn more.
        </FbText>
        <FbText
          style={{ width: "400px", marginTop: "12px" }}
          fontSize={"11px"} 
          lineQuantity="2"
        >
          By clicking Sign Up, you agree to our Terms, Privacy Policy and
          Cookies Policy. You may receive SMS Notifications from us and can opt
          out any time.
        </FbText>
        <Stack justifyContent="center" direction="row">
          <Button
            variant="contained"
            onClick={() => formRef.current?.requestSubmit()}
            style={{
              background: "#36a420",
              marginTop: "22px",
              width: "170px",
              height: "3rem",
            }}
          >
            <FbText fontSize={"16px"} font="FiraGO-Bold">
              Sign Up
            </FbText>
          </Button>
        </Stack>
      </div>
    </Modal>
  );
};

export default RegisterView;
