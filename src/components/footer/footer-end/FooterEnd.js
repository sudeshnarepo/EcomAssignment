import React from 'react';
import "./FooterEnd.css";
import veniaLogo from "../../../assets/Icons/venia-logo.svg";
const FooterEnd = () => {
    return (
        <>
            <footer className='footer__end_wrapper'>
                <div className='footer__end_container'>
                    <div className="footer__venia_Logo ">
                        <img src={veniaLogo} alt="Logo" aria-hidden="true" />
                    </div>
                    <div className="footer__copyright">
                        <p>© Company Name Address Ave, City Name, State ZIP</p>
                    </div>
                    <div className="footer__terms_condition">
                        <p>Terms of Use</p>
                        <p>Privacy Policy</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default FooterEnd
