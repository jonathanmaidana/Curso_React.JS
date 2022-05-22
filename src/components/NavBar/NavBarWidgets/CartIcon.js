import { Link } from 'react-router-dom'


export default function CartIcon (){
    return (
        <Link to="/cart">
            <span className="material-icons">
                local_mall
            </span> 
        </Link>
        
    )
}