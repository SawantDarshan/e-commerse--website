 import React from "react";
 import Login from "./login/Login"
 import Signin from "./signin/Signin";
// import useStyles from './styles';
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


const Auth = ({user,allAuthStates,registerUser,loginUser}) => {
    let {setUser,setRegisterEmail,setRegisterPassword,setLoginEmail,setLoginPassword} = allAuthStates

  return (
      <Container style={{marginTop: "5em"}}>
          <Router>
              <Switch>
                  <Route exact path="/">
                  <Signin registerUser={registerUser} signInStates={{setRegisterEmail,setRegisterPassword}}/>
                  </Route>
                  <Route exact path="/login">
                  <Login loginUser={loginUser} loginStates={{setLoginEmail,setLoginPassword}}/>
                  </Route>
              </Switch>
          </Router>
      </Container >
  );
};


export default Auth;