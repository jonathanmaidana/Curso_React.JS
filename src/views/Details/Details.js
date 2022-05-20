import ItemDetailContainer from '../../components/ItemDetailContainer/ItemDetailContainer';
import { useParams } from 'react-router-dom'

export default function Category () {
    const { itemId } = useParams();

    return (
        <div>
            <ItemDetailContainer itemId={ itemId }/>
        </div>
    )
}