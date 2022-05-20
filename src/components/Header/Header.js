import React from 'react';
import SearchIcon from '../NavBar/NavBarWidgets/SearchIcon';
import { Link } from 'react-router-dom'


export default function Header(){
    return (
        <header className="header" expand="lg">
            <div className="header-search">
                <input type="text" className="input-search" name="q" placeholder='Buscar...'/>
                <div>
                    <SearchIcon />
                </div>
            </div>
            <Link to="/home" style={{ color: 'white', textDecoration: 'none' }}>
                <div className="logo">
                    LOGO
                </div>
            </Link>
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