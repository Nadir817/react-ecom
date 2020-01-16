import React from "react";

import "./custombutton.scss";

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`custom-button ${isGoogleSignIn ? "google-signin" : ""} ${
      inverted ? "inverted" : ""
    }`}
    {...otherProps}
  >
    {children}
  </button>
);

export default CustomButton;
