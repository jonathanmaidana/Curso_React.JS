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
            <Card.Img variant="top" src={item.img} style={{maxWidth: '100%', width: '250px', cursor: 'pointer', padding: '20px'}}/>
            <hr></hr>
            <Card.Body>
                <h5 className="itemDetail-title">{item.title}</h5>
                <Card.Text>
                <p>Stock: {item.stock}</p>
                <p className="itemDetail-price">Precio: {item.price}</p>
                </Card.Text>
                <div className="itemDetail-stock">
                    <ItemCount
                    stock={item.stock}
                    count={count} 
                    setCount={setCount}
                    />
                <div>
                    <button className="submit-button" onClick={() => navigate(`/item/${item.id}`)}>Ver mas</button>
                </div>
                </div>
            </Card.Body>
        </Card>
    )
}