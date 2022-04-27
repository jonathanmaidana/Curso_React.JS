export default function NavBar(){
    return (
        <header className="navBar">
            <div className="logo">LOGO</div>
            <input type="search" className="navBar-search"/>
            <nav className="navBar-nav">
                <ul>
                    <li>Inicio</li>
                    <li>Productos</li>
                    <li>Contacto</li>
                </ul>
            </nav>
            <div className="navBar-icon"> 
                <button>Carrito</button>
                <button>Ingresar</button>
            </div>
        </header>
    );
}