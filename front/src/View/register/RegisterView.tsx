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

interface RegistrationModalProps {
  open: boolean;
  setRegisterModal: (value: boolean) => void;
}

const RegisterView: React.FC<RegistrationModalProps> = (props) => {
  return (
    <Modal
      open={props.open}
      onClose={() => props.setRegisterModal(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className="modal">
        <ModalHeader title="Sign Up" minTitle="It’s quick and easy." />
        <form>
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
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
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
