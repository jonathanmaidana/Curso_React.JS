import SearchIcon from '../NavBarWidgets/SearchIcon';

export default function Header(){
    return (
        <header className="header" expand="lg">
            <div className="header-search">
                <input type="text" className="input-search" name="q" placeholder='Buscar...'/>
                <div>
                    <SearchIcon />
                </div>
            </div>
            <div className="logo">
                LOGO
            </div>
            <div> 
                <ul className="header-icon">
                    <li className="text_primary">
                        Registrarme
                    </li>
                    <li>
                        Ingresar
                    </li>
                </ul>
            </div>
        </header>
    );
}