import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../../context/CartContext";

export default function CartIcon (){
    const { cart } = React.useContext(CartContext);
    let itemsInCart = 0;

    cart.map((item) =>{
        itemsInCart = itemsInCart + item.quantity
    })

    return (
        <Link to="/cart">
            <span className="material-icons">
                local_mall
            </span>
            {itemsInCart === 0 ? "" : (<span>{itemsInCart}</span>)} 
        </Link>
        
        )
    }