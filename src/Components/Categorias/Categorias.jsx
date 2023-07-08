import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Categorias =() =>{

    const [Categoria, setCategoria] = useState("");

    const handleClick = (cat) => {
        setCategoria(cat)
    }
    useEffect (()=> {
        document.title= `${Categoria}`
    }, [Categoria])

    return (
        <div>
            <h2>Categorias</h2>
            <NavLink to={"/Tienda/Ahumadores"}><button onClick={()=> handleClick ("Ahumadores")}>Ahumadores</button></NavLink>
            <button onClick={()=> handleClick ("Parrilleros")}>Parrilleros</button>
            <button onClick={()=> handleClick ("Utensillos")}>Utensillos</button>
            <button onClick={()=> handleClick ("Insumos")}>Insumos</button>

            

        </div>
    )
}

export default Categorias