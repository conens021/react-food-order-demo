import React, { useEffect, useState } from "react";

import './cart.css'
import CartContext from "../../../store/CartContext";
import reactDom from 'react-dom';
import CartModal from "../../card-modal/CardModal";
import { useContext } from 'react'
import { Backdrop } from '../../UI/Backdrop'


function Cart() {
    const cartCtx = useContext(CartContext)

    const [cartVisible, setCartVisible] = useState(false)

    return (
        <React.Fragment>
            {reactDom.createPortal(
                <Backdrop onClick={() => setCartVisible(!cartVisible)}
                    visible={cartVisible} />, document.getElementById('backdrop'))}
            {reactDom.createPortal(
                <CartModal closeModal={() => setCartVisible(!cartVisible)}
                    isVisible={cartVisible} />, document.getElementById('card-modal'))}

            <div className="nav-cart" onClick={() => { setCartVisible(true) }}>
                <i>Icon</i> Your Cart <span className='cart-quantity'>{cartCtx.cart.length}</span>
            </div>
        </React.Fragment>
    );
}

export default Cart;