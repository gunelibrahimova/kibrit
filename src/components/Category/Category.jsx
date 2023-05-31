import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { BASE_URL, FILE_PATH } from "../../api/config";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import "./category.scss";
import { Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Category = () => {
  const [author, setAuthor] = useState([]);

  const getAuthor = async () => {
    await fetch(BASE_URL + "author/getall")
      .then((a) => a.json())
      .then((data) => setAuthor(data));
  };

  useEffect(() => {
    getAuthor();
  }, []);

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
    <div id="yazarlar">
      <div className="container">
        <div className="author">
          <div className="top">
            <div className="text">Yazarlar</div>
          </div>
          <div className="bottom">
            <Carousel responsive={responsive}>
              {
                author &&
                author.map((e) => (
                  <div className="box">
                    <div className="image">
                      <Link to={'/author/' + e.id}>
                        <img
                          src={`${FILE_PATH}${e.photoURL}`}
                          alt=""
                          width="100%"
                          height="100%"
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

export default Category;
