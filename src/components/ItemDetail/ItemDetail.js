import ItemCount from '../ItemCount/ItemCount'

export default function ItemDetail ({item}) {

    return (

        <div className="itemDetail">
            <div className="itemDetail-img">
                <img src={item.thumbnail} alt={item.title}/>
            </div>
            <div className="itemDetail-description">
                <h3>{item.title}</h3>
                <span>Precio: ${item.price}</span>
                <ItemCount stock={item.available_quantity} initial="1"/>  
            </div>
        </div>
        

        // <Card>
        //     <Card.Img  variant="top" src={item.thumbnail} />
        //     <Card.Body>
        //         <Card.Header>{item.title}</Card.Header>
        //         <Card.Text>
        //         <p>Stock: {item.available_quantity}</p>
        //         <p>Precio: {item.price}</p>
        //         </Card.Text>
        //     </Card.Body>    
        // </Card>
    )
}