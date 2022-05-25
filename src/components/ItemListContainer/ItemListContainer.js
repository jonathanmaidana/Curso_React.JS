import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { productos } from "../../Mocks/Api"

export default function ItemListContainer ({categoryId}) {
    const [items, setItems] = React.useState([])

    React.useEffect(() =>{
        if (categoryId) {
            setItems(productos.filter(cat => cat.category_id === +categoryId))
        }
        else {
            setItems(productos)
        }
    }, [categoryId])

    return (
        <Container>
            <Row>
                <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <ItemList items={items}/>
                </Col>
            </Row>
        </Container>
    )
}