import React from 'react';
import "./ProductSummary.css"

const ProductSummary = () => {
  return (
    <>
        <div className="product__summary_wrapper">
            <strong>Pricing Summary</strong>
            <ul className="product__summary_content">
              <li>Subtotal</li>
              <li>$388.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Coupon</li>
              <li>$77.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Gift Card</li>
              <li>$100.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Estimated Tax</li>
              <li>$28.00</li>
            </ul>
            <ul className="product__summary_content">
              <li>Estimated Shopping</li>
              <li>Free</li>
            </ul>
            <ul className="product__summary_content" >
              <li style={{fontWeight:'bold'}}>Estimated Total</li>
              <li style={{fontWeight:'bold'}}>$ 268.33</li>
            </ul>
          </div>
    </>
  )
}


export default ProductSummary