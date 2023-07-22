import React, { useState } from 'react';
import Contacto from "./Components/Contacto/Contacto"
import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu"
import Nosotros from "./Components/Nosotros/Nosotros"
import Tienda from "./Components/Tienda/Tienda"
import Carrito from "./Components/Carrito/Carrito"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const App = () => {

  const [itemsCarrito, setCartItems] = useState([]);

  const agregarCarrito = (product) => {
    setCartItems([...itemsCarrito, product]);
  };

  return (
    <header>
      <BrowserRouter>
        <Menu cartItemsCount={itemsCarrito.length}/>
        <Routes>
          <Route path="/" element ={<Home/>} />
          <Route path='/Tienda' element ={<Tienda/>} />
          <Route path="/Nosotros" element ={<Nosotros/>}/>
          <Route path="/Contacto" element ={<Contacto/>}/>
        </Routes>
        {/* <Carrito itemsCarrito={itemsCarrito} /> */}
      </BrowserRouter>
    </header>
  )
}

export default App
