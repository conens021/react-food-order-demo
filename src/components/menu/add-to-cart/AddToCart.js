import { useContext, useState } from 'react/cjs/react.development';
import './add-to-cart.css'

import CartContext from '../../../store/CartContext'
import { Button } from '../../UI/Button';
import { ToggleButton } from '../../UI/ToggleButton'
import { useEffect } from 'react'

function AddToCart(props) {

    const cartCtx = useContext(CartContext)

    const [quantity, setQuantity] = useState(0)

    const qunatityChangeHandler = (event) => {
        setQuantity(event.target.value)
    }

    const formSubmitedHandler = (event) => {
        event.preventDefault()
        cartCtx.addToCart(props.product, quantity)
        setQuantity(0)
    }

    const incrementQuantity = () => {
        setQuantity((prev) => (prev += 1))
    }
    const decrementQuantity = () => {
        setQuantity((prev) => (prev -= 1))
    }

    useEffect(() => { 
        console.log(quantity)
    }, [quantity])

    return (
        <form onSubmit={formSubmitedHandler}>
            <div className='form-row'>
                <input type="number" min="1" max="100" onChange={qunatityChangeHandler} value={quantity} />
                <ToggleButton type="button" onClick={decrementQuantity}>-</ToggleButton>
                <ToggleButton type="button" onClick={incrementQuantity}>+</ToggleButton>
            </div>
            <Button mode='primary' type="submit">+ Add to cart</Button>
        </form>
    );
}

export default AddToCart;