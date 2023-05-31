
import "./bookdetail.scss";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { FaStar } from "react-icons/fa";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import ReadMoreReact from "read-more-react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BASE_URL } from '../../api/config'
import { decreaseItemQuantity, getCartTotal, increaseItemQuantity } from "../../redux/Reducer/cartSlice";

const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

const BookDetail = () => {
  const { id } = useParams();
  const [book, setBooks] = useState([]);

  console.log(book);
  const stars = Array(5).fill(0);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);
  const [value, setValue] = useState("1");
  const dispatch = useDispatch();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleMouseOver = (value) => {
    setHoverValue(value);
  };
  const handleMouseLeave = (value) => {
    setHoverValue(undefined);
  };

  const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart)


  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);


  const getBooks = async () => {
    await fetch(BASE_URL + "book/getbyid/" + id)
      .then((res) => res.json())
      .then((data) => setBooks(data.message));
  };
  useEffect(() => {
    getBooks();
  }, [dispatch]);

  return (
    <div id="bookdetail">
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="image">
              <img
                className="mainImage"
                role="presentation"
                src={book.photoURL}
                alt=""
              />
            </div>
            <div className="small">
              <div className="d-flex">
                <img
                  style={{ opacity: ".5", marginLeft: "0px" }}
                  src="https://cantalar.az/wp-content/uploads/2022/12/2021100315448556547363w800h800_750x750-150x150.jpg"
                  alt=""
                />
                <img
                  src="https://cantalar.az/wp-content/uploads/2022/12/2021100315448556547363w800h800_750x750-150x150.jpg"
                  alt=""
                />
                <img
                  src="https://cantalar.az/wp-content/uploads/2022/12/2021100315448556547363w800h800_750x750-150x150.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-5">
            <div className="text">
              <div className="title">
                <h1>{book.name}</h1>
                <hr />
              </div>
              <ul>
                <li>
                  <div className="d-flex">
                    <span>
                      <del> {book.price} AZN</del>
                    </span>
                    <span style={{ marginLeft: "10px" }}>
                      {book.salePrice} AZN
                    </span>
                    {book.isStock == true ? (
                      <div className="stock">
                        <p>Stock'da var</p>
                      </div>
                    ) : (
                      <div className="stock">
                        <p>Stock'da yoxdur</p>
                      </div>
                    )}
                  </div>
                </li>
              </ul>
              <div className="parametrs">
                <span>
                  <strong>Yayin evi: </strong> {book.publisherName}
                </span>{" "}
                <br />
                <span>
                  <strong>Yazar: </strong> {book.authorName}
                </span>{" "}
                <br />
                <span>
                  <strong>Tercumeci :</strong> {book.translator}
                </span>{" "}
                <br />
                <span>
                  <strong>Sehifa sayi:</strong> 123
                </span>{" "}
                <br />
                <span>
                  <strong>Kitabin dili :</strong> {book.languageName}
                </span>{" "}
                <br />
                <span>
                  <strong>Cild tipi:</strong> {book.bookCover}
                </span>{" "}
                <br />
                <span>
                  <strong>Kagiz cinsi :</strong> {book.paperType}
                </span>{" "}
                <br />
                <span>
                  <strong>Olculer :</strong> 124
                </span>{" "}
                <br />
                <span>
                  <strong>Kategoryi:</strong> adi
                </span>{" "}
                <br />
              </div>
              <p>orta rating cixsin ulduzla</p>
              <div className="plus">
                <p>
                  <td className='incDecButton'>
                    <button className="fas fa-minus" onClick={() => dispatch(decreaseItemQuantity(book.id))} ></button>
                     <span>1</span>
                    <button className="fas fa-plus" onClick={() => dispatch(increaseItemQuantity(book.id))}></button>
                  </td>
                </p>
                <span className="sebet">Səbətə at</span>
              </div>
            </div>
          </div>
        </div>
        <div className="boxes">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                >
                  <Tab label="Çatdırılma" value="1" />
                  {/* <Tab label={`Reviews (${product.reviewCount})`} value="2" /> */}
                  <Tab label="Rəylər" value="2" />
                  <Tab label="Yazar haqqinda" value="3" />
                </TabList>
              </Box>
              <TabPanel value="1">
                <div id="description">
                  <p>
                    çatdirilma haqqinda şəhərləər neçə günə metrolara ve qiymeti
                    haqda melumat
                  </p>
                </div>
              </TabPanel>
              <TabPanel value="2">
                <div id="comment">
                  <div className="container">
                    <div className="top">
                      <div className="row">
                        <div className="col-lg-8">
                          <div className="add">
                            <div className="d-flex">
                              <div className="admin">
                                <div>
                                  <h6 className="date"></h6>
                                  <p className="light">Your review :</p>
                                  <p>
                                    {/* Your rating :{reviewStar(.ratings)} */}
                                  </p>
                                  <hr />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="bottom">
                      <div class="comment-title">
                        <h2>Add a review</h2>
                      </div>
                      <div class="comment-input-box">
                        <div class="row">
                          <div class="col-lg-12">
                            <div class="comment-input">
                              <input
                                width="100%"
                                type="text"
                                placeholder="Name"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="comment-input">
                              <input
                                type="email"
                                placeholder="Email"
                                required
                              />
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <textarea
                              placeholder="Your review"
                              class="comment-input comment-textarea"
                            ></textarea>
                          </div>
                          <div class="comment-rating">
                            <div className="d-flex">
                              <span>Your rating : </span>
                              <div style={styles.containerr}>
                                <div style={styles.stars}>
                                  {stars.map((_, index) => {
                                    return (
                                      <FaStar
                                        key={index}
                                        size={15}
                                        style={{
                                          marginRight: 10,
                                          cursor: "pointer",
                                        }}
                                        color={
                                          (hoverValue || currentValue) > index
                                            ? colors.orange
                                            : colors.grey
                                        }
                                        onClick={() => handleClick(index + 1)}
                                        onMouseOver={() =>
                                          handleMouseOver(index + 1)
                                        }
                                        onMouseLeave={handleMouseLeave}
                                      />
                                    );
                                  })}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div class="col-lg-12">
                            <div class="comment-submit">
                              <button type="submit" class="cart-btn">
                                Submit
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="3">
                <div id="description">
                  <p>yazar haqqinfa melumat daha coxa basson oxusun</p>
                  <ReadMoreReact
                    text={
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
                    }
                    min={50}
                    ideal={100}
                    max={200}
                    readMoreText={"read more"}
                  />
                </div>
              </TabPanel>
            </TabContext>
          </Box>
        </div>
        <div className="similar">
          <div className="title">
            <h4>Yazarın digər kitabları</h4>
          </div>
          <div className="books">
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
                              src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
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
                            <span className="sebet">Səbətə at</span>
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
                              src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
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
                            <span className="sebet">Səbətə at</span>
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
                              src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
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
                            <span className="sebet">Səbətə at</span>
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
                              src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
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
                            <span className="sebet">Səbətə at</span>
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
                              src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
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
                            <span className="sebet">Səbətə at</span>
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
                              src="https://cdn.pixabay.com/photo/2016/01/26/10/56/table-1162230_960_720.jpg"
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
                            <span className="sebet">Səbətə at</span>
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
  );
};

const styles = {
  containerr: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export default BookDetail;