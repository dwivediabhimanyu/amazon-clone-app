import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  const registerHandler = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          src="http://pngimg.com/uploads/amazon/amazon_PNG24.png"
          className="login_logo"
          alt="amazon logo"
        />
      </Link>
      <div className="login_container">
        <h1>Sign-In</h1>
        <form>
          <h5>Email or mobile phone number</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small>
            <input type="checkbox" /> Keep me signed in
          </small>

          <button className="login_signInBtn" onClick={loginHandler}>
            Sign-In
          </button>
          <p>
            <small>
              By continuing, you agree to Amazon's Conditions of Use and Privacy
              Notice.
            </small>
          </p>
          <button className="login_registerBtn" onClick={registerHandler}>
            Create Amazon Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
