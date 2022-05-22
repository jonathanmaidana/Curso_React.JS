import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'
import { useParams } from 'react-router-dom'

export default function Category () {
    const {categoryId} = useParams();

    return (
        <div>
            <div>
                <h1 style={{textAlign:'center', margin: '10px 0'}}>Lista de productos</h1>
            </div>           
                <ItemListContainer categoryId={categoryId}/>
        </div>
    )
}