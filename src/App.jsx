import Contacto from "./Components/Contacto/Contacto"
import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu"
import Nosotros from "./Components/Nosotros/Nosotros"
import Tienda from "./Components/Tienda/Tienda"
import { BrowserRouter, Route, Routes } from "react-router-dom"


const App = () => {
  return (
    <>
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element ={<Home/>} />
        <Route path='/Tienda' element ={<Tienda/>} />
        <Route path="/Nosotros" element ={<Nosotros/>}/>
        <Route path="/Contacto" element ={<Contacto/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
