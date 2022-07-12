import React from "react";
import "./Cart.css";
import heart from "../../assets/Icons/heart.svg";
import trash from "../../assets/Icons/trash-2.svg";
import edit from "../../assets/Icons/edit-2.svg";
import chevron from "../../assets/Icons/chevron-down.svg";
import { useSelector, useDispatch } from "react-redux";
import { increaseQt, decreaseQt, remove } from "../../redux/actions";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cart_reducer.cart);
  // console.log(cart);
  const dispatch = useDispatch();

  return (
    <>
      <div className="cart-wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <Link to="/"> <h2 className="shopping-bag">Shopping Bag</h2></Link>
        <div className="cart-left aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--phone--1">
          {cart.map((cart) => {
            return (
              <div className="wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1" key={cart.id}>
                <div className="left aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                  <img
                    src={cart.image}
                    alt="cart titile here"
                    className="cart-img"
                  />
                  <div className="cotent-wrapper">
                    <h2>{cart.category}</h2>
                    <p>Size: Medium</p>
                    <p>Color: Medium</p>
                    <p>{cart.price}</p>
                  </div>
                </div>
                <div className="right aem-GridColumn aem-GridColumn--default--6 aem-GridColumn--phone--1">
                  <div className="btn-qty">
                    <button onClick={() => dispatch(decreaseQt(cart.id))}> - </button>
                    <input type="string" value={cart.quantity} id="numbr" />
                    <button onClick={() => dispatch(increaseQt(cart.id))}> + </button>
                  </div>
                  <div className="edit">
                    <button type="button"> <img src={edit} alt="edit icon" /> Edit </button>
                    <button type="button" onClick={() => dispatch(remove(cart.id))}>
                      <img src={trash} alt="trash icon" /> Remove
                    </button>
                    <button type="button">
                      <img src={heart} alt="save icon" /> Save for later
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="cart-right aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
          <div className="summary-wrapper">
            <strong>Pricing Summary</strong>
            <ul className="summary-content">
              <li>Subtotal</li>
              <li>$388.00</li>
            </ul>
            <ul className="summary-content">
              <li>Coupon</li>
              <li>$77.00</li>
            </ul>
            <ul className="summary-content">
              <li>Gift Card</li>
              <li>$100.00</li>
            </ul>
            <ul className="summary-content">
              <li>Estimated Tax</li>
              <li>$28.00</li>
            </ul>
            <ul className="summary-content">
              <li>Estimated Shopping</li>
              <li>Free</li>
            </ul>
            <div className="check-out">
              <button> CHECKOUT</button>
              <img src={require("../../assets/images/ppbtn.png")} alt="Paypal" />
            </div>
          </div>
        </div>
      </div>
      <div className="select-wrapper">
        <ul tabIndex={0} role="listbox">
          <li>Estimate Your Shopping</li>
          <li>Shopping to 91001 <img src={chevron} alt="dropdown" /></li>
        </ul>
        <ul tabIndex={0} role="listbox">
          <li>Enter a Coupon code</li>
          <li>20% discount applied <img src={chevron} alt="dropdown" /></li>
        </ul>
        <ul tabIndex={0} role="listbox">
          <li>Apply Gift Card </li>
          <li><img src={chevron} alt="dropdown" /></li>
        </ul>
      </div>
    </>
  );
};

export default Cart;
