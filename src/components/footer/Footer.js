import React from "react";
import "./Footer.css";
import facebook from "../../assets/Icons/facebook.svg";
import instagram from "../../assets/Icons/instagram.svg";
import twitter from "../../assets/Icons/twitter.svg";

const Footer = () => {
  return (
    <>
      <div className="footer-wrapper aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <div className="footer-container aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
          <strong>Account</strong>
          <ul>
            <li>
              <a href="/" target="_self">
                Sign in
              </a>
            </li>
            <li>
              <a href="/" target="_self">
                Register
              </a>
            </li>
            <li>
              <a href="/" target="_self">
                Order Status
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
          <strong>About Us</strong>
          <ul>
            <li>
              <a href="/" target="_self">
                Our Story
              </a>
            </li>
            <li>
              <a href="/" target="_self">
                Courses
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
          <strong>Help</strong>
          <ul>
            <li>
              <a href="/" target="_self">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" target="_self">
                Order Status
              </a>
            </li>
            <li>
              <a href="/" target="_self">
                Return
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-container last aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--phone--1">
          <strong>Follow Us</strong>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="social-icons">
            <img src={instagram} alt="instagram" />
            <img src={facebook} alt="facebook" />
            <img src={twitter} alt="twitter" />
          </div>
        </div>
      </div>
      <div className="footer-end footEnd1 aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <div className="logo aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
          <h2>
            <span>V</span>ENIA
          </h2>
        </div>
        <div className="copyright footEnd1 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
          <p>© Company Name Address Ave, City Name, State ZIP</p>
        </div>
        <div className="terms footEnd1 aem-GridColumn aem-GridColumn--default--4 aem-GridColumn--phone--1">
          <ul>
            <li>
              <a href="/" target="_self">
                Terms of Use
              </a>
            </li>
            <li>
              <a href="/" target="_self">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
