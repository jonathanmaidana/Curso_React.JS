import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { traerProd } from "../../Mocks/Api"

export default function ItemListContainer ({greeting}) {

    const [listaRemeras, setListaRemeras] = React.useState([])


    React.useEffect (()=> {
        traerProd.then((response) => setListaRemeras(response.data.results))
        .catch((err) => {console.log(err)})
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <Container>
            <Row>
                <Col>    
                </Col>
            </Row>
            <Row>
                <Col>
                <h1 style={{textAlign: 'center'}}>{greeting}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ItemList listaRemeras={listaRemeras}/>
                </Col>
            </Row>
        </Container>
    )
}