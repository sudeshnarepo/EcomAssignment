import React from 'react';
import test from "../../../assets/images/test.png"
import "./ProductCategory.css"

const ProductCategory = () => {
  return (
    <>
      <section className="product__category">
      <article className="product__category_card">
            <a href='#'>
              <img className="product__category_image" src={test} alt="" />
            </a>
            <div className='product__category_content'>
            <h5 className="product__category_title">Show Women</h5>
            <p className="product__category_price">Lorem ipsum dolor sit amet</p> 
              </div>           
          </article>
          <article className="product__category_card">
            <a href='#'>
              <img className="product__category_image" src={test} alt="" />
            </a>
            <div className='product__category_content'>
              <h5 className="product__category_title">Show Women</h5>
              <p className="product__category_price">Lorem ipsum dolor sit amet</p>
            </div>            
          </article>
          <article className="product__category_card">
            <a href='#'>
              <img className="product__category_image" src={test} alt="" />
            </a>
            <div className='product__category_content'>
              <h5 className="product__category_title">Show Women</h5>
              <p className="product__category_price">Lorem ipsum dolor sit amet</p>
            </div>            
          </article>
          <article className="product__category_card">
            <a href='#'>
              <img className="product__category_image" src={test} alt="" />
            </a>
            <div className='product__category_content'>
              <h5 className="product__category_title">Show Women</h5>
              <p className="product__category_price">Lorem ipsum dolor sit amet</p>
            </div>            
          </article>
      </section>
    </>
  )
}

export default ProductCategory