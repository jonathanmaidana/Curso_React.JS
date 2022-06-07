import React from 'react';
import ItemList from '../ItemList/ItemList';
import { listaProductos } from '../../Data/Productos';
import Loading from '../Loading/Loading'
import { Container, Row, Col } from 'react-bootstrap'

export default function ItemListContainer ({title, categoryId}) {
    const [items, setItems] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
                listaProductos
                .then((res) => categoryId ? setItems(res.filter(cat => cat.category_id === +categoryId)) : setItems(res))
                }, 2000)
        listaProductos
        .catch((error) => console.log(error))
        .finally(() => setLoading(true))
    }, [categoryId])

    return (
        loading ? (
        <Loading/>
        ) : (
        <Container>
                <Row>
                    <h1 style={{textAlign: 'center', margin:'50px 0'}}>{title}</h1>                    
                    <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                        <ItemList items={items}/>
                    </Col>
                </Row>
            </Container>
        )
    )
}