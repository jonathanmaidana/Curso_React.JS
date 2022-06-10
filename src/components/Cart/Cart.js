import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import '../Cart/CartStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAngleLeft} from '@fortawesome/free-solid-svg-icons';


export default function CartList ({title, text}){
    const { cart, deleteAll, removeItem } = React.useContext(CartContext)
    const navigate = useNavigate()


    return cart.length === 0 ? (
        <Container>
            <Row style={{height: '70vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h1 style={{margin:'50px 0'}}>{text}</h1>
                <button className="cart-search-button" onClick={() => navigate(`/`)}>Buscar Productos</button>
                </Col>
            </Row>
        </Container>
        ) : (
            <Container>
                <Row>
                    <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                        <h1 style={{margin:'50px 0'}}>{title}</h1>                    
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div className="cart-delete-button-container">
                            <button className="cart-button" onClick={() => navigate(`/`)}><FontAwesomeIcon icon={faAngleLeft} style={{marginRight: '5px'}}/>Seguir comprando</button>
                            <button className="cart-button" onClick={() => deleteAll()}><FontAwesomeIcon icon={faTrash} style={{marginRight: '5px'}}/>Vaciar carrito</button>
                        </div>
                        <Table style={{margin:'50px 0'}}>
                            <thead>
                                <tr>
                                <th></th>
                                <th>Productos</th>
                                <th>Cantidad</th>
                                <th>Precio</th>
                                <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                <tr>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <img src={item.img} alt={item.title} style={{width: "60px"}}/>
                                </div>
                                <td>{item.title}</td>
                                <td>{item.quantity} u.</td>
                                <td>$ {item.price}</td>
                                <td>$ {item.price * item.quantity}</td>
                                <td><button className="cart-search-button" onClick={() => removeItem(item.id)}>X</button></td>
                                </tr>
                                ))}
                            </tbody>    
                        </Table>
                        <div className="cart-checkout-button-container">
                            <button className="cart-checkout-button" >Finalizar compra</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
}