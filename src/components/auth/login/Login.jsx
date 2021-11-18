import React from 'react'
import { TextField, FormControl, Button, Container, Typography } from "@material-ui/core";
import { Link, useHistory } from 'react-router-dom';

const Login = ({loginStates,loginUser}) => {
  let {setLoginEmail,setLoginPassword} = loginStates
  let history = useHistory()
    return (
        <div 
        style={{ paddingTop: "3rem",textAlign: "center" }}>
        <Typography variant="h3" component="div">LOGIN</Typography>
        <Container>
          <FormControl style={{ minWidth: "50%", display: "" }}>
            <TextField
              style={{ margin: "1em" }}
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              onChange = {(e)=>setLoginEmail(e.target.value)}
            />
            <TextField
              style={{ margin: "1em" }}
              id="password"
              label="password"
              type="password"
              variant="outlined"
              onChange={(e)=>setLoginPassword(e.target.value)}
            />
            <Button type="button" style={{ margin: "1em" }} variant="outlined" onClick={()=>{
              loginUser()
              history.push("/")
            }}>
              Login
            </Button>
          </FormControl>
        </Container>
        <Typography>
      create new account : <Link to="/">signIn</Link>
      </Typography>
      </div>
    )
}

export default Login
