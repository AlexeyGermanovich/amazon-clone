import React from "react";
import "./Checkout.css";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          className="checkout__ad"
          src="https://www.888888.by/images/os_imagegallery_176/original/bras11.jpg"
          alt=""
        />
      </div>

      <div>
        <h2 className="checkout__title">Your shopping basket</h2>
      </div>

      <div className="checkout__right"></div>
    </div>
  );
}

export default Checkout;
