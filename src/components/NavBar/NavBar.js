import CartWidger from '../../components/CartWidget/CartIcon';
import { Navbar, NavDropdown } from "react-bootstrap"
import { Link } from 'react-router-dom'
import '../NavBar/NavBarStyle.scss'

export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand='md' className="navBar justify-content-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navBar-nav">
                    <ul>
                        <Link to="/" className="nav-item">
                            Inicio
                        </Link>
                            <NavDropdown title="Productos" id="basic-nav-dropdown" className="navBar-nav-dropdown">
                                <NavDropdown.Item>
                                    <Link to="/category/pantalones">Pantalones</Link>
                                    <Link to="/category/remeras">Remeras</Link>
                                    <Link to="/category/camperas">Camperas</Link>
                                    <Link to="/category/relojes">Relojes</Link>
                                </NavDropdown.Item>
                            </NavDropdown>
                        <Link to="/contact" className="nav-item">Contacto</Link>
                        <CartWidger/>
                    </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}