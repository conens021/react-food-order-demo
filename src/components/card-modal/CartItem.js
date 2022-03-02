import { useContext, useEffect, useState } from 'react'
import { ToggleButton } from '../UI/ToggleButton'

import CartContext from '../../store/CartContext'

function CartItem(props) {

    const cartCtx = useContext(CartContext)
    const [quantity, setQuantity] = useState(props.cartItem.quantity)

    const product = props.cartItem.product

    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }


    const decrementQuantity = () => {
        if (quantity - 1 < 1) {
            deleteFromCart()
            return
        }
        setQuantity(quantity - 1)
    }


    const onInputChangeHandler = (event) => {
        const q = parseInt(event.target.value)
        if (q < 1) {
            deleteFromCart()
            return
        }
        setQuantity(q)
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            const newList = cartCtx.updateCart(props.cartItem, quantity)
        }, 500)

        return () => {
            clearTimeout(timer)
        }
    }, [quantity])

   

    const deleteFromCart = () => {
        cartCtx.deleteFromCart(props.cartItem)
    }

    return (
        <div className="item">
            <div className='left'>
                <div className="upper">{product.name}</div>
                <div className="down">
                    <div className="price">${product.price}</div>
                    <div className="quantity"><input type="number" onChange={onInputChangeHandler}
                        value={props.cartItem.quantity} /> </div>
                </div>
            </div>
            <div className='right'>
                <ToggleButton onClick={incrementQuantity} type="button">+</ToggleButton>
                <ToggleButton onClick={decrementQuantity} type="button">-</ToggleButton>
            </div>
        </div>
    );
}

export default CartItem;