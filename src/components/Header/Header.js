import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/HeaderStyle.scss'
import SearchController from '../../components/SearchController/SearchController'


export default function Header(){

    return (
        <header className="header" expand="lg">
            
            <SearchController/>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
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