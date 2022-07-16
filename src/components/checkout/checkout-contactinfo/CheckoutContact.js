import React, { useState, useEffect } from 'react';
import CheckoutTitle from '../../common-component/checkout-title/CheckoutTitle';
import ProductSummary from '../../common-component/product-summary/ProductSummary';
import Login from '../login/Login';
import "./CheckoutContact.css";

const CheckoutContact = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 769);
  const updateText = () => {
    setDesktop(window.innerWidth > 769);
  };
  useEffect(() => {
    window.addEventListener("resize", updateText);
    return () => window.removeEventListener("resize", updateText);
  });

  return (

    <>
      <CheckoutTitle />
      <section className='checkout__contact'>
        <aside className='checkout__contact_form'>
          <h3 className="checkout__guest_title">Guest Checkout</h3>
          <div className="checkout__guest_info">
            <h4 className="checkout__info_title">Contact Information</h4>
            <p className="checkout__info_desc">We’ll use these details to keep you informed on your delivery.</p>
          </div>
          <form>
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="emailInput">Name</label><br />
                <input type="text" name="emailInput" value="" id="emailInput" placeholder="abc@xyz.com" />
              </div>
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="phoneInput">Email</label><br />
                <input type="text" name="phoneInput" value="" id="phoneInput" placeholder="(222) 222-222" />
              </div>
            </div>
            <h4>1. Shipping Information</h4>
            <div className="form__input_grp">
              <label className='checkout__contact_label' htmlFor="countryList"> Country</label> <br />
              <select className="country__dropdown" id="countryList">
                <option value="USA">USA</option>
                <option value="India">India</option>
                <option value="Russia">Russia</option>
                <option value="Japan">Japan</option>
              </select>
            </div>
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="firstName">First Name</label><br />
                <input type="text" name="firstName" value="" id="firstName"/>
              </div>
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="lastName">Last Name</label><br />
                <input type="text" name="lastName" value="" id="lastName"/>
              </div>
            </div>
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="addressOne">Street Address</label><br />
                <input type="text" name="addressOne" value="" id="addressOne"/>
              </div>
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="addressTwo">Last Name</label><br />
                <input type="text" name="addressTwo" value="" id="addressTwo"/>
              </div>
            </div>
            <div className="form__input_groups">
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="cityInput">City</label><br />
                <input type="text" name="cityInput" value="" id="cityInput"/>
              </div>
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="stateInput">State</label><br />
                <select className="state__dropdown" id="stateList">
                  <option value="California">California</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Tokyo">Tokyo</option>
                  <option value="Mexico">Mexico</option>
                </select>
              </div>
              <div className="form__input_grp">
                <label className='checkout__contact_label' htmlFor="zipInput">Zip</label><br />
                <input type="text" name="zipInput" value="" id="zipInput" placeholder="91001" />
              </div>
            </div>
            <button className="checkout__contact_submitbtn">
              {isDesktop ? (<span>Continue to Shipping Method</span>) : (<span>CONTINUE</span>)}
            </button>
          </form>
          <div className='checkout__other_option'>
            <p className='shipment_method'>2. Shipping Method</p>
            <p className='payment_method'>3. Payment Method</p>
          </div>
        </aside>
        <aside className='checkout__summary'>
          <div className='checkout__login'>
            <h4 className='checkout__login_title'>Sign in for Express Checkout</h4>
            <button type='button' className='checkout__login_btn'>SIGN IN</button>
          </div>
          <ProductSummary />
        </aside>
      </section>
    </>
  )
}

export default CheckoutContact