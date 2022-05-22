import React from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemDetail/ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'


export default function Item ({item}) {    
const navigate = useNavigate()
    return(
        <Card style={{ width: '18rem', margin: '3rem'}} >
            <Card.Img variant="top" src={item.img} style={{height: '350px', cursor: 'pointer', padding: '20px'}}/>
            <Card.Body>
                <h5>{item.title}</h5>
                <Card.Text>
                <p>Stock: {item.stock}</p>
                <p>Precio: {item.price}</p>
                </Card.Text>
                <div>
                    <ItemCount stock="5" initial="1"/>
                    <button  onClick={() => navigate(`/item/${item.id}`)}>Ver mas</button>
                </div>
            </Card.Body>
        </Card>
    )
}