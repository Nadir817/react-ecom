import React from "react";
import CustomButton from "../custom-button/CustomButton";
import CartItem from "../cart-item/CartItem";
import "./CartDropdown.scss";
import { connect } from "react-redux";

function CartDropdown({ cartItems }) {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.map(item => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <CustomButton>CHECKOUT</CustomButton>
    </div>
  );
}

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems
});

export default connect(mapStateToProps)(CartDropdown);
