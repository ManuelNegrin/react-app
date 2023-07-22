import { Link, NavLink } from "react-router-dom"
import Carrito from "../Carrito/Carrito"

const menu = ({ cartItemsCount }) => {
  return (
    <header>
        <Link to={"/"}>
            <h1>Barba Ahumadores</h1>   
        </Link>
        <nav>
            <ul>
                <li>
                    <NavLink to={"/"}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Nosotros"}>
                        Nosotros
                    </NavLink>
                </li>
                <li>
                    <NavLink to={"/Tienda"}>
                        Tienda
                    </NavLink> 
                </li>
                <li>
                    <NavLink to={"/Contacto"}>
                        Contacto
                    </NavLink>
                </li>
                <li>
                    <Link to="/Carrito">Carrito ({cartItemsCount})</Link>
                </li>
            </ul>
        </nav>
    </header>

  )
};

export default menu;
