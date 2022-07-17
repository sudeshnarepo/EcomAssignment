import "./css/ProductDetail.css";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import star from "../../assets/Icons/star.svg";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/actions/index";
import FooterUp from "../footer/footer-up/FooterUp";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState([]);
  const [quantity, setQuantity] = useState(0);
  //store useDispatch
  const dispatch = useDispatch();
  const handleCart = (product) => {
    // console.log(product.id);
    dispatch(addItem({ id, quantity }));
  };
  const getProduct = async () => {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    setProduct(await response.json());
  };
  useEffect(() => {
    getProduct();
  });

  return (
    <>
      <div className="product__detail ">
        <div className="product__detail_wrapper1">
          <div className="product__detail_left">
            <div className="product__image">
              <img className="product__image_img" src={product.image} alt="{product.title}" />
            </div>
            <div className="product__image_slider">
              <div><img className="slider_image" src={product.image} alt="swatch01" /></div>
              <div><img className="slider_image" src={product.image} alt="swatch01" /></div>
              <div><img className="slider_image" src={product.image} alt="swatch01" /></div>
              <div><img className="slider_image" src={product.image} alt="swatch01" /> </div>
              <div><img className="slider_image" src={product.image} alt="swatch01" /></div>
            </div>
          </div>
          <div className="product__detail_right">
            <h2 className="product__detail_title">{product.title}</h2>
            <p className="product__detail_price"> ${product.price}</p>
            <div className="product__detail_rating">
              <span>
                <img className="rating_icon" src={star} alt="rating icon 1" />
                <img className="rating_icon" src={star} alt="rating icon 1" />
              </span>
              <span>
                <img className="rating_icon" src={star} alt="rating icon 2" />
              </span>
              <span>
                <img className="rating_icon" src={star} alt="rating icon 3" />
              </span>
              <span>
                <img className="rating_icon" src={star} alt="rating icon 4" />
              </span>
              <span>
                <img className="rating_icon" src={star} alt="rating icon 5" />
              </span>
              <span> {product.rating && product.rating.rate}</span>
            </div>
            <p className="product__detail_description">{product.description}</p>
            <hr />
            <div className="product__detail_buttons">
              <label>Quantity</label>
              <div className="product__detail_btn">
                <button className="price_button" onClick={() => setQuantity((pre) => pre - 1)}>
                  -
                </button>
                <input className="input_value" value={quantity} id="numbr" />
                <button className="price_button" onClick={() => setQuantity((pre) => pre + 1)}>
                  +
                </button>
              </div>
            </div>
            <button onClick={() => handleCart(product)} type="button" className="add__cart_btn">
              Add to cart
            </button>
          </div>
        </div>
        <div className="product__detail_wrapper2">
          <h2 className="product_title1">{product.title}</h2>
          <p className="product_title2">Description</p>
          <p className="product_description">{product.description}
          <hr className="product_description_line"/>
          </p>
        </div>
      </div>
      <FooterUp/>
    </>
  );
};

export default ProductDetail;
