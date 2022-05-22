import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

export default function Home () {
    return (
        <div>
            <h1 style={{textAlign: 'center', margin: '10px 0'}}>Nuestros productos</h1>
            <div>
                <ItemListContainer/>
            </div>
        </div>
    )
}