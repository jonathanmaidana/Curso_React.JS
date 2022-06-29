import React from 'react';
import { Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import '../Item/ItemStyle.scss';


export default function Item ({item}) {    
const navigate = useNavigate()

    return(
        <>
        <Card>   
            <Card.Img className="item-img" variant="top" src={item.img} alt={item.title} height="300px" onClick={() => navigate(`/item/${item.id}`)}/>
            <span className="item-stock-img" style={{backgroundColor: item.stock <= 0 ? "rgb(219 0 0)" : "#000"}}>{item.stock <= 0 ? "Sin stock" : "Hay stock"}</span>
            <Card.Body>
                <h5 className="item-title">{item.title}</h5>
                <p className="item-price">${item.price}</p>
                <div className="item-button">
                    <button className="submit-button" onClick={() => navigate(`/item/${item.id}`)}>ver mas</button>
                </div>
            </Card.Body>
        </Card>
        </>
    )
}