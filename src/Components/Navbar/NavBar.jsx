import Carrito from "../Carrito/Carrito"

const NavBar = ()=> {
    return (
        <nav>
            <h3>Barba Ahumadores</h3>
            <div>
                <button>Inicio</button>
                <button>Nosotros</button>
                <button>Tienda</button>
                <button>Contacto</button>

            </div>
            <Carrito/>
        </nav>
    )
}

export default NavBar