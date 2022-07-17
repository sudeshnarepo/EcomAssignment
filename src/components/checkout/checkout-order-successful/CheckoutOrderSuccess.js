import test from '../../../assets/images/test.png';
import "./CheckoutOrderSuccess.css";
import FooterUp from '../../footer/footer-up/FooterUp';

const CheckoutOrderSuccess = () => {
    return (

        <>
            <h2 className='checkout_order_success_title'>Order Successful</h2>
            <section className='checkout__order_success'>
                <aside className='checkout__order_success_wrapper'>
                    <h3 className="checkout__order_number">Order Number #12234</h3>
                    <div className='order__shipping_details'>
                        <div className='order__shipping_information'>
                            <h3 className='order__shipping_title'>Shipping Information</h3>
                            <p className='order__shipping_address'><span>q_farhan@gmail.com </span><br /><span>+1 (555) 229-3367</span></p>
                        </div>
                        <div className='order__shipping_information'>
                            <h3 className='order__shipping_title'>Shipping Method</h3>
                            <p className='order__shipping_address'>Standard Shipping Est. delivery in 4 - 8 business days FREE</p>
                        </div>
                    </div>
                    <div className='order__shipping_address_payment'>
                        <div className='order__payment_information'>
                            <h3 className='order__shipping_title'>Qadim Farhan</h3>
                            <p className='order__shipping_address'>1098 Wapello Street Altadena, California 91001 United States</p>
                        </div>
                        <div className='order__payment_information'>
                            <h3 className='order__shipping_title'>Payment Information</h3>
                            <p className='order__shipping_address'><span>Credit Card </span> <br />Visa ending in 4567</p>
                        </div>
                    </div>
                    <div className='checkout__order_product_info'>
                        <h3 className='payment_title'>3 items in your order</h3>
                        <div className='order__products'>
                            <div className='order__product_details'>
                                <img className='order__product_img' src={test} alt='product' />
                                <div className='order__product_info'>
                                    <h4>Electric Leggings</h4>
                                    <p>Size: Medium</p>
                                    <p>Color: Storm</p>
                                    <p>Quantity: 2</p>
                                </div>
                            </div>
                            <div className='order__product_details'>
                                <img className='order__product_img' src={test} alt='product' />
                                <div className='order__product_info'>
                                    <h4>Electric Leggings</h4>
                                    <p>Size: Medium</p>
                                    <p>Color: Storm</p>
                                    <p>Quantity: 2</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='order__shipment_description'>
                        <p className='shipment__description'>You will also receive an email with the details and we will let you know when your order has shipped.</p>
                        <p className='shipment__description'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. For assistance call Support at 1-800-867-5309, M - F, 9am - 8pm EST.</p>
                    </div>
                </aside>
                <aside className='checkout__offer_wrapper'>
                    <p className='offer__title'>Give us a follow to SAVE 20% on your next order.</p>
                    <div className='social__icons'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="25" viewBox="0 0 13 22">
                            <path id="facebook" d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z" transform="translate(-6 -1)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 22 22">
                            <g id="instagram" transform="translate(-1 -1)">
                                <rect id="Rectangle_1587" data-name="Rectangle 1587" width="20" height="20" rx="5" transform="translate(2 2)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <path id="Path_38012" data-name="Path 38012" d="M16,11.37A4,4,0,1,1,12.63,8,4,4,0,0,1,16,11.37Z" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                                <line id="Line_475" data-name="Line 475" x2="0.01" transform="translate(17.5 6.5)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                            </g>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="27" height="25" viewBox="0 0 24 20.142">
                            <path id="twitter" d="M23,3a10.9,10.9,0,0,1-3.14,1.53,4.48,4.48,0,0,0-7.86,3v1A10.66,10.66,0,0,1,3,4s-4,9,5,13a11.64,11.64,0,0,1-7,2c9,5,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83A7.72,7.72,0,0,0,23,3Z" transform="translate(0 -1.912)" fill="none" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </svg>
                    </div>
                </aside>
            </section>
            <FooterUp/>
        </>
    )
}

export default CheckoutOrderSuccess;