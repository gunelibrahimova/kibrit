import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BASE_URL } from '../../api/config';
import { addToCart, fetchBook } from '../../redux/Reducer/cartSlice';
import './AuthorDetail.scss'

const AuthorDetail = () => {
    const { id } = useParams();
    const [author, setAuthor] = useState([]);
    const data = useSelector(state => state.cart.data.message);
    const dispatch = useDispatch();
    const [query, setQuery] = useState("");

    const getAuthor = async () => {
        await fetch(BASE_URL + "author/getbyid/" + id)
            .then((res) => res.json())
            .then((data) => setAuthor(data.message));
    };

    useEffect(() => {
        getAuthor();
        dispatch(fetchBook());
    }, [dispatch]);

    const notify = () =>
        toast(
            <Link to="/cart" style={{ textDecoration: "none" }}>
                "Product added to cart !"
            </Link>
    );

    return (
        <div id='authordetail'>
            <div className="top">
                <div className="box">
                    {/* <div className="image">
                        <div className="d-flex">
                            <p style={{ cursor: "pointer" }}>Yayin evi:</p>
                            <p style={{ marginLeft: "10px" }}>{publisher.name}</p>
                        </div>
                    </div> */}
                    <div className="bottom">
                        <h1>Yazar : {author.name}</h1>
                    </div>
                </div>
            </div>
            <div className="bottom">
                <div className="container">
                    <div className="row">
                        <div className="book">
                            <div className="row">
                                <div className="col-lg-4">
                                    <h3>Yazar haqqında məlumat</h3>
                                    <p>{author.description}</p>
                                </div>
                                <div className="col-lg-8">
                                    {
                                        data &&
                                        data.filter((x) => x.authorName == author.name)
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
                </div>
            </div>
        </div>
    )
}

export default AuthorDetail