import React from 'react';
import ItemList from '../ItemList/ItemList';
// import { listaProductos } from '../../Data/Productos';
import Loading from '../Loading/Loading'
import { Container, Row, Col} from 'react-bootstrap'
/* ---------------------------- importa firestore dentro del proyecto ---------------------------- */
import { getFirestore, collection, getDocs, query, where } from 'firebase/firestore' 

export default function ItemListContainer ({title, categoryId }) {
    const [products, setProducts] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    /* ----------- collection, getDocs, traigo una collecion de items ----------- */
    React.useEffect(() => {
        const db = getFirestore();
        const productosRef = (collection(db, "productos"))

        setLoading(true);
        setTimeout(() =>{
            if(categoryId) {
            const q = query(
                collection(db, "productos"),
                where('categoryId', '==', categoryId)
            );
            getDocs(q).then((snapshot) => {
                setProducts(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()})))
                setLoading(false)
            })
            .catch(error => console.log(error))                
            } 
            else{
                getDocs(productosRef).then((snapshot) => {
                    snapshot.size === 0 ? console.log('Sin productos') :  setProducts(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
                    setLoading(false)
                })
                .catch(error => console.log(error)) 
            }
        }, 1000)
    }, [categoryId])


    return (
        loading ? (
        <Loading/>
        ) : (
        <Container>
            <Row>
                <h1 style={{textAlign: 'center', margin:'50px 0', fontSize:'50px'}}>{title}</h1>                    
                <Col style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
                    <ItemList items={products}/>
                </Col>
            </Row>
        </Container>
        )
    )
}