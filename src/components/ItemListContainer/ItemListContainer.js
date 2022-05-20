import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList"
import { traerProd } from "../../Mocks/Api"

export default function ItemListContainer ({categoryId}) {
    const [listaRemeras, setListaRemeras] = React.useState([])
    const [items, setItems] = React.useState ([])

    React.useEffect(() => {
        if(categoryId) {
            setItems(listaRemeras.filter(item => item.category_id === +categoryId))
        }
        else{
            setItems(listaRemeras)
        }
    }, [categoryId])


    React.useEffect (()=> {
        traerProd.then((response) => setListaRemeras(response))
        .catch((err) => {console.log(err)})
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <ItemList listaRemeras={items}/>
                </Col>
            </Row>
        </Container>
    )
}