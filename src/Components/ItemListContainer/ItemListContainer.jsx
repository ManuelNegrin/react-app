import React, { useState } from 'react';
import Carrito from '../carrito/Carrito'
import ProductoItem from '../Productos/Producto';

const ItemListContainer = () => {
  // Estado para almacenar items en el carrito de compras
  const [itemsCarrito, setCartItems] = useState([]);

  // Agregar item al carrito de compras
  const agregarCarrito = (producto) => {
    setCartItems([...itemsCarrito, producto]);
  };

  const productos = [
    { name: "Ahumador", price: 10, img: "src/Components/Productos/Ahumador.jpeg" },
    { name: "Parrillero", price: 20, img: "src/Components/Productos/Parrillero.jpeg" },
    { name: "Kit espatulas", price: 5, img: "src/Components/Productos/Espatulas.jpeg"},
    // Se pueden agregar mas productos aca
  ];

  return (
    <div className="item-list-container">
      <h2>Productos disponibles</h2>
      <div className="productos">
        {productos.map((producto) => (
          <ProductoItem
            key={producto.id}
            name={producto.name}
            price={producto.price}
            image={producto.image}
            agregarCarrito={() => agregarCarrito(producto)}
          />
        ))}
      </div>
      <Carrito itemsCarrito={itemsCarrito} />
    </div>
  );
};

export default ItemListContainer;