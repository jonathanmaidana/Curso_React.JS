import React from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemDetail/ItemCount/ItemCount'
import { useParams, Link, useNavigate } from 'react-router-dom'


export default function Item ({remeras, item}) {    
    const navigate = useNavigate()
    return(
        <Card style={{ width: '18rem', margin: '3rem'}} onClick={() => navigate(`/product/${item.id}`)}>
            <Card.Img variant="top" src={remeras.img}/>
            <Card.Body>
                <Card.Header>{remeras.title}</Card.Header>
                <Card.Text>
                <p>Stock: {remeras.stock}</p>
                <p>Precio: {remeras.price}</p>
                </Card.Text>
                <div>
                    <ItemCount stock="5" initial="1"/>
                </div>
            </Card.Body>
        </Card>
    )
}