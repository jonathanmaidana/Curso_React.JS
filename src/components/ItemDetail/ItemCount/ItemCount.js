import React from 'react';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ItemCount ({ stock, initial }) {
/* ------------------------ Declaracion de state hook ----------------------- */
    const [count, setCount] = React.useState(+initial);

/* ----------------------- Funcion disminuir cantidad ----------------------- */
    const DecreaseCount = () => {
        if (count > initial) {
            setCount( count - 1)
        }
    }

/* ------------------------ Funcion aumentar cantidad ----------------------- */
    const AddCount = () => {
        if (count < stock){
            setCount( count + 1)
        }
    }

/* ---------------------- Funcion de agregra al carrito --------------------- */
    const onSubmit = () => {
        toast.success(`Agregaste ${count} productos al carrito`, {
            position: "bottom-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            });
    }


/* ----------------------- Componente de presentacion ----------------------- */
    const StockButton = ({handleOnClick, text}) => {
        return <button className="stock-button" onClick={handleOnClick}>{text}</button>
    }

    const AddButton = ({handleOnSubmit}) => {
        return <button className="submit-button" onClick={handleOnSubmit}>Agregar Al Carrito</button>
    }


    return(
        <div className="stock-container">
            <div>
                <StockButton text="-" handleOnClick={DecreaseCount}/>
                <span>{count}</span>
                <StockButton text="+" handleOnClick={AddCount}/>
            </div>
            <div style={{ padding: '20px' }}>
                <AddButton handleOnSubmit={onSubmit}>Agregar al carrito</AddButton>
                <ToastContainer theme="dark" transition={Zoom}/>
                <button className="submit-button">Ver más</button>
            </div>     
        </div>
    )
}