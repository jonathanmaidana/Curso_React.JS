import React from "react"
import {Container, Row, Col} from "react-bootstrap"
import ItemList from "../ItemList/ItemList"

export default function ItemListContainer ({greeting}) {

    const [listaProductos, setListaProductos] = React.useState([])

    const productos = [
        { id:1, title: 'producto1', precio: 25000, stock: 5, img: 'https://picsum.photos/200' },
        { id:2, title: 'producto2', precio: 23000, stock: 10, img: 'https://picsum.photos/201' },
        { id:3, title: 'producto3', precio: 26000, stock: 6, img: 'https://picsum.photos/202' }
    ]

    const traerProd = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 3000)
    })

    React.useEffect(()=>{
        traerProd.then((res) => 
            setListaProductos(res) 
        ).catch((err) => console.log(err))
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
                    <ItemList listaProductos={listaProductos}/>
                </Col>
            </Row>
        </Container>
    )
}