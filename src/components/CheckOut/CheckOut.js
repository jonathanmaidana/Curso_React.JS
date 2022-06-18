import React from 'react';
import './CheckOut.scss';
import { collection, getFirestore, addDoc, writeBatch, doc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

export default function CheckOut () {

    const { cart, getTotalCart, deleteAll } = React.useContext(CartContext);
    const [data, setData] = React.useState()
    const [orderId, setOrderId] = React.useState()
    const [send , setSend] = React.useState(true)
    const navigate = useNavigate()


    /* ----------------------------- Capturar valor de los inputs ---------------------------- */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    /* ------------------------- Generar orden de compra ------------------------ */
    const sendOrder = async (e) => {
        e.preventDefault();
        const order = {
            buyer: data,
            items: cart,
            total: getTotalCart(),
            status: 'Pendiente',
        }
        const db = getFirestore();
        const ordersCollection = collection(db, "orders")
        if(cart.length <= 0) {
            alert("No hay productos en el carrito")
        }
        else {
            await addDoc(ordersCollection, order).then(({ id }) => {
        /* ------------------------- Guardar id en un estado ------------------------ */
                setOrderId(id)
                setSend(false)
                deleteAll()
        /* ---------------------- Actualizar stock en firebase ---------------------- */
                const batch = writeBatch(db)
                cart.forEach(item => {
                    const productRef = doc(db, "productos", item.id)
                    const newQnty = item.stock - item.quantity
                    batch.update(productRef, {
                        stock: newQnty
                    })
                })
                batch.commit()
            })
        }
    }


    return send ? (
        <div className="checkout-page-container">
            <h1>Formulario de compra</h1>
            <div className="checkout">
                <div onSubmit={sendOrder} className="checkout-form">
                    <form className="checkout-form-container">
                        <input onChange={handleChange} required name="name" id="name" type="text" placeholder="Nombre"/>
                        <input onChange={handleChange} required name="email" id="email" type="email" placeholder="Email"/>
                        <input onChange={handleChange} required name="phone" id="phone" type="tel" placeholder="Telefono"/>
                        <div className="checkout-form-container-submit">
                            <button type="submit" onSubmit={sendOrder}>Enviar</button>
                        </div>
                    </form>
                </div>
                <div className="checkout-items">
                    <div className="checkout-items-container">
                        {cart.map((item) => {
                            return (
                                <>
                                <div className="checkout-items-container-item">
                                    <img src={item.img} style={{maxWidth: '100px', height: '100px'}} alt={item.title}/>
                                    <p className="checkout-items-container-item-title">{item.title}</p>
                                    <p>x{item.quantity}</p>
                                    <p>${item.price}</p>
                                </div>
                                <hr style={{width: '100%', margin:'0'}}></hr>
                                </>
                            )
                        })}
                        <div className="checkout-items-container-total">                        
                            <span>Total: ${getTotalCart()}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="purchase-completed">
            <div className="purchase-completed-container">
                <h1>Gracias por tu compra!</h1>
                <p>Tu orden ha sido enviada con el número: <span className="purchase-completed-container-data">{orderId}</span></p>
                <p>Comprador: <span className="purchase-completed-container-data">{data.name}</span></p>
                <p>Email: <span className="purchase-completed-container-data">{data.email}</span></p>
                <p>En breve te contactaremos para confirmar tu pedido</p>
                <FontAwesomeIcon icon={faCheck} className="purchase-completed-container-icon"/>
            </div>
            <button onClick={() => navigate(`/`)}>seguir comprando</button>
        </div>
    )
}