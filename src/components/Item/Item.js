import React from 'react';
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import '../Item/ItemStyle.scss';


export default function Item ({item}) {    
const navigate = useNavigate()

    return(
        <Card style={{ width: '18rem', margin: '3rem'}} >
            <Card.Img className="item-img" variant="top" src={item.img} alt={item.title} height="300px" onClick={() => navigate(`/item/${item.id}`)}/>
            <span className="item-stock-img" style={{backgroundColor: item.stock === 0 ? "#8d8d8d" : "black"}}>{item.stock === 0 ? "Sin stock" : "Hay stock"}</span>
            <hr style={{margin: '0'}}></hr>
            <Card.Body>
                <h5 className="item-title">{item.title}</h5>
                <p className="item-price">Precio: ${item.price}</p>
                <div className="item-counter">
                <p className="item-stock">Cantidad disponible: {item.stock}</p>
                    <div className="item-button-container">
                        <button className="submit-button" onClick={() => navigate(`/item/${item.id}`)}>Ver mas</button>
                    </div>
                </div>
            </Card.Body>
        </Card>
    )
}