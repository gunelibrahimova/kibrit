import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss/navigation";
import "swiper/scss";
import "./allBook.scss";
import "swiper/scss/pagination";
import { Navigation, Scrollbar, A11y } from "swiper";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addToCart, fetchBook } from "../../redux/Reducer/cartSlice";
import { BASE_URL } from '../../api/config'
import Paginat from "../Pagination/Paginat";

const AllBook = () => {
    const dispatch = useDispatch();
    const data = useSelector(state => state.cart.data.message);
    const [query, setQuery] = useState("");
    const [janr, setJanr] = useState([]);
    const [yazici, setYazici] = useState([]);
    const [dil, setDil] = useState([]);
    const [yayinevi, setYayinevi] = useState([]);
    const [books, setBooks] = useState(data);
    
    const getGenre = async () => {
        await fetch(BASE_URL + "genre/getall")
            .then((a) => a.json())
            .then((data) => setJanr(data));
    };

    const getAuthor = async () => {
        await fetch(BASE_URL + "Author/getall")
            .then((a) => a.json())
            .then((data) => setYazici(data));
    };

    const getLanguage = async () => {
        await fetch(BASE_URL + "language/getall")
            .then((a) => a.json())
            .then((data) => setDil(data));
    };

    const getPublisher = async () => {
        await fetch(BASE_URL + "publisher/getall")
            .then((a) => a.json())
            .then((data) => setYayinevi(data));
    };

    const filterGenre = (genreItem) => {
        const result = data.filter((e) => {
            return e.genreName === genreItem
        })
        setBooks(result)
    }

    const filterAuthor = (authorItem) => {
        const result = data.filter((e) => {
            return e.authorName === authorItem
        })
        setBooks(result)
    }

    const filterLanguage = (languageItem) => {
        const result = data.filter((e) => {
            return e.languageName === languageItem
        })
        setBooks(result)
    }

    const filterPublisher = (publisherItem) => {
        const result = data.filter((e) => {
            return e.publisherName === publisherItem
        })
        setBooks(result)
    }

    useEffect(() => {
        getGenre();
        getAuthor();
        getLanguage();
        getPublisher();
        dispatch(fetchBook());
    }, []);


    const notify = () =>
        toast(
            <Link to="/cart" style={{ textDecoration: "none" }}>
                "Product added to cart !"
            </Link>
    );

    return (
        <div id="allBook">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <input type='text' placeholder="Kitab adı,yazar və ya yayınevi axtar..." className="search" onChange={(e) => setQuery(e.target.value)} />
                        <button onClick={() => setBooks(data)} className='text-center'>Bütün kitablara bax</button>
                        <div className="categories" style={{ marginTop: "10px" }}>
                            <div className="row">
                                <span className="span">Janrlar</span>
                                {janr &&
                                    janr.map((e, index) => (
                                        <span onClick={() => filterGenre(e.name)} key={index}>{e.name}</span>
                                    ))
                                }
                            </div>
                            <hr />
                        </div>
                        <div className="categories">
                            <div className="row justify-content-between">
                                <span className="span">Yazıçılar</span>
                                {yazici &&
                                    yazici.map((e, index) => (
                                        <span onClick={() => filterAuthor(e.name)} key={index}>{e.name ? e.name : "Belə bir məhsul tapılmadı."}</span>
                                    ))
                                }
                            </div>
                            <hr />
                        </div>
                        <div className="categories">
                            <div className="row justify-content-between">
                                <span className="span">Dillər</span>
                                {dil &&
                                    dil.map((e, index) => (
                                        <span onClick={() => filterLanguage(e.name)} key={index}>{e.name}</span>
                                    ))
                                }
                            </div>
                            <hr />
                        </div>
                        <div className="categories">
                            <div className="row justify-content-between">
                                <span className="span">Yayın evləri</span>
                                {yayinevi &&
                                    yayinevi.map((e, index) => (
                                        <span onClick={() => filterPublisher(e.name)} key={index}>{e.name}</span>
                                    ))
                                }
                            </div>
                            <hr />
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <div className="book">
                            <div className="row">
                                {books ?
                                    books.filter((book) => book.name.toLowerCase().includes(query) || book.genreName.toLowerCase().includes(query) || book.authorName.toLowerCase().includes(query))
                                        .map((book) => (
                                            <div className="col-lg-4">
                                                <div className="box">
                                                    <div className="image" key={book.id}>
                                                        <Link to="/book">
                                                            <img
                                                                src={book.photoURL} width="100%"
                                                                alt=""
                                                            />
                                                        </Link>
                                                        <div className="icons">
                                                            <Link to="/book">
                                                                <i className="fa-solid fa-eye icon"></i>
                                                            </Link>
                                                            <br />
                                                            <i className="fa-solid fa-heart icon"></i>
                                                            <br />
                                                            <i className="fa-solid fa-bag-shopping icon" onClick={() => dispatch(addToCart(book))}></i>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="box1 super">{book.name}</span>
                                                        <span>Genre : {book.genreName}</span> <br />
                                                        <span>Yazar adi : {book.authorName}</span>
                                                        <span className="box1 number">{book.price}₼</span>
                                                        <span className="sebet" onClick={() => {
                                                            dispatch(addToCart(book));
                                                            notify()
                                                        }}>Səbətə at</span>
                                                    </div>
                                                </div>
                                            </div>
                
                                        )) 
                                        :
                                    data &&
                                    data.filter((book) => book.name.toLowerCase().includes(query) || book.genreName.toLowerCase().includes(query) || book.authorName.toLowerCase().includes(query))
                                        .map((book) => (
                                            <div className="col-lg-4">
                                                <div className="box">
                                                    <div className="image" key={book.id}>
                                                        <Link to="/book">
                                                            <img
                                                                src={book.photoURL} width="100%"
                                                                alt=""
                                                            />
                                                        </Link>
                                                        <div className="icons">
                                                            <Link to="/book">
                                                                <i className="fa-solid fa-eye icon"></i>
                                                            </Link>
                                                            <br />
                                                            <i className="fa-solid fa-heart icon"></i>
                                                            <br />
                                                            <i className="fa-solid fa-bag-shopping icon" onClick={() => dispatch(addToCart(book))}></i>
                                                        </div>
                                                    </div>
                                                    <div className="text">
                                                        <span className="box1 super">{book.name}</span>
                                                        <span>Genre : {book.genreName}</span> <br />
                                                        <span>Yazar adi : {book.authorName}</span>
                                                        <span className="box1 number">{book.price}₼</span>
                                                        <span className="sebet" onClick={() => {
                                                            dispatch(addToCart(book));
                                                            notify()
                                                        }}>Səbətə at</span>
                                                    </div>
                                                </div>
                                            </div>

                                        ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Paginat data={data}/> */}
            </div>
        </div>
    )
}

export default AllBook