import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";
import '../NavBar/NavBarStyle.scss';
/* ------------------------- Import FontAwesomeIcon ------------------------- */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';




export default function CartIcon (){
    const { cart } = React.useContext(CartContext);

    let qntyInCart = 0;

    // eslint-disable-next-line
    cart.map((item) => {
        qntyInCart += item.quantity
    })
    

    
    return (
        <Link to="/cart" className="nav-item">
            <FontAwesomeIcon icon={faShoppingBag} size="1x"/>
            {qntyInCart === 0 ? "" : (<span>{qntyInCart}</span>)} 
        </Link>
        )
    }