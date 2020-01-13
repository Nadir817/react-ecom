import React from "react";
import "./CartIcon.scss";
import { connect } from "react-redux";
import { toggleCart } from "../../redux/cart/cart.action";
import { selectCartCount } from "../../redux/cart/cart.selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

function CartIcon({ toggleCart, itemCount }) {
  return (
    <div className="cart-icon" onClick={toggleCart}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  toggleCart: () => dispatch(toggleCart())
});

const mapStatetoProps = state => ({
  itemCount: selectCartCount(state)
});

export default connect(mapStatetoProps, mapDispatchToProps)(CartIcon);
