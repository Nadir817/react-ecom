import React from "react";
import CustomButton from "../custom-button/CustomButton";
import "./CartDropdown.scss";

export default function CartDropdown() {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
}
