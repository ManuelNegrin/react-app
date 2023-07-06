import Home from "./Components/Home/Home"
import Menu from "./Components/Menu/Menu"
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
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
