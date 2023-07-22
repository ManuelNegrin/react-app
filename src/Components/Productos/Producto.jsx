import React, { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const ProductoItem = ({ name, price, img , agregarCarrito}) => {

  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  const detalles = {
    description: "Esta es la descripción del producto.",
    stock: 10,
    categoria: "Categoría del producto",
  }

  const toggleDetalles = () => {
    setMostrarDetalles(!mostrarDetalles)
  }

  
  return (
    <div>
      <p>Producto: {name}</p>
      <p>Precio: {price}</p>
      <img src={img} width="100" heigth="100" />
      <button onClick={() => agregarCarrito({ name, price })}>Agregar al carrito</button>
      <button onClick={toggleDetalles}>
        {mostrarDetalles ? "Ocultar detalles" : "Ver detalles"}
      </button>
      {mostrarDetalles && (
        <div>
          <p>{detalles.description}</p>
          <p>Stock: {detalles.stock}</p>
          <p>Categoría: {detalles.categoria}</p>
        </div>
      )}
    </div>
  )
}

const Producto = () => {


  const ALL_PRODUCTS =[
    { name: "Ahumador", price: 10, img: "src/Components/Productos/Ahumador.jpeg" },
    { name: "Parrillero", price: 20, img: "src/Components/Productos/Parrillero.jpeg" },
    { name: "Kit espatulas", price: 5, img: "src/Components/Productos/Espatulas.jpeg"},
  ]

  return (
    <div>
      <h1>Todos los productos</h1>
      {ALL_PRODUCTS.map((item, index) => (
        <ProductoItem
          name={item.name}
          price={item.price}
          img={item.img}
          key={`${item.name}-${index}`}
        />
      ))}
    </div>
  );
};

export default ProductoItem;
