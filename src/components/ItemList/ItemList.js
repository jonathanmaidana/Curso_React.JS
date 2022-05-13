import React from 'react'
import Item from '../Item/Item'

export default function ItemList ({listaProductos}) {
    
    return (                
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            {listaProductos.map((producto) => <Item key={producto.id} producto={producto}/>)}
        </div>
    )
}