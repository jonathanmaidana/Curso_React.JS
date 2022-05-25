import React from 'react';
import ItemCount from '../ItemDetail/ItemCount/ItemCount'
import { useNavigate } from 'react-router-dom'



export default function ItemDetail ({item}) {
    const [count, setCount] = React.useState(1);
    const navigate = useNavigate()

    const [action, setAction] = React.useState("comprar")

    
    const AddToCart = () => (
        <button className="submit-button" onClick={() => setAction("carrito")}>Agregar Al Carrito</button>
        )

    const GoTocart = () => (
        <button className="submit-button" onClick={() => navigate(`/cart`)}>ir al carrito</button>
    )

    const Button = action === "comprar" ? AddToCart : GoTocart

    return (
        <div className="itemDetail">
            <div className="itemDetail-img">
                <img src={item.img} alt={item.title}/>
            </div>  
            <div className="itemDetail-description">
                <h3>{item.title}</h3>
                <span>Precio: ${item.price}</span>
                <div className="stock-container">
                    <ItemCount 
                    stock={item.stock}
                    count={count} 
                    setCount={setCount}
                    />
                    <div>
                        <Button></Button>
                        <div>
                            <button className="submit-button" onClick={() => navigate(`/products`)}>Volver</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}