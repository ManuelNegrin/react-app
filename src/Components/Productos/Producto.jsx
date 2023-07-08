import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"

const ProductoItem = ({ name, price, img }) => {
  return (
    <div>
      <p>Producto: {name}</p>
      <p>Precio: {price}</p>
      <img src={img} width="100" heigth="100" />
    </div>
  )
}

const Producto = () => {


  const ALL_PRODUCTS =[
    { name: "Ahumador", price: 10, img: "src/Components/Productos/Ahumador.jpeg" },
    { name: "Parrillero", price: 20, img: "src/Components/Productos/Parrillero.jpeg" },
    { name: "Kit espatulas", price: 5, img: "src/Components/Productos/Espatulas.jpeg"},
  ];

  return (
    <div>
      <h1>Todos los productos</h1>
      {ALL_PRODUCTS.map((item, index) => (
        <ProductoItem
        // name={
        //   <BrowserRouter>
        //     <Routes>
        //       <Route path="/Contacto" element = {item.name}/>
        //   </Routes>
        //   </BrowserRouter>
        // }
          name={item.name}
          price={item.price}
          img={item.img}
          key={`${item.name}-${index}`}
        />
      ))}
    </div>
  );
};

export default Producto;
