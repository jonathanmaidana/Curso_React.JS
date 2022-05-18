import { Card } from 'react-bootstrap'
import ItemCount from '../ItemCount/ItemCount'


export default function Item ({remeras}) {
    return(
        <Card style={{ width: '18rem', margin: '3rem'}}>
            <Card.Img variant="top" src={remeras.thumbnail}  />
            <Card.Body>
                <Card.Header>{remeras.title}</Card.Header>
                <Card.Text>
                <p>Stock: {remeras.available_quantity}</p>
                <p>Precio: {remeras.price}</p>
                </Card.Text>
                <div>
                    <ItemCount stock="5" initial="1"/>
                </div>
            </Card.Body>
        </Card>
    )
}