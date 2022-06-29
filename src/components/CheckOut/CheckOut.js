import React from 'react';
import './CheckOut.scss';
import { collection, getFirestore, addDoc, writeBatch, doc } from 'firebase/firestore';
import { CartContext } from '../../context/CartContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Col, Row, InputGroup } from 'react-bootstrap'


export default function CheckOut () {

    const { cart, getTotalCart, deleteAll } = React.useContext(CartContext);
    const [data, setData] = React.useState('')
    const [orderId, setOrderId] = React.useState()
    const [send , setSend] = React.useState(true)
    const navigate = useNavigate()
    const [validated, setValidated] = React.useState(false);


    /* ----------------------------- Capturar valor de los inputs ---------------------------- */
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
    }

    /* ------------------------- Generar orden de compra ------------------------ */
    const sendOrder = async (e) => {
        e.preventDefault();
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
            setValidated(true);
        }
        else{
            const order = {
                buyer: data,
                items: cart,
                total: getTotalCart(),
                status: 'Generada',
                date: new Date()
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
    }
    
    /* --------------- Componente de presentacion para los inputs --------------- */
    const Input = ({ label, placeholder, name, id, type }) => {
        return(
            <div className="inputs">
                <label forHtml={id}>{label}</label>
                <input 
                name={name} 
                type={type} 
                id={id} 
                placeholder={placeholder}
                onChange={handleChange}
                />
            </div>
        )
    }

    /* --------------- Componente de presentacion para los option --------------- */
    const Option = ({text}) => {
        return (
            <div className="inputs">
                <select>
                    <option selected disabled>{text}</option>
                </select>
            </div>
        )
    }

    return send ? (
        <div className="checkout-page-container">
            <h1>Formulario de compra</h1>
            <div className="checkout">
                <div className="checkout-form">
                <Form noValidate validated={validated} onSubmit={sendOrder}>
                    <Row className="mb-3">

                        <Form.Group as={Col} md="4" controlId="validationCustom01">
                        <Form.Label htmlFor="name">Nombre</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Nombre"
                            onChange={handleChange}
                            minLength={3}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Rellenar este campo.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label htmlFor="lastname">Apellido</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="lastname"
                            id="lastname"
                            placeholder="Apellido"
                            onChange={handleChange}
                            minLength={3}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Rellenar este campo.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="4" controlId="validationCustom02">
                        <Form.Label htmlFor="lastname">Teléfono</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Teléfono"
                            onChange={handleChange}
                            minLength={8}
                        />
                        <Form.Control.Feedback></Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Rellenar este campo.
                        </Form.Control.Feedback>
                        </Form.Group>
                        
                        <Form.Group as={Col} md="12" controlId="exampleForm.ControlInput1">
                        <Form.Label htmlFor="email">Email</Form.Label>
                        <InputGroup hasValidation>
                            <Form.Control
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Ej: nombre@gmail.com"
                            aria-describedby="inputGroupPrepend"
                            onChange={handleChange}
                            required
                            />
                            <Form.Control.Feedback type="invalid">
                                Ingresa un email valido.
                            </Form.Control.Feedback>
                        </InputGroup>
                        </Form.Group>

                    </Row>

                    <Row className="mb-3">

                        <Form.Group as={Col} md="6" controlId="validationCustom03">
                        <Form.Label htmlFor="adress">Direccion</Form.Label>
                        <Form.Control 
                        type="text"
                        name="adress"
                        id="adress"
                        placeholder="Direccion" 
                        onChange={handleChange}
                        required />
                        <Form.Control.Feedback type="invalid">
                            Rellenar este campo.    
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom04">
                        <Form.Label htmlFor="locality">Localidad</Form.Label>
                        <Form.Control 
                        type="text" 
                        name="locality"
                        id="locality"
                        placeholder="Localidad" 
                        onChange={handleChange}
                        required />
                        <Form.Control.Feedback type="invalid">
                            Rellenar este campo.
                        </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group as={Col} md="3" controlId="validationCustom05">
                        <Form.Label htmlFor="zipcode">Códido Postal</Form.Label>
                        <Form.Control
                        type="text" 
                        name="zipcode"
                        id="zipcode"
                        placeholder="CP" 
                        onChange={handleChange}
                        minlength={3}
                        required 
                        />
                        <Form.Control.Feedback type="invalid">
                            Por favor, introduce el código postal de tu zona.
                        </Form.Control.Feedback>
                        </Form.Group>

                    </Row>

                    <Form.Group className="mb-3">
                        <Form.Check
                        required
                        label="Aceptar términos y condiciones."
                        feedback="Debe aceptar los términos y condiciones para continuar."
                        feedbackType="invalid"
                        />
                    </Form.Group>
                    <div className="checkout-form-container-submit">
                    <Button type="submit" className="submit-button">Realizar la compra</Button>
                    </div>
                </Form>
                    
                    <div className="checkout-items">
                        <div className="checkout-items-container">
                        <div className="checkout-items-container-title">Mis productos</div>
                            {cart.map((item) => {
                                return (
                                    <>
                                    <div className="checkout-items-container-item">
                                        <img src={item.img} style={{maxWidth: '100px', height: '100px'}} alt={item.title}/>
                                        <p className="checkout-items-container-item-title">{item.title}<span>{item.quantity} Unidades</span></p>
                                        <p>${item.price}</p>
                                    </div>
                                    <hr style={{width: '100%', margin:'0'}}></hr>
                                    </>
                                )
                            })}
                            <div className="checkout-items-container-total">                        
                                <span>Total <span>${getTotalCart()}</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className="purchase-completed">
            <div className="purchase-completed-container">
                <h1>Gracias por tu compra!</h1>
                <p>Tu compra ha sido enviada con la orden Nro: <span className="purchase-completed-container-data">{orderId}</span></p>
                <p>Comprador: <span className="purchase-completed-container-data">{data.name} {data.lastname}</span></p>
                <p>Télefono: <span className="purchase-completed-container-data">{data.phone}</span></p>
                <p>En breve te contactaremos a <span className="purchase-completed-container-data">{data.email}</span> para confirmar tu pedido</p>
                <FontAwesomeIcon icon={faCheck} className="purchase-completed-container-icon"/>
            </div>
            <button onClick={() => navigate(`/`)}>seguir comprando</button>
        </div>
    )
}