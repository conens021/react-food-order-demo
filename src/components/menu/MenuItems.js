import React from "react";

import MenuItem from "./MenuItem";

import './menu-items.css'
import { useState } from "react/cjs/react.development";

function MenuItems() {

    const [products, setProducts] = useState([
        { id: 1, name: 'Sushi', description: 'Some real fishy smelly product', price: 21.22 },
        { id: 2, name: 'Cheezzburger', description: 'Heaven on Earth Cheezz', price: 15.12 },
        { id: 3, name: 'Shpageti', description: 'Just eat at!', price: 25.42 },
        { id: 4, name: 'Makaroni', description: 'Italian mama mia!', price: 16.22 },
        { id: 5, name: 'Sarma', description: 'Real Serbian Table!', price: 21.22 },
    ])

    const renderItems = () => {
        return products.map(p => (
            <MenuItem key={p.id} product = {p}/>
        ))
    }

    return (
        <div className='menu-items'>
            {renderItems()}
        </div>
    );
}

export default MenuItems;