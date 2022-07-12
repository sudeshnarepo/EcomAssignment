import React from 'react';
import "./SecondaryBanner2.css";
import Map from "../../../assets/Icons/map-pin.svg";

const SecondaryBanner2 = () => {
  return (
    <>
      <section className='secondary__banner2'>
        <div className='secondary__banner2_image'></div>
        <div className='secondary__banner2_content'>
          <h2 className='secondary__banner2_title'>Conquer Your <br /> Next Adventure</h2>
          <p className='secondary__banner2_desc'>Lorem Ipsum Dolor Tempor</p>
          <button type='button' className='secondary__banner2_button'>SHOP DEVICES</button>
        </div>  
        <div className='secondary__banner2_map'>
          <img src={Map} alt="Map Pin"/>
        </div>      
      </section>
    </>
  )
}

export default SecondaryBanner2