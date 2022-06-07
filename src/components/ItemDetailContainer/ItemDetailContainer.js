import React from 'react';
import { listaProductos } from '../../Data/Productos';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer ({itemId}){
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        listaProductos
        .then((res) => setItem(res.find(item => item.id === +itemId)))
    }, [itemId])
    
    return(
        <div style={{width: '80%'}}>
            <ItemDetail item={item}/>
        </div>
    )
}