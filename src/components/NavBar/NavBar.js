import CartIcon from '../NavBar/NavBarWidgets/CartIcon'
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import { Link, NavLink } from 'react-router-dom'

export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand='sm' className="navBar justify-content-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navBar-nav">
                    <ul>
                        <Link to="*">
                            Inicio
                        </Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown" className="navBar-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1"><Link to="/category/1">Pantalones</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2"><Link to="/category/2">Remeras</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3"><Link to="/category/3">Camperas</Link></NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.4"><Link to="/category/4">Relojes</Link></NavDropdown.Item>
                            </NavDropdown>
                        <Link to="/contact">Contacto</Link>
                        <Link to="/cart"><CartIcon/><span>0</span></Link>
                    </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}