import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import '../../components/ItemDetail/ItemDetailStyle.scss';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons';
import { Button, Modal } from 'react-bootstrap'




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

    const cuotas = 6

    const valorDelItemEnCuotas = () =>{
        const valorDelItem = item.price

        const valorDeCoutas = (valorDelItem / cuotas).toFixed(2)
        return(`$${valorDeCoutas}`)
    }

    function Example() {
        const [show, setShow] = React.useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

        return (
        <>
            <div onClick={handleShow}>
                <div className="item-detail-cuotas">
                    <FontAwesomeIcon icon={faCreditCard} className="item-detail-coutas-card-icon"/>
                    <strong>{cuotas}</strong>
                    <span>cuotas sin interés de</span>
                    <strong>{valorDelItemEnCuotas()}</strong>
                </div>
                <div className="item-detail-payment-methods">ver medios de pago</div>
            </div>

            <Modal
                show={show}
                onHide={handleClose}
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Modal title</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    I will not close if you click outside me. Don't even try to press
                    escape key.
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">Understood</Button>
                </Modal.Footer>
            </Modal>
        </>
        );
    }

    return (
        <div className="item-detail">
            <div className="item-detail-img">
                <img src={item.img} alt={item.title}/>
            </div>  
            <div className="item-detail-description">
                <div>
                    <h3 className="item-detail-title">{item.title}</h3>
                    <span className="item-detail-price">${item.price}</span>
                </div>
                <div className="item-detail-payments">
                    <Example/>
                </div>
                    <div className="item-detail-counter-quantity">
                        {isInCart(item.id) || (item.stock <= 0) ? "" : 
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
                        <button className="submit-button" onClick={() => navigate(`/cart`)}>Ir al carrito</button>
                        ) : (
                            item.stock <= 0 ? (
                            <button disabled className="submit-button disabled">Sin stock</button>
                            ) : (
                            <button className="submit-button" onClick={() => addItem(item, count) || addCart()}>Agregar al carrito</button>
                            )
                        )}
                        <ToastContainer transition={Zoom} theme="dark"/>
                        <button className="submit-button" onClick={() => navigate(`/`)}>Volver</button>
                    </div>
            </div>
        </div>
    )  
}