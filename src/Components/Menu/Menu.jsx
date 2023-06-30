import { Link, NavLink } from "react-router-dom"

const menu = () => {
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
            </ul>
        </nav>
    </header>

  )
};

export default menu;
