import React from 'react';
import { productos } from '../../Mocks/Api';
import ItemDetail from '../ItemDetail/ItemDetail';

export default function ItemDetailContainer ({itemId}){
    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        setItem(productos.find(item => item.id === +itemId))
    }, [itemId])
    
    return(
        <div style={{width: '80%'}}>
            <ItemDetail item={item}/>
        </div>
    )
}