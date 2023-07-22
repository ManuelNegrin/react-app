import React, { useState } from 'react';
import Categorias from "../Categorias/Categorias";
import Carrito from "../Carrito/Carrito";
import ItemListContainer from "../ItemListContainer/ItemListContainer";

const Tienda = (props) => {

  const [itemsCarrito, setCartItems] = useState([]);

  const agregarAlCarrito = (producto) => {
    setCartItems([...itemsCarrito, producto]);
  };

  return (
    <div>
      <h1>Bienvenido a la tienda</h1>
      <Categorias/>
      <ItemListContainer/>
      {/* <Carrito/> */}
    </div>
  )
};

export default Tienda;
