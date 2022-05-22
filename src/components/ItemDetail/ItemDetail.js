import React from 'react';
import ItemCount from '../ItemDetail/ItemCount/ItemCount'

export default function ItemDetail ({item}) {
    return (
        <div className="itemDetail">
            <div className="itemDetail-img">
                <img src={item.img} alt={item.title}/>
            </div>  
            <div className="itemDetail-description">
                <h3>{item.title}</h3>
                <span>Precio: ${item.price}</span>
                <ItemCount stock={item.stock} initial="1"/>
            </div>
        </div>
    )
}