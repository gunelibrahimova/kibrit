import React from "react";
import "./kitabturleri.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getGenreFailure, getGenreStart, getGenreSuccess } from "../../redux/Reducer/genreSlice";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";

const KitabTurleri = () => {
  const dispatch = useDispatch();
  const { genre } = useSelector(state => state.genre);
  const isLoading = useSelector(state => state.genre.isLoading);
  const error = useSelector(state => state.genre.error);

  useEffect(() => {
    dispatch(getGenreStart());
    // Fetch products from an API
    fetch('https://localhost:44351/api/Genre/getall')
      .then(response => response.json())
      .then(data => dispatch(getGenreSuccess(data)))
      .catch(error => dispatch(getGenreFailure(error.message)));
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
            <div className="text">Janrlar</div>
          </div>
          <div className="bottom">
            <Carousel responsive={responsive}>
              {
                genre &&
                genre.map((e) => (
                  <div className="box">
                    <div className="image">
                      <Link to={'/janr/' + e.id}>
                        <img
                          className="pub-image"
                          src={e.photo}
                          alt=""
                          width="100"
                          height="100"
                        />
                      </Link>
                      <p>{e.name}</p>
                    </div>
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

export default KitabTurleri;
