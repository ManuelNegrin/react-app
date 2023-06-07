import Carrito from "../Carrito/Carrito"

const NavBar = ()=> {
    return (
        <nav>
            <h3>Barba Ahumadores</h3>
            <div>
                <button>Inicio</button>
                <button>Nosotros</button>
                <button>Ahumadores</button>
                <button>Parrilleros</button>
                <button>Utensillos</button>
                <button>Insumos</button>
            </div>
            <Carrito/>
        </nav>
    )
}

export default NavBar