import React from 'react';
import '../ItemCount/ItemCountStyle.scss';


export default function ItemCount ({stock, count, setCount}) {
/* ----------------------- Funcion disminuir cantidad ----------------------- */
    const DecreaseCount = () => {
        if (count > 1) {
            setCount( count - 1)
        }
    }

/* ------------------------ Funcion aumentar cantidad ----------------------- */
    const AddCount = () => {
        if (count < stock){
            setCount( count + 1)
        }
    }

/* ----------------------- Componente de presentacion ----------------------- */
    const StockButton = ({handleOnClick, text}) => {
        return <button className="stock-button" onClick={handleOnClick}>{text}</button>
    }

    return(
        <div>
            <StockButton text="-" handleOnClick={DecreaseCount}/>
            <span>{count}</span>
            <StockButton text="+" handleOnClick={AddCount}/>    
        </div>
    )
}