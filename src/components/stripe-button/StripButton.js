import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripButton = ({ price }) => {
  const stripePrice = price * 100;
  const publishableKey = "pk_test_F73HMIEWjUwkZe6vXNTDLokS00Ba9INzmI";
  const onToken = token => {
    console.log(token);
    alert("Successful Payment");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="Shop Monster Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/HKb.svg"
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripButton;
