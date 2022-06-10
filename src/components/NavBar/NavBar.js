import CartIcon from '../NavBar/NavBarWidgets/CartIcon'
import { Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import '../NavBar/NavBarStyle.scss'

export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand='sm' className="navBar justify-content-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navBar-nav">
                    <ul>
                        <Link to="/" className="nav-item">
                            Inicio
                        </Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown" className="navBar-nav-dropdown nav nav-item">
                                <NavDropdown.Item><Link to="/category/pantalones">Pantalones</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/category/remeras">Remeras</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/category/camperas">Camperas</Link></NavDropdown.Item>
                                <NavDropdown.Item><Link to="/category/relojes">Relojes</Link></NavDropdown.Item>
                            </NavDropdown>
                        <Link to="/contact" className="nav-item">Contacto</Link>
                        <CartIcon/>
                    </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}