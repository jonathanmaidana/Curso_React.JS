import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'
import '../Cart/CartStyle.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faAngleLeft} from '@fortawesome/free-solid-svg-icons';




export default function CartList ({title, text}){
    const { cart, deleteAll, removeItem, getTotalCart, addQuantity, removeQuantity, count } = React.useContext(CartContext)
    const navigate = useNavigate()

    return cart.length === 0 ? (
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh'}}>
            <Row>
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
                                <th>Precio</th>
                                <th>Cantidad</th>
                                <th>SubTotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {cart.map((item) => (
                                <tr>
                                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                                    <img src={item.img} alt={item.title} style={{width: "60px"}}/>
                                </div>
                                <td style={{width: "30%"}}>{item.title}</td>
                                <td>$ {item.price}</td>
                                <td>
                                    <button className="cart-search-button" onClick={() => removeQuantity(item.id)}>-</button>{`${item.quantity}`}
                                    <button className="cart-search-button" onClick={() => addQuantity(item.id)}>+</button>
                                </td>
                                <td>$ {item.price * item.quantity}</td>
                                <td><button className="cart-search-button" onClick={() => removeItem(item.id)}>X</button></td>
                                </tr>
                                ))}
                            </tbody> 
                            <thead>
                                <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>Total</th>
                                <th>$ {getTotalCart(count)}</th>
                                </tr>
                            </thead> 
                        </Table>
                        <div className="cart-checkout-button-container">
                            <button className="cart-checkout-button" onClick={() => navigate(`/checkout`)}>Finalizar compra</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
}