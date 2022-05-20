import React from 'react';
import { traerProd } from '../../Mocks/Api'
import ItemDetail from "../ItemDetail/ItemDetail"
import {Container, Row, Col} from "react-bootstrap"

export default function ItemDetailContainer (){
    const [item, setItem] = React.useState([])

    const getItem = () => {
        traerProd.then((response) => {
            setItem(response)
        }, []).catch((err) => {console.log(err)})
    }
    
    return(
        <Container>
            <Row>
                <Col style={{ width:'18rem', border: '1px solid'}}>
                    <ItemDetail item={getItem(item)}/>
                </Col>
            </Row>
        </Container>
    )
}