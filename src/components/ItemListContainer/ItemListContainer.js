import React from 'react';
import ItemList from '../ItemList/ItemList';
import { Container, Row, Col} from 'react-bootstrap'
import '../ItemListContainer/ItemListContainerStyle.scss'
/* ---------------------------- importa firestore dentro del proyecto ---------------------------- */
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore' 

export default function ItemListContainer ({title, categoryId }) {
    const [products, setProducts] = React.useState([])

    /* ----------- collection, getDocs, traigo una collecion de items ----------- */
    React.useEffect(() => {
        const db = getFirestore();
        const productosRef = (collection(db, "productos"))

        setTimeout(() =>{
            if(categoryId) {
                const q = query(
                    collection(db, "productos"),
                    where('categoryId', '==', categoryId)
                );
                getDocs(q).then((snapshot) => {
                    setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
                })
                .catch(error => console.log(error))                
            }
            else{
                getDocs(productosRef).then((snapshot) => {
                    snapshot.categoriId !== categoryId  ? console.log('Sin productos') :  setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                })
                .catch(error => console.log(error)) 
            }
        })
    }, [categoryId])


    return (
        <Container>
            <Row style={{margin: '50px 0'}}>
                <h1>{title}</h1>                    
                <Col>
                    <ItemList items={products}/>
                </Col>
            </Row>
        </Container>
    )
}