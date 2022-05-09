import CartIcon from '../NavBarWidgets/CartIcon'
import {Navbar} from "react-bootstrap"

export default function NavBar() {
    return(
        <Navbar collapseOnSelect expand='sm' className="navBar justify-content-center">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" className="navBar-nav">
                    <ul>
                        <li>Inicio</li>
                        <li>Productos</li>
                        <li>Contacto</li>
                        <li><CartIcon/><span>0</span></li>
                    </ul>
            </Navbar.Collapse>
        </Navbar>
    )
}