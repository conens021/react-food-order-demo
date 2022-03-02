import React, { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "../../store/CartContext";
import { Button } from "../UI/Button";
import CartItem from "./CartItem";

function CartModal(props) {
    const cartCtx = useContext(CartContext)
    const cartItems = cartCtx.cart

    const visible  = props.isVisible

    const calcTotalAmount = () => {
       cartCtx.calcCartTotal()
    }

    return (
        <Modal visible={visible}>
            {cartItems.map((ci) => (
                <CartItem key={ci.product.id} cartItem={ci}/>
            ))}
            <div className="total">
                <div className="left">Total Amount</div>
                <div className="right">${calcTotalAmount()}</div>
            </div>
            <div className="submit-btns">
                <Button type="button" mode="secondary" onClick={() => props.closeModal()}>Close</Button>
                <Button type="submit" mode="primary">Order</Button>
            </div>
        </Modal>
    );
}

export default CartModal;