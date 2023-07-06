import { useRef } from "react"

const Carrito =() => {
    
    const productos = useRef(0);

    const agregarcart = () => {
        productos.current = productos.current + 1;

    }
    return (
        <div>
            <p>Productos en el carrito</p>
            <button onClick={agregarcart}>Agregar al carrito</button>
        </div>
    )
}

export default Carrito