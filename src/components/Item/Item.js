import React from 'react';
import { Card } from 'react-bootstrap'
import ItemCount from '../ItemDetail/ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast, Zoom } from 'react-toastify';


export default function Item ({item}) {    
const navigate = useNavigate()
const [count, setCount] = React.useState(1)

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

    return(
        <Card style={{ width: '18rem', margin: '3rem'}} >
            <Card.Img variant="top" src={item.img} style={{height: '350px', cursor: 'pointer', padding: '20px'}}/>
            <Card.Body>
                <h5>{item.title}</h5>
                <Card.Text>
                <p>Stock: {item.stock}</p>
                <p>Precio: {item.price}</p>
                </Card.Text>
                <div className="stock-container">
                    <ItemCount
                    stock={item.stock}
                    count={count} 
                    setCount={setCount}/>
                <div>
                    <button className="submit-button" onClick={onSubmit}>Agregar Al Carrito</button>
                    <ToastContainer theme="dark" transition={Zoom}/>
                    <button className="submit-button" onClick={() => navigate(`/item/${item.id}`)}>Ver mas</button>
                </div>
                </div>
            </Card.Body>
        </Card>
    )
}