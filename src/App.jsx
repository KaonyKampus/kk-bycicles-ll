import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Footer from './components/Footer/FooterCompo.jsx'
import './App.css'
import ItemDetailContainer from './components/Item_detail_container/ItemDetailContainer.jsx'
import {BrowserRouter,Routes, Route } from "react-router-dom"



function App() {
  


  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
            <Route path="/"  element={<ItemListContainer greeting ="Bienvenid@s a KK-Bycicles"/>}/>
            <Route path="/categoria/:idCategoria" element={<ItemListContainer greeting ="Bienvenid@s a KK-Bycicles"/>}/>
            <Route path="/detalle/:productoId" element={<ItemDetailContainer/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>

  )
}

export default App




