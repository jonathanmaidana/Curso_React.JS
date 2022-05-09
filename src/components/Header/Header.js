import React from 'react';
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
                <ul className="header-text">
                    <li>
                        Registrarme
                    </li>
                    <span className="text-primary"></span>
                    <li>
                        Iniciar Sesión
                    </li>
                </ul>
            </div>
        </header>
    );
}