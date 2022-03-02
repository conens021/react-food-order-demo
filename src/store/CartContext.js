import React, { useEffect, useState } from 'react'

const CartContext = React.createContext({
    cart: [],
    deliveryCost: 2.50,
    cartVisible: false,
    showCart: () => { },
    closeCart: () => { },
    addToCart: () => { },
    updateCart: () => { },
    deleteFromCart : () => {},
    calculateCartTotal : () => {}
})

export const CartContextProvider = (props) => {

    const [cartProducts, setCartProducts] = useState([])

    const [cartIsVisible, setCartIsVisible] = useState(false)


    const showCart = () => {
        setCartIsVisible(true)
    }

    const closeCart = () => {
        setCartIsVisible(false)
    }

    const addProductToCart = (product, q) => {

        const itemAlreadyInCart = cartProducts.find(e => e.product === product)
        const quantity = parseInt(q)

        if (itemAlreadyInCart) {

            const updatedCart = cartProducts.map(cartItem => {
                if (cartItem.product.id === product.id) {
                    const updatedItem = { ...cartItem, quantity: cartItem.quantity += quantity }
                    return updatedItem
                }
                //ukoliko ne postoji samo se vrati stari 
                else {
                    return cartItem
                }
            })
            setCartProducts(updatedCart)
        }
        else {
            setCartProducts(prev => ([
                ...prev, { product: product, quantity: quantity }
            ]))
        }

    }

    const updateItem = (cartItem, quantity) => {
        return cartProducts.map(ci => {
            if (ci === cartItem) {
                return {
                    ...ci, quantity: quantity
                }
            }
            return ci
        })
    }


    const deleteItemFromCart = (cartItem) => {
        setCartProducts(cartProducts.filter(ci => cartItem !== ci))
    }

    const calculateTotalAmount = () => {
        var totalAmount = 0.00
        cartProducts.map(p => {
            console.log(`Product price:${p.quantity}`);
            //console.log(`Product quantity ${p.quantity}`);
            //const productTotal = p.product.price * p.quantity
            //totalAmount += productTotal
        })

        //console.log(`Order total amount: ${totalAmount}`)
    }

    return (
        <CartContext.Provider value={{
            cart: cartProducts, addToCart: addProductToCart, updateCart: updateItem,deleteFromCart:deleteItemFromCart,
            cartVisible: cartIsVisible, showCart: showCart, closeCart: closeCart,calcCartTotal : calculateTotalAmount
        }}>
            {props.children}
        </CartContext.Provider >)
}

export default CartContext