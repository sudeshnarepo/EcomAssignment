import "./css/Productlist.css";
import { ReactComponent as Sliders } from "../../assets/Icons/sliders.svg";
import { ReactComponent as ArrowUp } from "../../assets/Icons/arrow-up.svg";
import { ReactComponent as ArrowDown } from "../../assets/Icons/arrow-down.svg";
import { ReactComponent as ArrowLeft } from "../../assets/Icons/chevron-left.svg";
import { ReactComponent as ArrowRight } from "../../assets/Icons/chevron-right.svg";
import timesIcon from "../../assets/Icons/x.svg";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { setAllitem, setLoading } from "../../redux/actions";
import { filterCategory } from "../../redux/actions";
import { orderBy } from "lodash";
const ProductList = () => {
  const [addToWishlist, setAddToWishlist] = useState(false);
  const { loading, allProduct } = useSelector((state) => state.cart_reducer);
  const [showFilter, setShowFilter] = useState(false);
  const [checkedId, SetCheckedId] = useState(null);
  const [product, setProduct] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  // const getProducts = async () => {
  //   const response = await fetch("https://fakestoreapi.com/products/");
  //   const data = await response.json();
  //   setProduct(data);
  //   dispatch(setAllitem(data));
  //   dispatch(setLoading(false));
  // };
  // useEffect(() => {
  //   getProducts();
  // }, []);
  useEffect(() => {
    switch (location.pathname) {
      case "/product":
        dispatch(filterCategory('All'));
        break;
      case "/product/Men":
        dispatch(filterCategory("men's clothing"));
        break;
      case "/product/jewelery":
        dispatch(filterCategory("jewelery"));
        break;
      case "/product/Women":
        dispatch(filterCategory("women's clothing"));
        break;
      case "/product/electronics":
        dispatch(filterCategory("electronics"));
        break;
      default:  dispatch(filterCategory("All"));
      break
    }
    console.log(location,product,allProduct)
  }, [location]);
  useEffect(()=>{
setProduct(allProduct)
  },[allProduct])
  const handleClick = () => {
    showFilter === true ? setShowFilter(false) : setShowFilter(true);
  };

  const checkProduct = (e) => {
    let value = e.target.value;
    if (value === checkedId) {
      SetCheckedId(null);
    } else {
      SetCheckedId(value);
      dispatch(filterCategory(value));

      switch (value) {
        case "men's clothing":
          navigate(`men`);
          break;
        case "women's clothing":
          navigate(`women`);
          break;
        case "electronics":
          navigate(`${value}`);
          break;
        case "jewelery":
          navigate(`${value}`);
          break;
        case "All":
          navigate(`/product`);
          break;
        default:
          break;
      }
    }
  };
  const handleSort = (e) => {
    const name = e.target.value;
    if (name === "price") {
    let sortArray=  orderBy(allProduct, [name], ["asc"]);
    setProduct(sortArray)
    } else {
      let sortArray= orderBy(allProduct, [(c) => c.rating.rate], ["dsc"]);
      setProduct(sortArray)
    }
  };
  const Loading = () => {
    return <>Loading.....</>;
  };

  const ShowProducts = (e) => {
    return (
      <>
        {product.map((product) => {
          return (
            <div
              onClick={() => navigate(`/product/${product.id}`)}
              className="product_cards_card"
              key={product.id}
            >
              <img
                className="product__card_image"
                src={product.image}
                alt={product.title}
              />
              <h5 className="product__card_title">
                {product.title.substring(0, 15)}
              </h5>
              <p className="product__card_price">${product.price}</p>
              <div className="product__card_save">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22.903"
                  height="20.232"
                  viewBox="0 0 22.903 20.232"
                  onClick={() => setAddToWishlist(!addToWishlist)}
                >
                  <path
                    id="heart"
                    d="M20.84,4.61a5.5,5.5,0,0,0-7.78,0L12,5.67,10.94,4.61a5.5,5.5,0,0,0-7.78,7.78l1.06,1.06L12,21.23l7.78-7.78,1.06-1.06a5.5,5.5,0,0,0,0-7.78Z"
                    transform="translate(-0.549 -1.998)"
                    fill={addToWishlist ? "#333" : "none"}
                    stroke="#172026"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                </svg>
              </div>
            </div>
          );
        })}
      </>
    );
  };

  return (
    <>
      <section className="product__container aem-Grid aem-Grid--default--12 aem-Grid--phone--1">
        <aside className="product__filter aem-GridColumn aem-GridColumn--default--3 aem-GridColumn--tablet--12 aem-GridColumn--phone--1">
          <div className="category">
            <ul>
              <li>
                <a href="/">Clothing</a>
              </li>
              <li>
                {" "}
                <a href="/"> / </a>
              </li>
              <li>
                <a href="/">Women's</a>
              </li>
              <li>
                <a href="/"> / </a>
              </li>
              <li>
                <a href="/" className="product__filter-outwear">
                  Outerwear
                </a>
              </li>
            </ul>
          </div>
          <div className="product__filter_btn">
            <h2 onClick={handleClick} className="filter__mob">
              <Sliders style={{ width: "15px", height: "15px" }} />
              <span> Filter Results</span>
            </h2>
            <h2 className="filter__mob">
              <ArrowUp style={{ width: "12px", height: "12px" }} />
              <ArrowDown style={{ width: "12px", height: "12px" }} />
              <span> Sort Products</span>
            </h2>
          </div>

          <h3 className="filter__desktop"> Filters </h3>

          <div
            className={
              showFilter
                ? "product__filter_list active"
                : "product__filter_list"
            }
          >
            <div className="filter__button_mob">
              <h2>Filters</h2>
              <img
                onClick={handleClick}
                src={timesIcon}
                alt="Button to close fliter bar"
              />
            </div>
            <hr />
            <div className="filter__item">
              <h3>Categories</h3>
              <ul>
                <li
                // onClick={() => dispatch(filterCategory("all"))}
                >
                  <input
                    value="All"
                    type="checkbox"
                    id={1}
                    checked={checkedId === "All"}
                    name="checkbox"
                    onChange={checkProduct}
                  />
                  <span>All</span>
                </li>
                <li>
                  <input
                    value="jewelery"
                    type="checkbox"
                    id={2}
                    checked={checkedId === "jewelery"}
                    name="checkbox"
                    onChange={checkProduct}
                  />
                  <span>Jewellery</span>
                </li>
                <li>
                  <input
                    value="electronics"
                    type="checkbox"
                    id={3}
                    checked={checkedId === "electronics"}
                    name="checkbox"
                    onChange={checkProduct}
                  />
                  <span>Electronics</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="men's clothing"
                    id={4}
                    checked={checkedId === "men's clothing"}
                    onChange={checkProduct}
                  />
                  <span>Men's Clothing</span>
                </li>
                <li>
                  <input
                    type="checkbox"
                    name="checkbox"
                    value="women's clothing"
                    id={5}
                    checked={checkedId === "women's clothing"}
                    onChange={checkProduct}
                  />
                  <span>Women's Clothing</span>
                </li>
              </ul>
            </div>
            <hr />
          </div>
        </aside>
        <aside className="product__card_wrapper aem-GridColumn aem-GridColumn--default--9 aem-GridColumn--tablet--12 aem-GridColumn--phone--1">
          <div className="product__card_result">
            <div>{allProduct.length} Results</div>
            <select onChange={handleSort}>
              <option value="price">Sort By Price</option>
              <option value="rating">Sort By Rating</option>
            </select>
          </div>
          <div className="product_cards">
            <ShowProducts />
          </div>
          <div className="product__pagination">
            <button type="button" className="pagination__btn">
              <ArrowLeft />
            </button>
            <ul tabIndex={0} role="listbox" className="pagination__list">
              <li>
                <Link
                  to="/product/women"
                  target="_self"
                  onClick={() => dispatch(filterCategory("women's clothing"))}
                >
                  1
                </Link>
              </li>
              <li>
                <Link
                  to="/product/men"
                  target="_self"
                  onClick={() => dispatch(filterCategory("men's clothing"))}
                >
                  2
                </Link>
              </li>
              <li>
                <Link
                  to="/product/electronics"
                  target="_self"
                  onClick={() => dispatch(filterCategory("electronics"))}
                >
                  3
                </Link>
              </li>
              <li>
                <Link
                  to="/product/jewelery"
                  target="_self"
                  onClick={() => dispatch(filterCategory("jewelery"))}
                >
                  4
                </Link>
              </li>
            </ul>
            <button type="button" className="pagination__btn">
              <ArrowRight />
            </button>
          </div>
        </aside>
      </section>
    </>
  );
};

export default ProductList;
