import React from 'react';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount ({stock, count, setCount, onSubmit}) {
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

    const AddButton = ({ handleOnSubmit }) => {
        return <button className="stock-button" onClick={handleOnSubmit}>Agregar al carrito</button>
    }

    return(
        <div>
            <StockButton text="-" handleOnClick={DecreaseCount}/>
            <span>{count}</span>
            <StockButton text="+" handleOnClick={AddCount}/>
            <AddButton handleOnSubmit={onSubmit}/>
        </div>
    )
}