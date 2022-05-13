import CartIcon from '../NavBarWidgets/CartIcon'
import {Navbar, NavDropdown} from "react-bootstrap"

export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand='sm' className="navBar justify-content-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navBar-nav">
                    <ul>
                        <li>Inicio</li>
                        <NavDropdown title="Productos" id="basic-nav-dropdown" className="navBar-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Remeras</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Camperas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Zapatillas</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Pantalones</NavDropdown.Item>
                        </NavDropdown>
                        <li>Contacto</li>
                        <li><CartIcon/><span>0</span></li>
                    </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}