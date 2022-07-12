import React from 'react'
import "./TopBanner.css";

const HeroBanner = () => {
  return (
    <>
        <section className='top__banner'>
          <div className='top__banner-content'>
            <h2 className='top__banner-title'>Men's <br/> Outerwear</h2>
          </div>
          <div className='top__banner-image'></div>
          <div className='top__banner_content-mob'>
            <h2 className='top__banner-title'>Men's <br/> Outerwear</h2>
          </div>
        </section>
    </>
  )
}

export default HeroBanner