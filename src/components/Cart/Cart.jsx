import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getCartTotal, removeItem, decreaseItemQuantity, increaseItemQuantity, } from '../../redux/Reducer/cartSlice'
import Cards from 'react-credit-cards-2';
import './cart.scss'
import 'react-credit-cards-2/dist/es/styles-compiled.css';



const Cart = () => {

    const { cart, totalQuantity, totalPrice } = useSelector((state) => state.cart)


    const dispatch = useDispatch();

    const [state, setState] = useState({
        number: '6768 6771 7495 8854',
        expiry: '',
        cvc: '',
        name: 'Aysel İbrahimova',
        focus: '',
    });
    const [showCardDetails, setShowCardDetails] = useState(false);

    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    const handleCopyNumber = () => {
        const cardNumber = document.getElementById('cardNumber');
        cardNumber.select();
        document.execCommand('copy');
        setState({ ...state, copied: true });
        setTimeout(() => {
            setState({ ...state, copied: false });
        }, 2000);
    };





    return (
        <div>
            <div id='cart'>
                <hr />
            </div>
            <div id="cartTotal">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 box">
                            <table>
                                <thead>
                                    <tr>
                                        <th>PICTURE</th>
                                        <th>PRODUCT</th>
                                        <th className="product">PRICE</th>
                                        <th>QUANTITY</th>
                                        <th className="product">SUBTOTAL</th>
                                        <th>REMOVE</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cart.length > 0
                                        ? cart.map((product) => (
                                            <tr>
                                                <td>
                                                    <img
                                                        src={product.photoURL}
                                                        alt=""
                                                    />
                                                </td>
                                                <td>{product.name}</td>
                                                <td className="product">{product.price} £</td>


                                                <td className='incDecButton'>
                                                    <button className="fas fa-minus" onClick={() => dispatch(decreaseItemQuantity(product.id))} ></button>
                                                    {product.quantity &&
                                                        product.quantity < 0 ? 0 : product.quantity}
                                                    <button className="fas fa-plus" onClick={() => dispatch(increaseItemQuantity(product.id))}></button>
                                                </td>


                                                <td className="product">{
                                                    product.price * product.quantity &&
                                                        product.price * product.quantity < 0 ? 0 : product.price * product.quantity} £</td>
                                                <td>
                                                    <i class="fa-solid fa-x" style={{ cursor: "pointer" }} onClick={() => dispatch(removeItem(product.id))}></i>
                                                </td>
                                            </tr>
                                        ))
                                        : (
                                            <>
                                                <p>Your cart is currently empty.</p>
                                                <div className="deneme">
                                                    <span className="shop">
                                                        <Link to='/shop' style={{ textDecoration: "none", color: "black" }}>RETURN TO SHOP</Link>
                                                    </span>
                                                </div>
                                            </>
                                        )}

                                </tbody>
                            </table>
                        </div>
                        <div className="col-lg-4 mb-3">
                            <div className="collaterals">
                                <div className="cart_totals">
                                    <h2>Cart totals</h2>
                                    <table>
                                        <tbody>
                                            <tr>
                                                <th>Total Quantity</th>
                                                <td>{totalQuantity && totalQuantity < 0 ? 0 : totalQuantity}</td>
                                            </tr>
                                            <tr>
                                                <th>Total</th>
                                                <td style={{ fontWeight: "700" }}>£{totalPrice && totalPrice < 0 ? 0 : totalPrice}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                    <div className="deneme">
                                        <span className='shop' onClick={() => setShowCardDetails(true)}>Proceed to checkout</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    {showCardDetails && (
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-8">
                                    <h4 style={{textAlign : "center"}}>Sifarişinizi tamamlamaq üçün zəhmət olmasa sağdaki kart hesabına <br/> {totalPrice /2}AZN ilkin ödəniş edib, çeki aşağıda açılan whatsapp <br/> adresimizə göndərin🌻</h4>
                                </div>
                                <div className="col-lg-4">
                                    <div className="mb-4">
                                        <Cards
                                            number={state.number}
                                            expiry={state.expiry}
                                            cvc={state.cvc}
                                            name={state.name}
                                            focused={state.focus}
                                        />
                                    </div>
                                    <span
                                        className="cardButton"
                                        type="button"
                                        onClick={handleCopyNumber}
                                        style={{ color: state.copied ? 'grey' : 'black' }}
                                    >
                                        {state.copied ? 'Kopyalandı!' : 'Kart nömrəsini kopyala'}
                                    </span>
                                    <input type="text" id="cardNumber" value={state.number} readOnly style={{ position: 'absolute', top: '-9999px' }} />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>
        </div >


    )
}

export default Cart