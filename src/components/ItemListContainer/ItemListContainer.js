import {Container, Row, Col} from "react-bootstrap"
import ItemCount from '../ItemCount/ItemCount'

export default function ItemListContainer ({greeting}) {
    return (
        <Container>
            <Row>
                <Col>
                <h1>{greeting}</h1>
                </Col>
            </Row>
            <Row>
                <ItemCount stock="5" initial="1"/>
            </Row>
        </Container>
    )
}