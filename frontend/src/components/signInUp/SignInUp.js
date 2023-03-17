import React from "react";
import "./signInUp.css";
function SignInUp() {
  const signUpFunc = () => {
    const main = document.getElementById("signInUpMain");
    main.classList.add("right-panel-active");
  };
  const signInFunc = () => {
    const main = document.getElementById("signInUpMain");
    main.classList.remove("right-panel-active");
  };
  return (
    <div className="cont">
      <div className="signInUpContainer" id="signInUpMain">
        <div className="signUp">
          <form action="#" className="signInUpForm">
            <h1 className="signInUpTitle">Create Account</h1>
            <input
              className="signInUpInput"
              type="text"
              name="txt"
              placeholder="Name"
              required=""
            />
            <input
              className="signInUpInput"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="signInUpInput"
              type="password"
              name="password"
              placeholder="Password"
              required=""
            />
            <button className="signInUpButton">SIgn Up</button>
          </form>
        </div>
        <div className="signIn">
          <form action="#" className="signInUpForm">
            <h1 className="signInUpTitle">Sign In</h1>
            <input
              className="signInUpInput"
              type="email"
              name="email"
              placeholder="Email"
              required=""
            />
            <input
              className="signInUpInput"
              type="password"
              name="password"
              placeholder="Password"
              required=""
            />
            <a href="#" className="passForget">
              Forgot your password?
            </a>
            <button className="signInUpButton">SIgn In</button>
          </form>
        </div>
        <div className="overlayContainer">
          <div className="overlay">
            <div className="overlayLeft">
              <h1 className="signInUpTitle">Welcome Back!</h1>
              <p className="signInUpP">
                To keep connected with us please log in with your personal
                information
              </p>
              <button
                className="signInUpButton"
                id="signInBt"
                onClick={signInFunc}
              >
                Sign In
              </button>
            </div>
            <div className="overlayRight">
              <h1 className="signInUpTitle">Welcome!</h1>
              <p className="signInUpP">Provide your personal information</p>
              <button
                className="signInUpButton"
                id="signUpBt"
                onClick={signUpFunc}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignInUp;
