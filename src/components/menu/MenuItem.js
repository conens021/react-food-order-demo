import React from "react";

import AddToCart from "./add-to-cart/AddToCart";

import './menu-item.css'

function MenuItem(props) {
    return (
        <div className='menu-item'>
            <div className='left'>
                <div className='item-name'>{props.product.name}</div>
                <p className="item-desc">{props.product.description}</p>
                <div className='item-price'>${props.product.price}</div>
            </div>
            <div className='right'>
                <AddToCart product={props.product}/>
            </div>
        </div>
    );
}

export default MenuItem;