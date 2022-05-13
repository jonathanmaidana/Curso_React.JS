import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'


export default function Item ({producto}) {
    return(
        <Card style={{ width: '18rem', margin: '3rem'}}>
            <Card.Img variant="top" src={producto.img}/>
            <Card.Body>
                <Card.Header>{producto.title}</Card.Header>
                <Card.Text>
                <p>Stock: {producto.stock} </p>
                <p>Precio: {producto.precio}</p>
                </Card.Text>
                <div>
                    <ItemCount stock="5" initial="1"/>
                </div>
            </Card.Body>
        </Card>
    )
}