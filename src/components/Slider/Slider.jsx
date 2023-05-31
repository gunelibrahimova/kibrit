import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from 'swiper';
import "swiper/css";
import "swiper/css/navigation";
import "./slider.scss";
import { Navigation } from "swiper";
import { BASE_URL, FILE_PATH } from "../../api/config";
import axios from "axios";


export default function App() {
    const [slider, setSlider] = useState([]);

    const getSlider = async () => {
        axios.get(BASE_URL + "slider/getall").then((response) => {
          setSlider(response.data);
        });
    };

    getSlider();

    SwiperCore.use([Autoplay])
    return (
        <div id="slider">
            <Swiper navigation={true} modules={[Navigation, Autoplay]} autoplay={{ delay: 3000 }} className="mySwiper">
                {
                    slider &&
                    slider.map((e) => (
                        <SwiperSlide>
                            <div className="image">
                                <img width="100%" src={e.photoUrl} alt="" />
                                {/* <div className="text">
                                    <h1 className="text-h1">Sərfəli</h1>
                                </div> */}
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
}