import React from 'react';
import './CheckOut.scss';
import { collection, getFirestore, addDoc, writeBatch, doc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';

export default function CheckOut () {

    const { cart, getTotalCart } = React.useContext(CartContext);
    const [data, setData] = React.useState()
    const [orderId, setOrderId] = React.useState()


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
            total: getTotalCart()
        }
        const db = getFirestore();
        const ordersCollection = collection(db, "orders")

        await addDoc(ordersCollection, order).then(({ id }) => {
    /* ------------------------- Guardar id en un estado ------------------------ */
            setOrderId(id)
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

    return (
        <div>
            <h1>Checkout</h1>
            <div onSubmit={sendOrder} className="form">
                <form className="form-container">
                    <label for="name">Nombre</label>
                        <input onChange={handleChange} required name="name" id="name" type="text" placeholder="Nombre"/>
                    <label for="name">Email</label>
                        <input onChange={handleChange} required name="email" id="email" type="email" placeholder="Email"/>
                    <label for="name">Telefono</label>
                        <input onChange={handleChange} required name="phone" id="phone" type="number" placeholder="Telefono"/>
                    <button type="submit" onSubmit={sendOrder}>Enviar</button>
                </form>
            </div>
        </div>
    )
}