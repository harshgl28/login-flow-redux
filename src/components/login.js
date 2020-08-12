import React from "react";
import { connect } from "react-redux";
import {login, logout} from '../redux/actions'



const Login = ({ loggedin , login, logout}) => {
  console.log(loggedin);
  return (
    <div>
      <h2>{loggedin ? "" : "not "}logged in</h2>
      <br/>
      <button onClick = {loggedin ? ()=>logout(): () => login() }>{loggedin ? "logout" : "login"}</button>
    </div>
  );
};

const mapstatetoprops = (state) => {
  const loggedin = state.login.loggedin;
  return { loggedin };
};

export default connect(mapstatetoprops, {login, logout})(Login);
