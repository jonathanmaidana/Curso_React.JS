import ItemListContainer from '../../components/ItemListContainer/ItemListContainer'

export default function Products () {
    return (
        <div>
            <div style={{ textAlign: 'center', fontSize: '2rem', fontWeight: '700', margin: '10px 0' }}>   Lista de productos</div>
            <ItemListContainer/>
        </div>
    )
}