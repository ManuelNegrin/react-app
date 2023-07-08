import React from "react"
import Categorias from "../Categorias/Categorias";
import Carrito from "../Carrito/Carrito";
import Producto from "../Productos/Producto";

const tienda = (props) => {
  return (
    <div>
      <Categorias/>
      <Carrito/>
      <Producto/>
    </div>
  )
};

export default tienda;
