import React, { useState, useEffect } from 'react';
import CheckoutTitle from '../../common-component/checkout-title/CheckoutTitle';
import ProductSummary from '../../common-component/product-summary/ProductSummary';
import "./CheckoutOrderSummary.css";

const CheckoutOrderSummary = () => {
    return (

        <>
            <CheckoutTitle />
            <section className='checkout__order_summary'>
                <aside className='checkout__order_summary_wrapper'>
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
                    <div className='checkout__shipping_method_details'>
                        <div className='shipping__method__details_title'>
                            <h3 className='shipping_title'>Shipping Method</h3>
                            <p className='shipping__edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828">
                                    <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#E26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg> Edit</p>
                        </div>
                        <div className='shipping__information_details'>
                            <p>Standard Shipping <br /> Est. delivery in 4 - 8 business days FREE</p>
                        </div>
                    </div>
                    <div className='checkout__payment_method_info'>
                        <div className='payment__method__details_title'>
                            <h3 className='payment_title'>Payment Information</h3>
                            <p className='payment__edit'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="15" viewBox="0 0 22.061 21.828">
                                    <path id="edit-2" d="M17,3a2.828,2.828,0,0,1,4,4L7.5,20.5,2,22l1.5-5.5Z" transform="translate(-1 -1.172)" fill="none" stroke="#E26A2C" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                </svg> Edit</p>
                        </div>
                        <div className='shipping__information_details'>
                            <p>Credit Card<br />Visa ending in 4567</p>
                        </div>
                    </div>
                    <div className='checkout__order_summary_info'>
                        <h3 className='payment_title'>Payment Information</h3>
                        <div className='order__products'>
                             <div className='order__product_details'>
                                <img className='order__product_img' alt='product'/>
                                <div className='order__product_info'>
                                    <h4>Electric Leggings</h4>
                                    <p>Size: Medium</p>
                                    <p>Color: Storm</p>
                                    <p>Quantity: 2</p>
                                </div>
                             </div>
                        </div>
                    </div>
                    <button className="checkout__shipping_button">Place Order</button>
                    <div className='terms__condition'>
                        <p>By clicking confirm order you agree to our <span>Terms and Conditions</span></p>
                    </div>
                </aside>
                <aside className='checkout__payment_summary'>
                    <ProductSummary />
                </aside>
            </section>
        </>
    )
}

export default CheckoutOrderSummary;