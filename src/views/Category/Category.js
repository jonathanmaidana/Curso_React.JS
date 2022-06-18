import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import {useParams} from 'react-router-dom';

export default function Category () {
    const {categoryId} = useParams();

    return (
        <ItemListContainer categoryId={categoryId} title="Lista de Productos"/>
    )
}