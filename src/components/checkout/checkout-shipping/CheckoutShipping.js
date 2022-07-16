import React, { useState, useEffect } from 'react';
import CheckoutTitle from '../../common-component/checkout-title/CheckoutTitle';
import ProductSummary from '../../common-component/product-summary/ProductSummary';
import "./CheckoutShipping.css";

const CheckoutShipping = () => {
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
      <section className='checkout__shipping'>
        <aside className='checkout__shipping_wrapper'>
          <h3 className="checkout__guest_title">Guest Checkout</h3>
          <div className='checkout__shipping_information'>
            <div className='shipping__information_title'>
              <h3 className='shipping_title'>Shipping Information</h3>
              <p className='shipping__edit'>
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828">
                  <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#E26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg> Edit</p>
            </div>
            <div className='shipping__information_details'>
              <p><span>q_farhan@gmail.com</span>  <br /> <span>+1 (555) 229-3367</span> </p>
              <p><span>Qadim Farhan</span>  <br /> <span> 1098 Wapello Street Altadena, California 91001 United States</span> </p>
            </div>
          </div>
          <div className='checkout__shipping_method'>
            <h4 className='shipping__method_title'>2. Shipping Method</h4>
            <div className='shipping_radio_field'>
              <input type="radio" name='standard' /> <span> <b>Standard Shipping</b> (4-8 business days via USPS) FREE</span>
            </div>
            <div className='shipping_radio_field'>
              <input type="radio" name='express' /> <span> <b>Express Delivery</b> (2-5 business days via USPS) $17.95</span>
            </div>
            <div className='shipping_radio_field'>
              <input type="radio" name='nextDay' /> <span> <b>Next Day Delivery</b> (Next business days via FedEx) $53.61</span>
            </div>
          </div>
          <button className="checkout__shipping_button">
              {isDesktop ? (<span>Continue to Payment</span>) : (<span>CONTINUE</span>)}
            </button>
          <div className='checkout__other_option'>
            <p className='payment_method'>3. Payment Method</p>
          </div>
        </aside>
        <aside className='checkout__shipping_summary'>
          <ProductSummary />
        </aside>
      </section>
    </>
  )
}

export default CheckoutShipping;