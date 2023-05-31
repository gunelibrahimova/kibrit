import React, { useEffect } from "react";
import "./kitabsetleri.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { ToastContainer, toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchBook } from "../../redux/Reducer/cartSlice";
import { Link } from "react-router-dom";
import { addToFavories } from "../../redux/Reducer/favoriteSlice";
import Carousel from "react-multi-carousel";

const KitabSetleri = () => {

  const dispatch = useDispatch()
  const data = useSelector(state => state.cart.data.message) || [];
  const favori = useSelector(state => state.favories.data.message) || [];
  console.log(data);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };


  useEffect(() => {
    dispatch(fetchBook())
  }, [])

  const notify = () =>
    toast(
      <Link to="/cart" style={{ textDecoration: "none" }}>
        "Product added to cart !"
      </Link>
    );

  return (
    <div id="kitabset">
      <div className="container">
        <div className="liner" data-aos="fade-down">
          <h4 >KITAB SETLƏRİ</h4>
        </div>
        <div className="books">
          <div className="bottom">
            <Carousel responsive={responsive}>
              {data &&
                data
                  .filter((x) => x.isSet == true)
                  .map((book) => (
                    <div key={book.id} className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <Link to={"/book/" + book.id}>
                                <img src={book.photoURL} alt="" />
                              </Link>
                              <div className="icons">
                                <Link to="/book">
                                  <i className="fa-solid fa-eye icon"></i>
                                </Link>
                                <br />
                                <i
                                  className="fa-solid fa-heart icon"
                                  onClick={() =>
                                    dispatch(addToFavories(book))
                                  }
                                ></i>
                                <br />
                                <i
                                  className="fa-solid fa-bag-shopping icon"
                                  onClick={() => {
                                    dispatch(addToCart(book));
                                    notify();
                                  }}
                                ></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">{book.name}</span>
                              <span className="box1 number">
                                {book.isSale == true ? (
                                  <span className="box1 number">
                                    <del>{book.price}₼</del>{" "}
                                    {book.salePrice}₼
                                  </span>
                                ) : (
                                  <span className="box1 number">
                                    {book.price}₼
                                  </span>
                                )}
                              </span>
                              <span
                                className="sebet"
                                onClick={() => {
                                  dispatch(addToCart(book));
                                  notify();
                                }}
                              >
                                Səbətə at
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
            </Carousel>
          </div>
        </div>
      </div>
      <ToastContainer
        limit={3}
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />
    </div>
  );
};

export default KitabSetleri;
