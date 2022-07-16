import React from 'react'
import { useSelector } from 'react-redux';
import "./TopBanner.css";

const HeroBanner = () => {

const categoryName=useSelector((state)=>state.cart_reducer.categoryName)
  return (
    <>
        <section className='top__banner'>
          <div className='top__banner-content'>
            <h2 className='top__banner-title'>{categoryName}</h2>
          </div>
          <div className='top__banner-image'></div>
          <div className='top__banner_content-mob'>
            {/* <h2 className='top__banner-title'>{categoryName}</h2> */}
          </div>
        </section>
    </>
  )
}

export default HeroBanner