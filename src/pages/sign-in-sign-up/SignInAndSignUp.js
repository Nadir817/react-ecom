import React from "react";
import SignIn from "../../components/signin/signin";
import SignUp from "../../components/sign-up/signup";

import "./signin-and-signup.scss";

const SignInAndSignUp = () => {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SignInAndSignUp;
