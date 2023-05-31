import React, { useState } from "react";
import "./yayinevi.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";

const YayinEvi = () => {
  return (
    <div id="yayinevi">
      <div className="container">
        <div className="yayinn">
          <div className="d-flex">
            <div className="hafta">
              <div className="text">Həftənin Yayinevi</div>
            </div>
            <img
              className="pub-image"
              src="https://img.kitapyurdu.com/v1/getImage/fn:5734296/wi:100/wh:38252d3b2"
              alt=""
              width="100"
              height="100"
            />
            <h5>Yayin evinin adi</h5>
          </div>
          <div className="books">
            <div className="container">
              <div className="bottom">
                <Swiper
                  modules={[Navigation, Scrollbar, A11y]}
                  spaceBetween={2}
                  slidesPerView={4}
                  navigation
                  scrollbar={{ draggable: false }}
                >
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                                alt=""
                              />
                              <div className="icons">
                                <i class="fa-solid fa-eye icon"></i>
                                <br />
                                <i class="fa-solid fa-heart icon"></i>
                                <br />
                                <i class="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">kitabin adi</span>
                              <span className="box1 number">qiymeti</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                                alt=""
                              />
                              <div className="icons">
                                <i class="fa-solid fa-eye icon"></i>
                                <br />
                                <i class="fa-solid fa-heart icon"></i>
                                <br />
                                <i class="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">kitabin adi</span>
                              <span className="box1 number">qiymeti</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                                alt=""
                              />
                              <div className="icons">
                                <i class="fa-solid fa-eye icon"></i>
                                <br />
                                <i class="fa-solid fa-heart icon"></i>
                                <br />
                                <i class="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">kitabin adi</span>
                              <span className="box1 number">qiymeti</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                                alt=""
                              />
                              <div className="icons">
                                <i class="fa-solid fa-eye icon"></i>
                                <br />
                                <i class="fa-solid fa-heart icon"></i>
                                <br />
                                <i class="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">kitabin adi</span>
                              <span className="box1 number">qiymeti</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                                alt=""
                              />
                              <div className="icons">
                                <i class="fa-solid fa-eye icon"></i>
                                <br />
                                <i class="fa-solid fa-heart icon"></i>
                                <br />
                                <i class="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">kitabin adi</span>
                              <span className="box1 number">qiymeti</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                                alt=""
                              />
                              <div className="icons">
                                <i class="fa-solid fa-eye icon"></i>
                                <br />
                                <i class="fa-solid fa-heart icon"></i>
                                <br />
                                <i class="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">kitabin adi</span>
                              <span className="box1 number">qiymeti</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                    <div className="containerr">
                      <div className="row align-items-center">
                        <div className="col-lg-12">
                          <div className="box">
                            <div className="image">
                              <img
                                src="https://cdn.pixabay.com/photo/2018/05/10/08/59/book-3387071_960_720.jpg"
                                alt=""
                              />
                              <div className="icons">
                                <i class="fa-solid fa-eye icon"></i>
                                <br />
                                <i class="fa-solid fa-heart icon"></i>
                                <br />
                                <i class="fa-solid fa-bag-shopping icon"></i>
                              </div>
                            </div>
                            <div className="text">
                              <span className="box1 super">kitabin adi</span>
                              <span className="box1 number">qiymeti</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YayinEvi;
