import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import Loading from '../../components/Loading/Loading';


export default function ItemDetailContainer ({itemId}){
    const [item, setItem] = React.useState([])
    const [loading, setLoading] = React.useState(true);


    React.useEffect(() => {
        /* ---------------------------- traer la conexion --------------------------- */
        const db = getFirestore();

        /* ------------------ doc, getDoc trae un item en singular ------------------ */
        setTimeout(() => {
            const producto = doc(db, "productos", itemId);
            getDoc(producto).then((snapshot) => {
                if (snapshot.exists()) {
                    setItem({ id: snapshot.id, ...snapshot.data()})
                    setLoading(false)
                }
                else {
                    setLoading(false)
                }
            }) 
        }, 500)
    }, [itemId])
    
    return loading ? (
        <Loading/>
    ) : (
        <div style={{width: '80%'}}>
            <ItemDetail item={item}/>
        </div>
    )
}