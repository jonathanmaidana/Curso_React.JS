import React from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from "../../../context/cartContext";

export default function CartIcon (){
    const { cart } = React.useContext(CartContext);


    return (
        <Link to="/cart">
            <span className="material-icons">
                local_mall
            </span> 
            <span>
                {cart.length}
            </span>
        </Link>
        
    )
}