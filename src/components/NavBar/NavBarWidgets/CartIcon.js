import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../../context/CartContext";
import '../../NavBar/NavBarStyle.scss'
/* ------------------------- Import FontAwesomeIcon ------------------------- */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';


export default function CartIcon (){
    const { cart } = React.useContext(CartContext);
    let itemsInCart = 0;

    cart.map((item) =>{
        itemsInCart = itemsInCart + item.quantity
    })

    return (
        <Link to="/cart" className="nav-item">
            <FontAwesomeIcon icon={faShoppingBag} />
            {itemsInCart === 0 ? "" : (<span>{itemsInCart}</span>)} 
        </Link>
        )
    }