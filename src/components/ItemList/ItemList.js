import React from 'react'
import Item from '../Item/Item'

export default function ItemList ({listaRemeras}) {
    
    return (                
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap'}}>
            {listaRemeras.map((remeras) => <Item key={remeras.id} remeras={remeras}/>)}
        </div>
    )
}