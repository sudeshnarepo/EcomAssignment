import React, { useState, useEffect } from 'react';
import CheckoutTitle from '../../common-component/checkout-title/CheckoutTitle';
import ProductSummary from '../../common-component/product-summary/ProductSummary';
import "./CheckoutPayment.css";

const CheckoutPayment = () => {
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
            <section className='checkout__payment'>
                <aside className='checkout__payment_wrapper'>
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
                    <div className='checkout__payment_information'>
                        <h4 className='payment_info_title'>3. Payment Information</h4>
                        <div className='payment_card_title'>
                            <input type="radio" name="creditCard" className='payment_card_radio' /> <span>Credit Card</span>
                        </div>
                        <form className='payment__form'>
                            <div className='payment__form_input'>
                                <label className='card_label' htmlFor="cardName">Name on Card</label><br />
                                <input type="text" name="cardName" value="" id="cardName" className='card_input' />
                            </div>
                            <div className='payment__form_input'>
                                <label className='card_label' htmlFor="cardNumber">Credit Card Number</label><br />
                                <input type="text" name="cardNumber" value="" id="cardNumber" className='card_input' />
                            </div>
                            <div className='payment__form_groups'>
                                <div className='payment__form_input'>
                                    <label className='card_label' htmlFor="expiryDate">Expiration Date</label><br />
                                    <input type="text" name="expiryDate" value="" id="expiryDate" className='expiry_date' />
                                </div>
                                <div className='payment__form_input'>
                                    <label className='card_label' htmlFor="cvv">CVV</label><br />
                                    <input type="text" name="cvv" value="" id="cvv" className='cvv' />
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 22 22" className='card_help'>
                                    <g id="help-circle" transform="translate(-1 -1)">
                                        <circle id="Ellipse_126" data-name="Ellipse 126" cx="10" cy="10" r="10" transform="translate(2 2)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        <path id="Path_38006" data-name="Path 38006" d="M9.09,9a3,3,0,0,1,5.83,1c0,2-3,3-3,3" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                        <line id="Line_472" data-name="Line 472" x2="0.01" transform="translate(12 17)" fill="none" stroke="#172026" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                    </g>
                                </svg>

                            </div>
                            <input type="checkbox" name="checkbox" /> <span>Billing address same as shipping address</span>                            
                            <div className='payment_paypal'>
                            <input type="radio" name="creditCard" className='payment_card_radio' /> <span>PayPal</span>
                            </div>
                        </form>
                    </div>
                    <button className="checkout__shipping_button">
                        {isDesktop ? (<span>Continue to Review Order</span>) : (<span>CONTINUE</span>)}
                    </button>
                </aside>
                <aside className='checkout__payment_summary'>
                    <ProductSummary />
                </aside>
            </section>
        </>
    )
}

export default CheckoutPayment;