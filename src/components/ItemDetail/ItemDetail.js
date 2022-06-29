import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/CartContext';
import '../../components/ItemDetail/ItemDetailStyle.scss';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default function ItemDetail ({item}) {
    const [count, setCount] = React.useState(1);
    const navigate = useNavigate();
    const { addItem, isInCart } = React.useContext(CartContext);


    const addCart = () => {
        toast.success( (`Agregaste ${count} productos al carrito`), {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }


    return item.id !== undefined ? (
        <div className="item-detail">
            <div className="item-detail-img">
                <img src={item.img} alt={item.title}/>
            </div>  
            <div className="item-detail-description">
                <div>
                    <h3 className="item-detail-title">{item.title}</h3>
                    <span className="item-detail-price">${item.price}</span>
                </div>
                <div className="item-detail-counter-quantity">
                    {isInCart(item.id) ? "" : 
                        (
                        <>
                        <span>cantidad</span>
                        <ItemCount 
                        stock={item.stock}
                        count={count} 
                        setCount={setCount}/></>
                        )}
                </div>
                <div className="item-detail-submit">
                    {isInCart(item.id) ? (
                    <div className="item-detail-submit-text">
                    <span>Ya tenes este producto en el carrito.</span><span onClick={() => navigate(`/cart`)} className="item-detail-submit-cart">Ir al carrito</span>
                    </div>
                    ) : (
                        item.stock <= 0 ? (
                        <button disabled className="item-detail-submit-button disabled">Sin stock</button>
                        ) : (
                        <button className="item-detail-submit-button" onClick={() => addItem(item, count) || addCart()}>Agregar al carrito</button>
                        )
                    )}
                    <ToastContainer transition={Zoom} theme="dark"/>
                </div>
            </div>
        </div>
    )  : (
        <div>
            <h1>Producto no encontrado</h1>
        </div>
    )
}