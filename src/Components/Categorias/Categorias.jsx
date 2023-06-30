import { useEffect, useState } from "react";

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
            <button onClick={()=> handleClick ("Ahumadores")}>Ahumadores</button>
            <button onClick={()=> handleClick ("Parrilleros")}>Parrilleros</button>
            <button onClick={()=> handleClick ("Utensillos")}>Utensillos</button>
            <button onClick={()=> handleClick ("Insumos")}>Insumos</button>

        </div>
    )
}

export default Categorias