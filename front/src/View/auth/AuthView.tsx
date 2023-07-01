import React from "react";
import { AuthBody } from "./Auth.styles";
import FbText from "../../components/FbText/FbText";
import {  Card, Stack, Box, Divider, Button } from "@mui/material";
import TextFields from "../../components/Inputs/TextFields";
import AuthFooter from "../../components/AuthFooter/AuthFooter";
import { useNavigate} from "react-router-dom";

const AuthView: React.FC = () => {
  const navigate  = useNavigate()
const loginHandler = (e:any) =>{
  e.preventDefault()
 console.log(e)
}

  return (
    <div>
    <AuthBody>
      <Stack direction="row" justifyContent="center" style={{ height: "100%" }}>
        <Stack direction="row" spacing={10}>
          <Box sx={{ width: "500px", marginTop: "12rem" }}>
            <FbText color="#1877f2" fontSize={"54px"} font="FiraGO-Bold">
              Cappbook
            </FbText>
            <FbText
              color="#1c1e21"
              lineQuantity="2"
              style={{ width: undefined, lineHeight: "32px" }}
              fontSize={"28px"}
              font="FiraGo-Regular"
            >
              Connect with friends and the world around you on Facebook.
            </FbText>
          </Box>
       {/*    <Stack justifyContent="center" direction="row"> */}
            <Stack justifyContent="start"spacing={3}  direction="column">
              <Card
                sx={{
                  boxShadow: "0 2px 4px rgba(0, 0, 0, .1), 0 8px 16px rgba(0, 0, 0, .1)",
                  width: 396,
                  minHeight: 360,
                  padding: "20px",
                  borderRadius: "10px", 
                  marginTop: "8rem",
                }}
              >
                <form onSubmit={(e) => loginHandler(e)}>
                  <Stack spacing={2} direction="column">
                    <TextFields
                      type="email"
                      id="outlined-basic"
                      required
                      error={false}
                      label="Email or phone number"
                    />
                    <TextFields id="outlined-basic" label="Password" type="password"   required
                         />
                    <Button variant="contained" type="submit">
                      <FbText fontSize={"20px"} font="FiraGO-bold">
                        Log in
                      </FbText>
                    </Button>
                    <Stack justifyContent="center" direction="row">
                      <a>forget Password?</a>
                    </Stack>
                  </Stack>
                </form>
                <Divider style={{ padding: "12px 0px" }} />
                <Stack justifyContent="center" direction="row">
                  <Button
                    variant="contained"
                    style={{ background: "#36a420", marginTop: "22px", height: "3rem"}}
                  >
                    <FbText fontSize={"14px"} font="FiraGO-Bold">
                      create new account
                    </FbText>
                  </Button>
                </Stack>
              </Card>
              <FbText style={{textAlign:"center", width:"100%"}} color="black" fontSize={"14px"} font="FiraGO-Regular">
              Create a Page for a celebrity, brand or business.
            </FbText>
           {/*  </Stack> */}
          </Stack>
        </Stack>
      </Stack>
    </AuthBody>
    <Stack justifyContent={"center"} direction="row">

    <AuthFooter/>
    </Stack>
    </div>
  );
};

export default AuthView;
