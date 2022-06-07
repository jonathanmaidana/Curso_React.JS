import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap'
import Loading from '../Loading/Loading'
import { CartContext } from '../../context/CartContext'
import { useNavigate } from 'react-router-dom'

export default function CartList ({title, text}){
    const [loading, setLoading] = React.useState(true)
    const { cart, deleteAll, removeItem } = React.useContext(CartContext)
    const navigate = useNavigate()
    

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])

    return cart.length === 0 ? (
        <Container>
            <Row>
                <Col style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>
                <h1 style={{margin:'50px 0'}}>{text}</h1>
                <button onClick={() => navigate(`/`)}>Buscar Productos</button>
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
                    <Table>
                        <thead>
                            <tr>
                            <th></th>
                            <th>Producto</th>
                            <th>Cantidad</th>
                            <th>Precio</th>
                            <th>Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map((item) => (
                            <tr>
                            <div style={{display: 'flex', justifyContent: 'space-around', margin: '0 20px 0 0'}}>
                                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                    <button onClick={() => removeItem(item.id)}>X</button>
                                    </div>
                                <img src={item.img} style={{width: "60px"}}></img>
                            </div>
                            <td>{item.title}</td>
                            <td>{item.quantity}</td>
                            <td>$ {item.price}</td>
                            <td>$ {item.price * item.quantity}</td>
                            </tr> 
                            ))}
                        </tbody>    
                    </Table>
                    <button onClick={() => deleteAll()}>Eliminar Todo</button>
                    </Col>
                </Row>
            </Container>
        )
}