import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { getDocs, collection, getFirestore } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom'
import './SearchController.scss'

export default function Search() {
    const [items, setItems] = React.useState([])
    const navigate = useNavigate()
    

    React.useEffect(() => {
        const db = getFirestore();

        const products = (collection(db, 'productos'));
        getDocs(products).then((snapshot) => {
            setItems(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })))
        })
    }, [])

    const [value, setValue] = React.useState('')

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onSearch = (searchValue) => {
        setValue(searchValue);
    }

    return(
        <div>
            <div>
                <div className="header-search">
                    <input type='text' value={value} onChange={onChange} className="input-search" placeholder='Buscar...' icon={faSearch} />
                    <button className="icon-search"><FontAwesomeIcon  icon={faSearch} onClick={()=> onSearch}/></button>
                </div>
            </div>
            <div className="dropdown-search">
                {items.filter(item => {
                    const searchValue = value.toLocaleLowerCase();
                    const fullName = item.title.toLocaleLowerCase();

                    return searchValue && fullName.startsWith(searchValue) && fullName !== searchValue;
                })
                .map((item) => (
                <div onClick={() => navigate(`/item/${item.id}`)} className="dropdown-row" key={item.title}>
                    <img src={item.img} style={{width:'50px'}}/>
                    <div className="item-search">
                        <span className="item-search-title">{item.title}</span>
                        <span className="item-search-price">${item.price}</span>
                    </div>
                    <div>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </div>
                </div>
                ))}
                
            </div>
        </div>
    )
}