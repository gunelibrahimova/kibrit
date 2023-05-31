import React from 'react'
import './header.scss'
import logo from "../../Image/logo.jpeg"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getCartTotal } from '../../redux/Reducer/cartSlice';
import { Link } from 'react-router-dom';
import Sidebar from '../sidebar';
import ScrollToTop from 'react-scroll-to-top';

const Header = () => {

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart)

  const { favories, totalQuantityFavories, totalPriceFavories } = useSelector((state) => state.favories)


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


  return (
    <>
      <div id='header'>
        <div className="side">
          <Sidebar pageWrapId={"page-wrap"} outerContainerId={"header"} />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-2 col-2">
              <Link to="/allbook" style={{ color: "black" }}>
                <i class="fa-solid fa-magnifying-glass" style={{ marginLeft: "30px" }}></i>
              </Link>
            </div>
            <div className="col-lg-8 col-6">
              <div className="logo d-flex align-items-center">
                <Link to="/" style={{ textDecoration: "none" }}>
                  <h5 style={{ color: "black" }}>Əsas Səhifə</h5>
                </Link>
                <img width={100} height="100" src={logo} alt="" />
                <Link to="/allbook" style={{ textDecoration: "none", color: "black" }}>
                  <h5>Bütün məhsullar</h5>
                </Link>
              </div>
            </div>
            <div className="col-lg-2 col-4">
              <div className="icon">
                <Link to="/auth">
                  <i class="fa-regular fa-user login" style={{ color: "black" }}></i>
                </Link>
                <Link to="/favories">
                  <i class="fa-solid fa-heart" style={{ color: "red", marginLeft: "10px" }}><sup style={{ color: "black", marginLeft: "1px" }}>{totalQuantityFavories ? totalQuantityFavories : ""}</sup></i>
                </Link>
                <Link to="/cart" style={{ textDecoration: "none" }}>
                  <i class="fa-solid fa-cart-shopping car"></i>
                  <span className='price'>{totalQuantity < 0 ? 0 : totalQuantity}məhsul</span><span className="price">/{totalPrice < 0 ? 0 : totalPrice}₼</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div >
      <ScrollToTop smooth />
    </>
  )
}

export default Header