import React from 'react';
import "./HomeBanner.css"

const HomeBanner = () => {

    return (
        <>
            <section className="home__banner">
                <div className='home__banner-content'>
                    <h2 className='home__banner_title'>Shop The New <br /> Signature Collection</h2>
                    <p className='home__banner_desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</p>
                    <button type='button' className='home__banner_btn'>SHOP NOW</button>
                </div>
                <div className='home__banner-image'></div>
            </section>
        </>
    )
}

export default HomeBanner