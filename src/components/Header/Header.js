import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/HeaderStyle.scss'
import SearchController from '../../components/SearchController/SearchController'


export default function Header(){

    return (
        <header className="header" expand="lg">
            <Link to="/">
                <div className="logo">
                <img src="../../images/logo.png" alt="Logo"/>
                </div>
                
            </Link>
            <SearchController/>
        </header>
    );
}