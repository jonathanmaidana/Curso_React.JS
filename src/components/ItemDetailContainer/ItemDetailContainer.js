import React from 'react';
import { traerProd } from '../../Mocks/Api'
import ItemDetail from "../ItemDetail/ItemDetail"
import {Container, Row, Col} from "react-bootstrap"


export default function ItemDetailContainer (){
    const [item, setItem] = React.useState([])

    const getItem = () => {
        traerProd.then((response) => {
            setItem(response.data.results[0])
        }, []).catch((err) => {console.log(err)})
    }
    console.log(getItem(item))



    return(
        <Container>
            <Row>
                <Col className="item-detail" style={{ width:'18rem', border: '1px solid'}}>
                    <ItemDetail item={item}/>
                </Col>
            </Row>
        </Container>
    )
}