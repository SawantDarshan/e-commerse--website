import React from "react";
import Login from "./login/Login";
import Signin from "./signin/Signin";
// import useStyles from './styles';
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { DeveloperMode } from "@material-ui/icons";

const Auth = ({ allAuthStates, registerUser, loginUser, demoLogin }) => {
  let {
    setRegisterEmail,
    setRegisterPassword,
    setLoginEmail,
    setLoginPassword,
  } = allAuthStates;

  return (
    <Container className="p-5 my-5">
      <Router>
        <p className="text-center m-2 bg-orange p-1 text-white rounded">
          Click demo for quick demo of website it will fake login and let you browse
          other components. Enjoy!
        </p>
        <br />
        <div className="text-center">
          <Button variant="success" onClick={demoLogin} as={Link} to="/">
            <DeveloperMode /> Live Demo
          </Button>
        </div>
        <Switch>
          <Route exact path="/">
            <Signin
              registerUser={registerUser}
              signInStates={{ setRegisterEmail, setRegisterPassword }}
            />
          </Route>
          <Route exact path="/login">
            <Login
              loginUser={loginUser}
              loginStates={{ setLoginEmail, setLoginPassword }}
            />
          </Route>
        </Switch>
      </Router>
    </Container>
  );
};

export default Auth;
