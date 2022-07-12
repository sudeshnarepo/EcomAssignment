import React from 'react';
import "./SecondaryBanner1.css"

const SecondaryBanner1 = () => {

    return (
        <>
            <section className="secondary__banner1">
                <div className='secondary__banner1_content'>
                    <h2 className='secondary__banner1_title'>Shop The New <br /> Signature Collection</h2>
                    <h5 className='secondary__banner1_title2'>Lorem Ipsum Dolor Tempor</h5>
                    <p className='secondary__banner1_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                    <div className='secondary__banner1_buttons'>
                        <button type='button' className='button__1'>SHOP COLLECTION</button>
                        <button type='button' className='button__2'>SHOP NOW</button>                        
                    </div>
                    <hr className='secondary__banner2_bottomline'/>
                </div>
                <div className='secondary__banner1-image'></div>
            </section>
        </>
    )
}

export default SecondaryBanner1