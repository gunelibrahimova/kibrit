import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsFailure, getProductsStart, getProductsSuccess } from "../../redux/Reducer/productsSlice";
import "./language.scss";
import Carousel from "react-multi-carousel";

const Language = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.products.products);

  useEffect(() => {
    dispatch(getProductsStart());
    fetch('https://localhost:44351/api/Language/getall')
      .then(response => response.json())
      .then(data => dispatch(getProductsSuccess(data)))
      .catch(error => dispatch(getProductsFailure(error.message)));
  }, [dispatch]);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div id="language">
      <div className="container">
        <div className="publish">
          <div className="yayin">
            <div className="text">Dünya dilləri</div>
          </div>
          <div className="bottom">
            <Carousel responsive={responsive}>
              {
                products &&
                products.map((e) => (
                  <div className="box">
                    <div className="image">
                      <Link to={'/dil/' + e.id}>
                        <img
                          src={e.photo}
                          alt=""
                          width="100"
                          height="100"
                        />
                      </Link>

                    </div>
                    <p>{e.name}</p>
                  </div>
                ))
              }
            </Carousel>


          </div>
        </div>
      </div>
    </div>
  );
};

export default Language;
