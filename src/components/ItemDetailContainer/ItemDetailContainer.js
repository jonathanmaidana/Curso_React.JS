import React from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';

export default function ItemDetailContainer ({itemId}){
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        /* ---------------------------- traer la conexion --------------------------- */
        const db = getFirestore();

        /* ------------------ doc, getDoc trae un item en singular ------------------ */
        const productoRef = doc(db, "productos", itemId);
        getDoc(productoRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data()})
                console.log(snapshot.data(  ));   
            }
        }) 
    }, [itemId])

    // React.useEffect(() => {
    //     listaProductos
    //     .then((res) => setItem(res.find(item => item.id === +itemId)))
    // }, [itemId])
    
    return(
        <div style={{width: '80%'}}>
            <ItemDetail item={item}/>
        </div>
    )
}