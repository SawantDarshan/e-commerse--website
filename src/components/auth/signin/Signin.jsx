import React from "react";
import {
  TextField,
  FormControl,
  Button,
  Container,
  Typography,
} from "@material-ui/core";
import { Link } from "react-router-dom";

const Signin = ({signInStates,registerUser}) => {
  let {setRegisterEmail,setRegisterPassword} = signInStates
  return (
    <div style={{ paddingTop: "3rem", textAlign: "center" }}>
      <Typography variant="h3" component="div">
        SIGN IN
      </Typography>
      <Container>
        <FormControl style={{ minWidth: "50%", display: "" }}>
          <TextField
            style={{ margin: "1em" }}
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            onChange = {(e)=>setRegisterEmail(e.target.value)}
          />
          <TextField
            style={{ margin: "1em" }}
            id="password"
            label="password"
            type="password"
            variant="outlined"
            onChange = {(e)=>setRegisterPassword(e.target.value)}

          />
          <Button onClick={(e)=>registerUser()} type="button" style={{ margin: "1em" }} variant="outlined">
            SignIn
          </Button>
        </FormControl>
      </Container>
      <Typography>
      already have an acount? <Link to="/login">login</Link>
      </Typography>
    </div>
  );
};

export default Signin;
