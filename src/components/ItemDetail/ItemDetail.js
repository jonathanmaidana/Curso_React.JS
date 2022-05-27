import React from 'react';
import ItemCount from '../ItemDetail/ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/cartContext';

export default function ItemDetail ({item}) {
    const [count, setCount] = React.useState(1);
    const navigate = useNavigate();
    const { addItem, isInCart } = React.useContext(CartContext);


    return (
        <div className="itemDetail">
            <div className="itemDetail-img">
                <img src={item.img} alt={item.title}/>
            </div>  
            <div className="itemDetail-description">
                <h3 className="itemDetail-title">{item.title}</h3>
                <span className="itemDetail-price">Precio: ${item.price}</span>
                <div className="itemDetail-stock">
                    {isInCart(item.id) ? (
                    <button className="submit-button" onClick={() => navigate(`/cart`)}>Ir al carrito</button>
                    ) : (
                    <ItemCount 
                    stock={item.stock}
                    count={count} 
                    setCount={setCount}
                    onSubmit={() => addItem(item, count)}
                    />
                    )}
                    <div>
                        <button className="submit-button" onClick={() => navigate(`/products`)}>Volver</button>
                    </div>
                </div>
            </div>
        </div>
    )
}