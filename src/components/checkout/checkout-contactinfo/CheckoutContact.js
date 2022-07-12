import React from 'react';
import "./CheckoutContact.css";

const CheckoutContact = () => {
  return (
    <>
      <section className='checkout__contact aem-Grid aem-Grid--default--12 aem-Grid--phone--1'>
        <div className='checkout__contact_form aem-GridColumn aem-GridColumn--default--8 aem-GridColumn--tablet--12 aem-GridColumn--phone--1'>
          <h3 className="guest__checkout_title">Guest Checkout</h3>
          <div className="guest__checkout_info">
            <h4 className="checkout__info_title">Contact Information</h4>
            <p className="checkout__info_desc">We’ll use these details to keep you informed on your delivery.</p>
          </div>
          <form>
            <div className="form__groups">
              <div className="form__groups_grp">
                <label for="emailInput">Name</label><br />
                <input type="text" name="emailInput" value="" className="form-control" id="emailInput" placeholder="abc@xyz.com" />
              </div>
              <div className="form__groups_grp">
                <label for="phoneInput">Email</label><br />
                <input type="text" name="phoneInput" value="" className="form-control" id="phoneInput" placeholder="(222) 222-222" />
              </div>
            </div>
            <h4>1. Shipping Information</h4>
            <label className="" for="countryList"> </label>
            <select className="country__dropdown" id="countryList">
              <option value="USA">USA</option>
              <option value="India">India</option>
              <option value="Russia">Russia</option>
              <option value="Japan">Japan</option>
            </select>
            <div className="form__groups">
              <div className="form__groups_grp">
                <label for="firstName">First Name</label><br />
                <input type="text" name="firstName" value="" className="form-control" id="firstName" placeholder="" />
              </div>
              <div className="form__groups_grp">
                <label for="lastName">Last Name</label><br />
                <input type="text" name="lastName" value="" className="form-control" id="lastName" placeholder="" />
              </div>
            </div>
            <div className="form__groups">
              <div className="form__groups_grp">
                <label for="addressOne">Street Address</label><br />
                <input type="text" name="addressOne" value="" className="form-control" id="addressOne" placeholder="" />
              </div>
              <div className="form__groups_grp">
                <label for="addressTwo">Last Name</label><br />
                <input type="text" name="addressTwo" value="" className="form-control" id="addressTwo" placeholder="" />
              </div>
            </div>
            <div className="form__groups">
              <div className="form__groups_grp">
                <label for="cityInput">City</label><br />
                <input type="text" name="cityInput" value="" className="form-control" id="cityInput" placeholder="" />
              </div>
              <div className="form__groups_grp">
                <label for="stateInput">State</label><br />
                <select className="state__dropdown" id="stateList">
                  <option vallue="California">California</option>
                  <option vallue="Delhi">Delhi</option>
                  <option vallue="Tokyo">Tokyo</option>
                  <option vallue="Mexico">Mexico</option>
                </select>
              </div>
              <div className="form__groups_grp">
                <label for="cityInput">City</label><br />
                <input type="text" name="cityInput" value="" className="form-control" id="cityInput" placeholder="" />
              </div>
            </div>
            <button className="checkout__contact_submitbtn">Continue to Shipping Method</button>
          </form>
        </div>
        <div className='checkout__summary aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--tablet--12 aem-GridColumn--phone--1'>
          outlet2
        </div>
      </section>
    </>
  )
}

export default CheckoutContact