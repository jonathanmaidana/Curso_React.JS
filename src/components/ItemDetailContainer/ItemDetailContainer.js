import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer ({itemId}){
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        /* ---------------------------- traer la conexion --------------------------- */
        const db = getFirestore();

        /* ------------------ doc, getDoc trae un item en singular ------------------ */
        const producto = doc(db, "productos", itemId);
        getDoc(producto).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data()})
            }
        }) 
    }, [itemId])
    
    return(
        <div style={{width: '80%'}}>
            <ItemDetail item={item}/>
        </div>
    )
}